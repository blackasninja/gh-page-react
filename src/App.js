import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Header from './components/Header/Header'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>WEEEEEEE. Website being built</p>
        <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
