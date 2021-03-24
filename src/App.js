import React, { useState } from 'react';
import './App.css';
import GameComponent from './components/GameComponent/GameComponent';
import StartComponent from './components/StartComponent/StartComponent';

function createClickHandler(url) {
  return ev => {
    window.history.pushState({}, undefined, url);
    storePathInState(url.split("/").slice(1));
  };
}

window.onpopstate = ev =>
  storePathInState(window.location.pathname.split("/").slice(1));

let storePathInState;
const Home = ({ pathArr }) => {
  const [pathInState, setPathFn] = useState(pathArr);
  storePathInState = setPathFn;

  return pathInState[0] === "start" && window.sessionStorage.getItem("name") ? (
    <div className="App">
      <GameComponent createClickHandler={createClickHandler} />
    </div>
  ) : (
    <div className="App">
      <StartComponent createClickHandler={createClickHandler} />
    </div>
  );
};

function App() {
  return (
    <Home
      pathArr={window.location.pathname.split("/").slice(1)}
    />
  );
}

export default App;
