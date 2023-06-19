import React, { useState } from "react"

interface CheckboxProps {
  labelText: string
}

const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  const [check, setCheck] = useState(false)

  return (
    <div className="checkbox-wrapper">
      <p>{props.labelText}</p>
      <input
        type="checkbox"
        checked={check}
        onChange={() => {
          setCheck(!check)
        }}
      />
      <span className="checkmark"></span>
    </div>
  )
}

export default Checkbox
