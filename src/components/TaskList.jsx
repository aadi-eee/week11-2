import { useState } from 'react';

const starter = [
  { id: 1, text: 'Review component props' },
  { id: 2, text: 'Practice state updates' },
  { id: 3, text: 'Build something small' },
];

export default function TaskList() {
  const [tasks, setTasks] = useState(starter);
  const [text, setText] = useState('');
  const [nextId, setNextId] = useState(4);

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    setTasks((current) => [...current, { id: nextId, text: trimmed }]);
    setNextId((id) => id + 1);
    setText('');
  }

  function removeTask(id) {
    setTasks((current) => current.filter((task) => task.id !== id));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          aria-label="New practice task"
          placeholder="Add a practice task"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit" disabled={!text.trim()}>Add</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}