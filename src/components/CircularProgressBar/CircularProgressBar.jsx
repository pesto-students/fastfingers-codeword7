import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./CircularProgressBar.css";

export default function CircularProgressBar({ progress }) {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);
  const [color, setColor] = useState("#228B22");

  let center = 75;
  let radius = 70;
  if (window.screen.width >= 1500) {
    center = 125;
    radius = 115;
  }
  const circumference = 2 * radius * Math.PI;
  useEffect(() => {
    const progressOffset = (progress / 100) * circumference;
    setOffset(progressOffset);
    circleRef.current.style = "transition: stroke-dashoffset ease-in-out";
    setColor("#ff0000");
  }, [progress, offset, circumference]);

  return (
    <>
      <svg className="svg">
        <circle className="svg-bg-circle" cx={center} cy={center} r={radius} />
        <circle
          className="svg-main-circle"
          ref={circleRef}
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={offset ? offset : 0}
        />
      </svg>
    </>
  );
}

CircularProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};
CircularProgressBar.defaultProps = {
  progress: 0,
};
