import Exercise from './components/Exercise.jsx';
import Counter from './components/Counter.jsx';
import NameInput from './components/NameInput.jsx';
import TaskList from './components/TaskList.jsx';
import ShowHide from './components/ShowHide.jsx';
import FilterTasks from './components/FilterTasks.jsx';
import ProfileForm from './components/ProfileForm.jsx';
import QuickNote from './components/QuickNote.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>

      <div className="site">
        <main id="main" tabIndex={-1}>
          <a className="back" href="https://aadi-eee.github.io/webprogramming/#work">
            &larr; Back to all assignments
          </a>
          <h1>My <span className="script">Week 11_2</span> Exercises</h1>
          <p className="lead">React state and events: practice making the interface respond.</p>

          <h2>React Tasks</h2>

          <div className="cards">
            <Exercise id="E1" title="Update state with a counter"
              text="Use a functional state update so each click uses the latest count.">
              <Counter />
            </Exercise>

            <Exercise id="E2" title="Keep an input in sync"
              text="A controlled input stores its value in state and updates a preview as you type.">
              <NameInput />
            </Exercise>

            <Exercise id="E3" title="Add and remove list items"
              text="Update arrays immutably, give each item a stable ID, and handle form submission.">
              <TaskList />
            </Exercise>

            <Exercise id="E4" title="Show and hide content"
              text="Use a boolean state value to reveal optional content and expose the control state accessibly.">
              <ShowHide />
            </Exercise>

            <Exercise id="E5" title="Complete and filter tasks"
              text="Use object updates to mark tasks complete, then filter the list by status.">
              <FilterTasks />
            </Exercise>

            <Exercise id="E6" title="Validate a controlled form"
              text="Keep two fields in one object and show a simple message after submission.">
              <ProfileForm />
            </Exercise>

            <Exercise id="E7" title="Save a note in the browser"
              text="Use an effect to save state with localStorage whenever the note changes.">
              <QuickNote />
            </Exercise>
          </div>
        </main>
      </div>
    </>
  );
}