import React, { useState } from 'react'

interface CheckboxProps {
  labelText: string
}

const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  const [check, setCheck] = useState(false)
  
  return (
    <div className="checkbox">
      <label className="container">
        <p>{props.labelText}</p>
        <input type="checkbox" checked={check} onClick={() => setCheck(!check)}/>
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default Checkbox