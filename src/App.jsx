import "./App.scss";
import Header from "./components/Header/Header";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import { AnimatedSwitch } from 'react-router-transition';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
      </AnimatedSwitch>
    </div>
  );
}

export default App;
