import logo from './sofa.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Sofa
        </h1>
        <h3>
          in space
        </h3>
        <a
          className="App-link"
          href="https://alexith.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          made by Alexith        
        </a>
      </header>
    </div>
  );
}

export default App;
