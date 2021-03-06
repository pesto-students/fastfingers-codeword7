import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { convertTimeToMMSS } from "../../util";
import "./DisplayCurrentScore.css";

export default function Score({ isGameOver }) {
  const [currentCount, setCount] = useState(0);
  let timer = () => setCount(currentCount + 1);

  const setTimer = () => {
    if (isGameOver) {
      if (currentCount > 0) {
        let previousGameResults = window.sessionStorage.getItem("scores")
          ? window.sessionStorage.getItem("scores")
          : "[]";
        previousGameResults = JSON.parse(previousGameResults);
        previousGameResults.push(currentCount);
        window.sessionStorage.setItem(
          "scores",
          JSON.stringify(previousGameResults)
        );
      }
      setCount(0);
      return;
    }
    const intervalId = setInterval(timer, 1000);
    return () => clearInterval(intervalId);
  }

  useEffect(setTimer);

  return (
    <div className="m-1">
      <div className="flex">
        <div className="info">fast fingers</div>
      </div>
      <div className="flex">
        <div className="info">
          <span>
            SCORE : <span id="spnTotalScore" count={currentCount}>{convertTimeToMMSS(currentCount)}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

Score.propTypes = {
  isGameOver: PropTypes.bool.isRequired,
};

Score.defaultProps = {
  isGameOver: false,
};
