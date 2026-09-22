import { useState } from 'react';
import { useProgress } from '../../hooks/useProgress';

export default function NotesField({ topicId, notes }) {
  const { saveNotes } = useProgress();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(notes || '');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(false);

  const startEdit = () => {
    setDraft(notes || '');
    setError(false);
    setEditing(true);
  };

  const cancel = () => {
    setDraft(notes || '');
    setError(false);
    setEditing(false);
  };

  const save = async () => {
    setSaving(true);
    setError(false);
    try {
      await saveNotes(topicId, draft);
      setEditing(false);
    } catch {
      setError(true);
    } finally {
      setSaving(false);
    }
  };

  if (!editing) {
    return (
      <div className="mt-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-medium" style={{ color: 'var(--text-3)' }}>Notes</span>
          <button
            onClick={startEdit}
            className="text-[10px] px-2 py-1 rounded-full transition-all duration-150 hover:scale-105 active:scale-90"
            style={{ background: 'var(--bg-raised)', color: 'var(--text-3)', border: '1px solid var(--border)' }}
          >
            {notes ? 'Edit' : 'Add note'}
          </button>
        </div>
        {notes ? (
          <p className="text-sm whitespace-pre-wrap rounded-lg px-3 py-2"
            style={{ background: 'var(--bg-raised)', color: 'var(--text-2)', border: '1px solid var(--border)' }}>
            {notes}
          </p>
        ) : (
          <p className="text-xs italic" style={{ color: 'var(--text-4)' }}>No notes yet.</p>
        )}
      </div>
    );
  }

  return (
    <div className="mt-3">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-medium" style={{ color: 'var(--text-3)' }}>Notes</span>
        {error && <span className="text-[10px]" style={{ color: 'var(--state-shaky-text)' }}>Save failed — try again</span>}
      </div>
      <textarea
        autoFocus
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder="Notes for this topic…"
        rows={3}
        className="w-full rounded-lg px-3 py-2 text-sm resize-none transition-colors duration-150 focus:outline-none"
        style={{ background: 'var(--bg-raised)', border: `1px solid ${error ? 'var(--state-shaky-text)' : 'var(--border)'}`, color: 'var(--text-2)' }}
      />
      <div className="flex items-center justify-end gap-2 mt-2">
        <button
          onClick={cancel}
          disabled={saving}
          className="text-xs px-3 py-1.5 rounded-full transition-all duration-150 hover:scale-105 active:scale-90 disabled:opacity-40"
          style={{ color: 'var(--text-3)', background: 'var(--bg-raised)', border: '1px solid var(--border)' }}
        >
          Cancel
        </button>
        <button
          onClick={save}
          disabled={saving}
          className="text-xs px-3 py-1.5 rounded-full transition-all duration-150 hover:scale-105 active:scale-90 disabled:opacity-40"
          style={{ background: 'var(--accent)', color: '#f0faf5' }}
        >
          {saving ? 'Saving…' : 'Save'}
        </button>
      </div>
    </div>
  );
}
