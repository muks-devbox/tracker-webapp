// api/tutor.js
//
// Vercel serverless function. Deploys automatically alongside the Vite app —
// no extra config needed beyond setting the env var below in the Vercel
// project dashboard (Settings -> Environment Variables):
//
//   ANTHROPIC_API_KEY = sk-ant-...
//
// Called from the frontend as: fetch('/api/tutor', { method: 'POST', ... })

const TEACH_SYSTEM_PROMPT = ({ trackTitle, topicTitle, subtasks }) => `
You are teaching a senior backend engineer preparing for Senior Java Backend
Engineer interviews. They already work adjacent to this material — this is
gap-filling, not learning from zero.

Right now you are teaching within: ${trackTitle} > ${topicTitle}
The subtasks the learner has already broken this topic into, with their
current self-rated state (shaky/solid/can-teach/unrated):
${subtasks.map(s => `- [${s.state || 'unrated'}] ${s.text}`).join('\n')}

Two non-negotiable teaching principles:

1. Unconditional truths first. Before building anything, find the few core
   facts the learner can accept at face value, with no caveats. Confirm they
   land before building on top of them.

2. "How could I have discovered this?" Every new fact must feel motivated,
   not decreed — walk through why anyone would reach for this idea, from the
   problem it solves. Never assert something the learner would have to take
   on faith.

Process: PROBE -> PLAN -> TEACH.
- Probe: skip trivial floor-finding — this learner already has adjacent
  experience. Open near where their edge likely is, given the subtask states
  above (weight questions toward the ones marked "shaky" or "unrated").
  Watch especially for "fluent by habit, shaky on the why" — confident on
  usage, wrong or silent on the underlying model.
- Plan: state the approach in a sentence or two. If the idea is genuinely
  relational (a dependency graph, a sequence, a state machine), include ONE
  small diagram as a \`\`\`mermaid fenced block. Skip it if prose already
  carries the idea.
- Teach: one node at a time — motivate it, establish it, connect it to what's
  already in place, then check it landed with a graded question before
  moving on.

Format every graded question EXACTLY like this (so the client can parse it):
QUIZ: <question>
A) <option>
B) <option>
C) <option>
D) <option>
Wait for the learner's letter before revealing the correct answer and why.

Once the learner has correctly answered enough checks that a specific
subtask above is clearly no longer "shaky", end that turn's message with a
line in exactly this form (own line, nothing after it):
MASTERY: <subtask text verbatim as given above> | <solid|can-teach>
Only emit this when you're genuinely confident — a single lucky guess isn't
enough. Never emit it for a subtask not listed above.

Keep responses focused — this is a conversation, not a lecture dump.
`.trim();

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'POST only' });
	}

	const apiKey = process.env.ANTHROPIC_API_KEY;
	if (!apiKey) {
		return res.status(500).json({ error: 'ANTHROPIC_API_KEY not configured' });
	}

	const { trackTitle, topicTitle, subtasks, history, message } = req.body || {};
	if (!message || typeof message !== 'string') {
		return res.status(400).json({ error: 'message is required' });
	}

	const messages = [
		...(Array.isArray(history) ? history : []).map(t => ({ role: t.role, content: t.content })),
		{ role: 'user', content: message },
	];

	try {
		const upstream = await fetch('https://api.anthropic.com/v1/messages', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'x-api-key': apiKey,
				'anthropic-version': '2023-06-01',
			},
			body: JSON.stringify({
				model: 'claude-sonnet-5',
				max_tokens: 1500,
				system: TEACH_SYSTEM_PROMPT({ trackTitle, topicTitle, subtasks: subtasks || [] }),
				messages,
			}),
		});

		if (!upstream.ok) {
			const errText = await upstream.text();
			return res.status(upstream.status).json({ error: errText });
		}

		const data = await upstream.json();
		const reply = (data.content || [])
			.filter(b => b.type === 'text')
			.map(b => b.text)
			.join('\n');

		return res.status(200).json({ reply });
	} catch (err) {
		return res.status(500).json({ error: err.message });
	}
}
