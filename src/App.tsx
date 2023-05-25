import "./App.scss";
import { FaRegCopy } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import RangeInput from "./components/RangeInput";
import Checkbox from "./components/Checkbox";
import { useEffect, useState } from "react";

function App() {
  const [password, setPassword] = useState<string>("");
  const [passLength, setPassLength] = useState<number>(0);
  const [radioToggles, setRadioToggles] = useState<number[]>([0, 0, 0, 0]);

  const generatePassword = () => {
    setPassword("");
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomNum = 0,
      pickChar = "",
      password = "";

    console.log("passLength:", passLength);
    for (let i = 0; i < passLength; ++i) {
      randomNum = Math.floor(Math.random() * passLength);
      pickChar = chars[randomNum];
      password += pickChar;
    }
    setPassword(password);
  };

  useEffect(() => {
    console.log("password:", password);
  }, [password]);

  return (
    <div className="App pg-app">
      <h1>Password Generator</h1>
      <form
        action=""
        className="pg-form"
        onSubmit={(e: { preventDefault: () => any }) => e.preventDefault()}
      >
        <div className="input-wrapper">
          <input
            type="text"
            className="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="icon-wrapper">
            <FaRegCopy className="icon" />
          </div>
        </div>
        <div className="settings-wrapper">
          <RangeInput passLength={passLength} setPassLength={setPassLength} />
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
          <button
            className="btn btn-primary"
            onClick={() => {
              generatePassword();
            }}
          >
            GENERATE
            <AiOutlineArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
