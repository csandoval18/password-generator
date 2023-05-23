import "./App.scss";
import { FaRegCopy } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

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

          <div className="slider-length">
            <div className="circle"></div>
          </div>

          <label className="container">
            <p>One</p>
            <input type="checkbox" checked={true} />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p>One</p>
            <input type="checkbox" checked={false} />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p>One</p>
            <input type="checkbox" checked={false} />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p>One</p>
            <input type="checkbox" checked={false} />
            <span className="checkmark"></span>
          </label>
          <div className="strength-wrapper">
            <div className="labe">STRENGTH</div>
            <div className="indicators">
              <div className="indicator"></div>
              <div className="indicator"></div>
              <div className="indicator"></div>
              <div className="indicator"></div>
            </div>
          </div>
          <button className="btn btn-primary">
            GENERATE
            <AiOutlineArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
