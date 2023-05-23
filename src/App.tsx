import "./App.scss";
import { FaRegCopy } from "react-icons/fa";

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
            <h3>Character Length</h3>
            <span className="count">0</span>
          </div>

          <div className="slider-length">
            <div className="circle"></div>
          </div>

          <label className="container">
            One
            <input type="checkbox" checked={true} />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            One
            <input type="checkbox" checked={false} />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            One
            <input type="checkbox" checked={false} />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            One
            <input type="checkbox" checked={false} />
            <span className="checkmark"></span>
          </label>
        </div>
      </form>
    </div>
  );
}

export default App;
