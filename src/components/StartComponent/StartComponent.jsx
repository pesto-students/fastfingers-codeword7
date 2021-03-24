import React, { useState, useRef } from 'react'
import { ReactComponent as Keyboard } from "./../../images/icon-keyboard.svg";
import "./StartComponent.css";

const StartComponent = ({ createClickHandler }) => {
  const [name, setName] = useState('')
  const [level, setLevel] = useState('EASY')
  const inputEl = useRef('');

  const handleNameChange = (e) => {
    const { target: { value } = {} } = e;
    setName(value);
  };
  const handleDifficultyLevelChange = (e) => {
    const { target: { value } = {} } = e;
    setLevel(value);
  };
  const handleSubmit = (e) => {
    if (!name) {
      inputEl.current.focus();
      return;
    }
    window.sessionStorage.clear();
    window.sessionStorage.setItem("name", name);
    window.sessionStorage.setItem("difficultyLevel", level);
    e();
  };
  return (
    <div>
      <div className="MainPage">
        <div>
          <Keyboard className="keyboard" />
        </div>
        <div>
          <h1>fast fingers</h1>
        </div>
        <div>
          <p>the ultimate typing game</p>
        </div>
        <div className="form-div">
          <input
            type="text"
            name="name"
            id="username"
            placeholder="TYPE YOUR NAME"
            value={name}
            autoFocus
            ref={inputEl}
            onChange={handleNameChange}
          />
          {
            !name ? (
              <label id="validName" className="align-left w-33">
                *Name is required!
              </label>
            ) : (
              <></>
            )
          }
          <select
            name="difficulty"
            id="difficulty"
            onChange={handleDifficultyLevelChange}
          >
            <option value="EASY" defaultValue>
              EASY
            </option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HARD">HARD</option>
          </select>
          <div
            className="startgame pointer"
            onClick={() => handleSubmit(createClickHandler('/start'))}
          >
            <div className="play"></div>
            <button className="playbutton">START GAME</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartComponent
