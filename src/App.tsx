import "./App.scss";
import { FaRegCopy } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import RangeInput from "./components/RangeInput";
import Checkbox from "./components/Checkbox";

function App() {
  return (
    <div className="App pg-app">
      <h1>Password Generator</h1>
      <form action="" className="pg-form">
        <div className="input-wrapper">
          <input type="text" className="password" />
          <div className="icon-wrapper">
            <FaRegCopy className="icon" />
          </div>
        </div>
        <div className="settings-wrapper">
          <div className="row-space-between">
            <p>Character Length</p>
            <span className="count">0</span>
          </div>
          
          <RangeInput />
          
          <Checkbox labelText="Include Uppercase Letters"/>
          <Checkbox labelText="Include Lowercase Letters"/>
          <Checkbox labelText="Include Numbers"/>
          <Checkbox labelText="Include Symbols"/>
          
          <div className="strength-wrapper">
            <div className="label">STRENGTH</div>
            <div className="indicators">
              <div className="indicator"></div>
              <div className="indicator"></div>
              <div className="indicator"></div>
              <div className="indicator"></div>
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
