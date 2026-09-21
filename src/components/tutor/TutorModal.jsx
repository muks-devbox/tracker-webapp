// src/components/tutor/TutorModal.jsx
//
// Opens as a modal (same pattern as StreakHistoryModal). Teaches either one
// subtask (pass `subtask`) or a whole topic (omit it). On a MASTERY signal
// from the model, surfaces a one-click button that writes straight into
// useProgress().setSubtaskState — no separate "was this understood?" step.
//
// npm install mermaid   (peer dep for diagram rendering; nothing else added)

import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import mermaid from 'mermaid';
import { useProgress } from '../../hooks/useProgress';

mermaid.initialize({ startOnLoad: false, theme: 'neutral' });

const STATE_LABEL = { shaky: 'Shaky', solid: 'Solid', 'can-teach': 'Can teach' };

function parseSegments(text) {
	const segments = [];
	let mastery = null;

	const withoutMastery = text.replace(/\nMASTERY:\s*(.+?)\s*\|\s*(solid|can-teach)\s*$/, (_, subtaskText, state) => {
		mastery = { subtaskText: subtaskText.trim(), state };
		return '';
	});

	const parts = withoutMastery.split(/```mermaid\n([\s\S]*?)```/g);
	for (let i = 0; i < parts.length; i++) {
		if (i % 2 === 1) {
			segments.push({ type: 'mermaid', code: parts[i].trim() });
			continue;
		}
		const chunk = parts[i];
		const quizMatch = chunk.match(/QUIZ:\s*(.+?)\n((?:[A-D]\)\s*.+\n?)+)/);
		if (quizMatch) {
			const before = chunk.slice(0, quizMatch.index).trim();
			if (before) segments.push({ type: 'prose', text: before });
			const options = [...quizMatch[2].matchAll(/([A-D])\)\s*(.+)/g)].map(m => ({ letter: m[1], text: m[2].trim() }));
			segments.push({ type: 'quiz', question: quizMatch[1].trim(), options });
			const after = chunk.slice((quizMatch.index || 0) + quizMatch[0].length).trim();
			if (after) segments.push({ type: 'prose', text: after });
		} else if (chunk.trim()) {
			segments.push({ type: 'prose', text: chunk.trim() });
		}
	}
	return { segments, mastery };
}

function MermaidBlock({ code }) {
	const ref = useRef(null);
	useEffect(() => {
		const id = `mmd-${Math.random().toString(36).slice(2)}`;
		mermaid.render(id, code)
			.then(({ svg }) => { if (ref.current) ref.current.innerHTML = svg; })
			.catch(() => { if (ref.current) ref.current.innerHTML = ''; });
	}, [code]);
	return <div ref={ref} className="my-3 flex justify-center" />;
}

function QuizBlock({ question, options, onAnswer }) {
	const [picked, setPicked] = useState(null);
	return (
		<div className="my-3 rounded-lg p-3" style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)' }}>
			<p className="mb-2 text-sm" style={{ color: 'var(--text-1)' }}>{question}</p>
			<div className="flex flex-col gap-1.5">
				{options.map(o => (
					<button key={o.letter}
						disabled={picked !== null}
						onClick={() => { setPicked(o.letter); onAnswer(o.letter); }}
						className="text-left text-xs px-3 py-1.5 rounded-lg transition-all duration-150 hover:scale-[1.01]"
						style={picked === o.letter
							? { background: 'var(--accent-light)', border: `1px solid var(--accent-border)`, color: 'var(--text-1)' }
							: { background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-2)' }}
					>
						<span className="font-medium mr-1.5">{o.letter})</span>{o.text}
					</button>
				))}
			</div>
		</div>
	);
}

export default function TutorModal({ track, topic, subtask, onClose }) {
	const { setSubtaskState } = useProgress();
	const [history, setHistory] = useState([]);
	const [input, setInput] = useState('');
	const [loading, setLoading] = useState(false);
	const bottomRef = useRef(null);
	const started = useRef(false);

	useEffect(() => {
		const onKey = e => { if (e.key === 'Escape') onClose(); };
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [onClose]);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [history]);

	const send = useCallback(async (message) => {
		setLoading(true);
		const nextHistory = [...history, { role: 'user', content: message }];
		setHistory(nextHistory);
		setInput('');
		try {
			const res = await fetch('/api/tutor', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({
					trackTitle: track.title,
					topicTitle: topic.title,
					subtasks: topic.subtasks.map(s => ({ text: s.text, state: subtaskStateLookup(s) })),
					history,
					message,
				}),
			});
			const data = await res.json();
			setHistory([...nextHistory, { role: 'assistant', content: data.reply || `Error: ${data.error}` }]);
		} finally {
			setLoading(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [history, track, topic]);

	// Subtask states aren't passed down as props here — swap this for your
	// actual lookup (e.g. via useProgress().progress[topic.topicId]) if you
	// want live states rather than "unrated" for every subtask.
	function subtaskStateLookup() { return undefined; }

	useEffect(() => {
		if (started.current) return;
		started.current = true;
		send(subtask ? `Teach me: ${subtask.text}` : `Teach me the topic: ${topic.title}`);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return createPortal(
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in" style={{ background: 'rgba(28,26,20,0.4)' }} onClick={onClose}>
			<div
				className="w-full max-w-xl h-[80vh] flex flex-col rounded-2xl overflow-hidden animate-pop"
				style={{ background: 'var(--bg-paper)', boxShadow: 'var(--shadow-raised)' }}
				onClick={e => e.stopPropagation()}
			>
				<div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
					<div>
						<div className="text-sm font-medium" style={{ color: 'var(--text-1)', fontFamily: 'var(--font-serif)' }}>
							{subtask ? subtask.text : topic.title}
						</div>
						<div className="text-[11px]" style={{ color: 'var(--text-4)' }}>{track.title} · {topic.title}</div>
					</div>
					<button onClick={onClose} className="text-sm px-2 py-1 rounded-md" style={{ color: 'var(--text-3)' }}>✕</button>
				</div>

				<div className="flex-1 overflow-y-auto px-4 py-4">
					{history.map((turn, i) => {
						if (turn.role === 'user') {
							return (
								<div key={i} className="mb-3 text-right">
									<span className="inline-block max-w-[85%] rounded-xl px-3 py-2 text-sm text-left" style={{ background: 'var(--accent)', color: 'white' }}>
										{turn.content}
									</span>
								</div>
							);
						}
						const { segments, mastery } = parseSegments(turn.content);
						return (
							<div key={i} className="mb-3">
								<div className="max-w-[92%] rounded-xl px-3 py-2.5" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
									{segments.map((seg, j) =>
										seg.type === 'mermaid' ? <MermaidBlock key={j} code={seg.code} />
										: seg.type === 'quiz' ? <QuizBlock key={j} question={seg.question} options={seg.options} onAnswer={(letter) => send(letter)} />
										: <p key={j} className="whitespace-pre-wrap text-sm" style={{ color: 'var(--text-2)' }}>{seg.text}</p>
									)}
								</div>
								{mastery && (
									<button
										onClick={() => setSubtaskState(topic.topicId, subtask?.id ?? topic.subtasks.find(s => s.text === mastery.subtaskText)?.id, mastery.state)}
										className="mt-2 text-xs px-3 py-1.5 rounded-full transition-all duration-150 hover:scale-105"
										style={{ background: `var(--state-${mastery.state === 'can-teach' ? 'canteach' : 'solid'}-bg)`, color: `var(--state-${mastery.state === 'can-teach' ? 'canteach' : 'solid'}-text)` }}
									>
										Mark "{mastery.subtaskText}" as {STATE_LABEL[mastery.state]}
									</button>
								)}
							</div>
						);
					})}
					{loading && <div className="text-xs" style={{ color: 'var(--text-4)' }}>thinking…</div>}
					<div ref={bottomRef} />
				</div>

				<form onSubmit={e => { e.preventDefault(); if (input.trim()) send(input.trim()); }} className="flex gap-2 p-3" style={{ borderTop: '1px solid var(--border)' }}>
					<input
						value={input}
						onChange={e => setInput(e.target.value)}
						placeholder="Answer, or ask a follow-up…"
						className="flex-1 rounded-lg px-3 py-2 text-sm focus:outline-none"
						style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', color: 'var(--text-1)' }}
					/>
					<button type="submit" disabled={loading} className="text-sm px-4 py-2 rounded-lg font-medium disabled:opacity-50" style={{ background: 'var(--accent)', color: 'white' }}>
						Send
					</button>
				</form>
			</div>
		</div>,
		document.body,
	);
}
