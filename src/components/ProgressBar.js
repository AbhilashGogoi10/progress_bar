import { useEffect, useState } from "react";
import { MIN, MAX } from "../constants";

const ProgressBar = ({ value = 0, onComplete = () => {} }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    if (value >= MAX) {
      onComplete();
    }

    setPercent(Math.min(MAX, Math.max(value, MIN)));
  }, [value]);

  return (
    <div className="progress">
      <span style={{ color: percent < 49 ? "black" : "white" }}>
        {percent.toFixed()}%
      </span>
      <div
        // style={{ width: `${percent}%` }}
        style={{
          transform: `scaleX(${percent / MAX})`,
          transformOrigin: "left"
        }}
        role="progressbar"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percent.toFixed()}
      />
    </div>
  );
};

export default ProgressBar;
