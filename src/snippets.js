export const snippets = {
  E1: `const [count, setCount] = useState(0);

<button onClick={() => setCount((value) => value + 1)}>
  Add one
</button>`,

  E2: `const [name, setName] = useState('');

<input
  value={name}
  onChange={(event) => setName(event.target.value)}
/>
<p>Hello, {name || 'there'}!</p>`,

  E3: `const [tasks, setTasks] = useState([
  { id: 1, text: 'Finish the Git practice' },
  { id: 2, text: 'Revise CSS flexbox' },
]);

function removeTask(id) {
  setTasks((current) => current.filter((task) => task.id !== id));
}`,

  E4: `const [open, setOpen] = useState(true);

<button aria-expanded={open} onClick={() => setOpen((v) => !v)}>
  {open ? 'Hide details' : 'Show details'}
</button>
{open && <p>State lets React update just the part that changed.</p>}`,

  E5: `const [tasks, setTasks] = useState([
  { id: 1, text: 'Push the project to GitHub', done: true },
  { id: 2, text: 'Rebuild the dist folder', done: false },
]);

function toggle(id) {
  setTasks((current) =>
    current.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    )
  );
}`,

  E6: `const [form, setForm] = useState({ name: '', email: '' });

function handleChange(event) {
  const { name, value } = event.target;
  setForm((current) => ({ ...current, [name]: value }));
}`,

  E7: `const [note, setNote] = useState(() =>
  localStorage.getItem('week11-2-quick-note') ?? ''
);

useEffect(() => {
  localStorage.setItem('week11-2-quick-note', note);
}, [note]);`,
};