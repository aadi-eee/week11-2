import { snippets } from '../snippets.js';

export default function Exercise({ id, title, text, children }) {
  return (
    <article className={`card ${id.toLowerCase()}`}>
      <div className="card-head">
        <span className="badge script">{id}</span>
        <h2>{title}</h2>
      </div>
      <p className="card-text">{text}</p>
      <div className="card-body">{children}</div>

      {snippets[id] && (
        <details className="example">
          <summary>View React example</summary>
          <pre><code>{snippets[id]}</code></pre>
        </details>
      )}
    </article>
  );
}