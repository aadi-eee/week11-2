import { useState } from 'react';

export default function ProfileForm() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [message, setMessage] = useState({ type: '', text: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim()) {
      setMessage({ type: 'error', text: 'Enter your name.' });
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setMessage({ type: 'error', text: 'Enter a valid email, like you@example.com.' });
    } else {
      setMessage({ type: 'success', text: `Profile saved for ${form.name.trim()}.` });
    }
  }

  return (
    <form className="panel" onSubmit={handleSubmit} noValidate>
      <label htmlFor="profile-name">Name</label>
      <input
        id="profile-name"
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
      />

      <label htmlFor="profile-email">Email</label>
      <input
        id="profile-email"
        name="email"
        type="email"
        placeholder="you@example.com"
        value={form.email}
        onChange={handleChange}
      />

      <button type="submit" className="save">Save profile</button>

      {message.text && (
        <p role="status" className={`message ${message.type}`}>
          {message.text}
        </p>
      )}
    </form>
  );
}