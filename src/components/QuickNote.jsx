import { useEffect, useState } from 'react';

const KEY = 'week11-2-quick-note';

export default function QuickNote() {
  const [note, setNote] = useState(() => {
    try {
      return localStorage.getItem(KEY) ?? '';
    } catch {
      return '';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(KEY, note);
    } catch {
      // storage unavailable, so the note just won't persist
    }
  }, [note]);

  return (
    <div className="panel">
      <label htmlFor="quick-note">Quick note</label>
      <textarea
        id="quick-note"
        rows={4}
        placeholder="Type something..."
        value={note}
        onChange={(event) => setNote(event.target.value)}
      />
      <p>Saved in this browser. Refresh the page and it will still be here.</p>
    </div>
  );
}