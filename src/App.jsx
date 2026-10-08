import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="navbar">
        <h2>CI Demo</h2>
        <span className="status">● Ready</span>
      </header>

      <main className="container">
        <section className="hero">
          <p className="tag">REACT + CI/CD</p>

          <h1>
            My First <span>CI Pipeline</span>
          </h1>

          <p className="description">
            A simple React frontend for practicing Continuous Integration.
            Every code change can be automatically tested and built.
          </p>

          <div className="buttons">
            <button onClick={() => setCount(count + 1)}>
              Clicked {count} times
            </button>

            <button
              className="secondary"
              onClick={() => alert("CI pipeline practice!")}
            >
              Test Button
            </button>
          </div>
        </section>

        <section className="cards">
          <div className="card">
            <div className="icon">01</div>
            <h3>Code</h3>
            <p>Make changes to the React application.</p>
          </div>

          <div className="card">
            <div className="icon">02</div>
            <h3>Commit</h3>
            <p>Push your changes to GitHub.</p>
          </div>

          <div className="card">
            <div className="icon">03</div>
            <h3>Build</h3>
            <p>CI automatically builds and tests the project.</p>
          </div>
        </section>

        <section className="pipeline">
          <h2>CI Pipeline</h2>

          <div className="steps">
            <div>Git Push</div>
            <span>→</span>
            <div>Install</div>
            <span>→</span>
            <div>Test</div>
            <span>→</span>
            <div>Build</div>
          </div>
        </section>
      </main>

      <footer>
        Built for DevOps Practice • React
      </footer>
    </div>
  );
}

export default App;