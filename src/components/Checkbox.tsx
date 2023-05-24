import React, { useState } from "react";

interface CheckboxProps {
  labelText: string;
}

const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  const [check, setCheck] = useState(false);

  return (
    <div className="">
      <div className="container">
        <p>{props.labelText}</p>
        <input
          type="checkbox"
          checked={check}
          onClick={() => {
            setCheck(!check);
            console.log("clicked")
          }}
        />
        <span className="checkmark"></span>
      </div>
    </div>
  );
};

export default Checkbox;
