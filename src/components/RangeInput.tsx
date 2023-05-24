import React, { useState } from "react";

interface RangeInputProps {}

const RangeInput: React.FC<RangeInputProps> = () => {
  const [percent, setPercent] = useState<number>(0);
  console.log(percent);
  return (
    <div className="character-length">
      <div className="row-space-between">
        <p>Character Length</p>
        <output htmlFor="range" className="count">{percent}</output>
      </div>

      <div className="range-input">
        <input
          type="range"
          min={0}
          max={255}
          value={percent}
          step={1}
          onChange={(e) => setPercent(+e.target.value)}
        />
      </div>
    </div>
  );
};

export default RangeInput;
