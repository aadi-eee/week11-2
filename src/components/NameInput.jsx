import { useState } from 'react';

export default function NameInput() {
  const [name, setName] = useState('');

  return (
    <div>
      <label htmlFor="your-name">Your name</label>
      <input
        id="your-name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <p>Hello, {name || 'there'}!</p>
    </div>
  );
}
