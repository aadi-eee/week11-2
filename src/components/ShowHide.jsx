import { useState } from 'react';

export default function ShowHide() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <button
        aria-expanded={open}
        aria-controls="details-panel"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'Hide details' : 'Show details'}
      </button>

      {open && (
        <p id="details-panel">
          State lets React update just the part of the interface that changed.
        </p>
      )}
    </div>
  );
}