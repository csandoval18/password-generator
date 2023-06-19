import React, { useState } from "react"

interface RangeInputProps {
  passLength: number
  setPassLength: React.Dispatch<React.SetStateAction<number>>
}

const RangeInput: React.FC<RangeInputProps> = (props: RangeInputProps) => {
  return (
    <div className="character-length">
      <div className="row-space-between">
        <p>Character Length</p>
        <output htmlFor="range" className="count">
          {props.passLength}
        </output>
      </div>

      <div className="range-input">
        <input
          type="range"
          min={0}
          max={28}
          value={props.passLength}
          step={1}
          onChange={(e) => props.setPassLength(+e.target.value)}
        />
      </div>
    </div>
  )
}

export default RangeInput
