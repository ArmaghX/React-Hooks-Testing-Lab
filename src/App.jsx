
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { ThemeContext } from './context/ThemeContext';

import UseStateComponent from './components/UseState';
import UseEffectComponent from './components/UseEffect';
import UseContextComponent from './components/UseContext';
import UseReducerComponent from './components/UseReducer';
import UseCallbackComponent from './components/UseCallback';
import UseMemoComponent from './components/UseMemo';
import UseRefComponent from './components/UseRef';
import UseEffectApiRequestComponent from './components/UseEffectApiRequest';

import ThemeBtn from './components/btn/ThemeBtn';


function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
    return (
      <Router>
      <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`} >
        <legend className={`div ${darkMode ? "div-dark" : "div-light"}`}>REACT HOOKS EXAMPLES</legend>
        <ul className={`div ${darkMode ? "div-dark" : "div-light"}`}>
          <li>
            <Link to="/UseState">UseState</Link>
          </li>
          <li>
            <Link to="/UseEffect">UseEffect</Link>
          </li>
          <li>
            <Link to="/UseEffectApiRequest">UseEffectApiRequest</Link>
          </li>
          <li>
            <Link to="/UseContext">UseContext</Link>
          </li>
          <li>
            <Link to="/UseReducer">UseReducer</Link>
          </li>
          <li>
            <Link to="/UseCallback">UseCallback</Link>
          </li>
          <li>
            <Link to="/UseMemo">UseMemo</Link>
          </li>
          <li>
            <Link to="/UseRef">UseRef</Link>
          </li>
        </ul>

        <ThemeBtn />

        <hr />

        <Route exact path="/UseState" component={ UseStateComponent } />
        <Route path="/UseEffect" component={ UseEffectComponent } />
        <Route path="/UseEffectApiRequest" component={ UseEffectApiRequestComponent } />
        <Route path="/UseContext" component={ UseContextComponent } />
        <Route path="/UseReducer" component={ UseReducerComponent } />
        <Route path="/UseCallback" component={ UseCallbackComponent } />
        <Route path="/UseMemo" component={ UseMemoComponent } />
        <Route path="/UseRef" component={ UseRefComponent } />
      </div>
    </Router>
     
    );
  }


export default App;