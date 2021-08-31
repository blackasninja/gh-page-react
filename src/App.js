import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Header from './components/Header/Header'
import { Route, Switch, Link } from "react-router-dom";
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
          </Switch>
    </div>
  );
}

export default App;
