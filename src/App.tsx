import "./App.scss";
import { FaRegCopy } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import RangeInput from "./components/RangeInput";
import Checkbox from "./components/Checkbox";
import { useEffect, useState } from "react";


function App() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 12;
  const [password, setPassword] = useState<string>("");
  const [charLength, setCharLength] = useState<number>(0);
  const [radioToggles, setRadioToggles] = useState<number[]>([0,0,0,0])
  
  useEffect(() => {
    console.log("charLength:", charLength)
  }, [charLength])

  return (
    <div className="App pg-app">
      <h1>Password Generator</h1>
      <form action="" className="pg-form" onSubmit={(e) => e.preventDefault()}>
        <div className="input-wrapper">
          <input type="text" className="password" />
          <div className="icon-wrapper">
            <FaRegCopy className="icon" />
          </div>
        </div>
        <div className="settings-wrapper">
          <RangeInput charLength={charLength} setCharLength={setCharLength} />
          <Checkbox labelText="Include Uppercase Letters" />
          <Checkbox labelText="Include Lowercase Letters" />
          <Checkbox labelText="Include Numbers" />
          <Checkbox labelText="Include Symbols" />

          <div className="strength-wrapper">
            <div className="label">STRENGTH</div>
            <div className="indicators">
              <div className="indicator-1"></div>
              <div className="indicator-2"></div>
              <div className="indicator-3"></div>
              <div className="indicator-4"></div>
            </div>
          </div>
          <button className="btn btn-primary" onClick={() => {}}>
            GENERATE
            <AiOutlineArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
