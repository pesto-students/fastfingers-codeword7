import React, { useState } from 'react';
import './App.css';
// import { reducer, initialState } from './reducer/sessionReducer';
import GameComponent from './components/GameComponent/GameComponent';
import StartComponent from './components/StartComponent/StartComponent';
//export const UserContext = createContext();

function createClickHandler(url) {
  return ev => {
    // console.log('svbvbk', url)
    window.history.pushState({}, undefined, url);
    storePathInState(url.split("/").slice(1));
    // ev.preventDefault();
  };
}

window.onpopstate = ev =>
  storePathInState(window.location.pathname.split("/").slice(1));

let storePathInState;
const Home = ({ pathArr }) => {
  const [pathInState, setPathFn] = useState(pathArr);
  storePathInState = setPathFn;

  return pathInState[0] === "start" ? (
    <GameComponent createClickHandler={createClickHandler} />
  ) : pathInState[0] === "about" ? (
    'about'
  ) : (
    // Otherwise show the home page.
    // <div>
    //   There are two links: <br />
    //   1.{" "}
    //   <a href='/todos' onClick={createClickHandler("/todos")}>
    //     Todos page
    //   </a>
    //   <br />
    //   2.{" "}
    //   <a href='/about' onClick={createClickHandler("/about")}>
    //     About page
    //   </a>
    // </div>
    <StartComponent createClickHandler={createClickHandler} />
  );
};

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Home
      pathArr={window.location.pathname.split("/").slice(1)}
    />
  );
}

export default App;
