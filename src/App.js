import logo from './logo.svg';
import './App.css';
import Nav from '../src/components/nav'
import Home from './pages/Homepage';
// import Contact from './pages/Contact'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      {/* <h1>Testing</h1> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
    </div>
  );
}

export default App;
