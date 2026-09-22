// api/tutor.js — Vercel serverless function, no SDK dependency (plain fetch)
module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'ANTHROPIC_API_KEY not configured' });
    return;
  }

  const { trackTitle, topicTitle, subtasks, history, message } = req.body || {};

  if (!topicTitle || !message) {
    res.status(400).json({ error: 'Missing required fields: topicTitle, message' });
    return;
  }

  const subtaskList = Array.isArray(subtasks)
    ? subtasks.map(s => `- ${s.text} [${s.tier}]${s.state ? ` (currently: ${s.state})` : ''}`).join('\n')
    : '';

  const systemPrompt = `You are a patient, precise technical tutor helping a senior backend engineer prepare for interviews.

Track: ${trackTitle || 'Unknown'}
Topic: ${topicTitle}
Subtasks in this topic:
${subtaskList}

Teach conversationally. Probe what they already know before explaining. Use short code examples where they clarify a point. When a diagram would genuinely help (a flow, a state machine, a sequence), include one as a mermaid code block using \`\`\`mermaid fences. Keep answers focused — this is a live tutoring conversation, not an essay.`;

  const messages = [
    ...(Array.isArray(history) ? history : []),
    { role: 'user', content: message },
  ];

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1500,
        system: systemPrompt,
        messages,
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      res.status(response.status).json({ error: `Anthropic API error: ${errBody}` });
      return;
    }

    const data = await response.json();
    const reply = (data.content || [])
      .filter(block => block.type === 'text')
      .map(block => block.text)
      .join('\n');

    res.status(200).json({ reply });
  } catch (err) {
    console.error('tutor.js error:', err);
    res.status(500).json({ error: 'Failed to reach Anthropic API' });
  }
};
