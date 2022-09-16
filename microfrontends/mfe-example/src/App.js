import { Logo } from './Logo'

function goBackHome() {
  return window.entando.router.push('/dashboard')
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={goBackHome} className="Button">
          Go back to the dashboard
        </button>
      </header>
    </div>
  );
}

export default App;
