import React, { useState } from "react";

interface RangeInputProps {
  charLength: number,
  setCharLength: React.Dispatch<React.SetStateAction<number>>
}

const RangeInput: React.FC<RangeInputProps> = (props :RangeInputProps) => {
  return (
    <div className="character-length">
      <div className="row-space-between">
        <p>Character Length</p>
        <output htmlFor="range" className="count">{props.charLength}</output>
      </div>

      <div className="range-input">
        <input
          type="range"
          min={0}
          max={50}
          value={props.charLength}
          step={1}
          onChange={(e) => props.setCharLength(+e.target.value)}
        />
      </div>
    </div>
  );
};

export default RangeInput;
