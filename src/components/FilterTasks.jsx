import { useState } from 'react';

const starter = [
  { id: 1, text: 'Read the React lesson', done: true },
  { id: 2, text: 'Try the counter', done: false },
  { id: 3, text: 'Update the task list', done: false },
];

const filters = ['All', 'Active', 'Done'];

export default function FilterTasks() {
  const [tasks, setTasks] = useState(starter);
  const [filter, setFilter] = useState('All');

  function toggle(id) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  const visible = tasks.filter((task) => {
    if (filter === 'Active') return !task.done;
    if (filter === 'Done') return task.done;
    return true;
  });

  return (
    <div>
      <div role="group" aria-label="Filter tasks">
        {filters.map((name) => (
          <button
            key={name}
            aria-pressed={filter === name}
            onClick={() => setFilter(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <ul>
        {visible.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggle(task.id)}
              />
              {task.done ? <s>{task.text}</s> : task.text}
            </label>
          </li>
        ))}
      </ul>

      {visible.length === 0 && <p>Nothing in this view.</p>}

      <button onClick={() => setTasks((current) => current.filter((task) => !task.done))}>
        Clear completed
      </button>
    </div>
  );
}