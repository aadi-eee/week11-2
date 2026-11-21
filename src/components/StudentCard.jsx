export default function StudentCard({ name, id, major }) {
  return (
    <section className="student-card" aria-label="Student card">
      <p className="student-label">Student card</p>
      <h2 className="student-name">{name}</h2>
      <p className="student-id">ID: {id}</p>
      <div className="student-row">
        <span>Major:</span>
        <strong>{major}</strong>
      </div>
    </section>
  );
}