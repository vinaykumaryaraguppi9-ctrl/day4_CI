import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">DevOps Demo - V1</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#pipeline">Pipeline</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="badge">🚀 CI/CD Learning Project</div>

          <h1>
            React App
            <br />
            <span>Deployed with DevOps with CI and CD</span>
          </h1>

          <p>
            A simple frontend project for learning Git, CI/CD pipelines,
            AWS EC2, and automated deployments.
          </p>

          <div className="buttons">
            <button onClick={() => alert("CI Pipeline Started 🚀")}>
              Run CI Demo
            </button>

            <a href="#pipeline" className="secondary-btn">
              View Pipeline
            </a>
          </div>
        </section>

        <section id="pipeline" className="section">
          <h2>CI Pipeline</h2>
          <p className="section-text">
            This is the basic flow you will automate using your CI pipeline.
          </p>

          <div className="pipeline">
            <div className="pipeline-card">
              <div className="number">01</div>
              <h3>Git Push</h3>
              <p>Developer pushes code to GitHub.</p>
            </div>

            <div className="arrow">→</div>

            <div className="pipeline-card">
              <div className="number">02</div>
              <h3>CI Build</h3>
              <p>CI server installs dependencies and builds React.</p>
            </div>

            <div className="arrow">→</div>

            <div className="pipeline-card">
              <div className="number">03</div>
              <h3>Test</h3>
              <p>Automated checks verify that the application works.</p>
            </div>

            <div className="arrow">→</div>

            <div className="pipeline-card">
              <div className="number">04</div>
              <h3>Deploy</h3>
              <p>Build is deployed to your EC2 server.</p>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <h2>DevOps Stack</h2>

          <div className="tech-grid">
            <div className="tech-card">⚛️ React</div>
            <div className="tech-card">🐙 GitHub</div>
            <div className="tech-card">⚙️ CI/CD</div>
            <div className="tech-card">☁️ AWS EC2</div>
            <div className="tech-card">🐧 Linux</div>
            <div className="tech-card">🌐 Nginx</div>
          </div>
        </section>
      </main>

      <footer>
        <p>DevOps Learning Project © 2026</p>
      </footer>
    </div>
  );
}

export default App;