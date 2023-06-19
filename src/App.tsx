import "./App.scss"
import { FaRegCopy } from "react-icons/fa"
import { AiOutlineArrowRight } from "react-icons/ai"
import RangeInput from "./components/RangeInput"
import Checkbox from "./components/Checkbox"
import { useEffect, useState } from "react"
import { zxcvbn, zxcvbnOptions } from "@zxcvbn-ts/core"
import * as zxcvbnCommonPackage from "@zxcvbn-ts/language-common"
import * as zxcvbnEnPackage from "@zxcvbn-ts/language-en"

function App() {
  const [password, setPassword] = useState<string>("")
  const [passLength, setPassLength] = useState<number>(0)
  const [radioToggles, setRadioToggles] = useState<number[]>([0, 0, 0, 0])
  const [passStrength, setPassStrength] = useState<string[]>([
    "transparent",
    "transparent",
    "transparent",
    "transparent",
  ])

  const generatePassword = () => {
    setPassword("")
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let randomNum = 0,
      pickChar = "",
      password = ""

    console.log("passLength:", passLength)
    for (let i = 0; i < passLength; ++i) {
      randomNum = Math.floor(Math.random() * passLength)
      pickChar = chars[randomNum]
      password += pickChar
    }
    setPassword(password)
  }

  const getPasswordStrength = () => {
    const options = {
      dictionary: {
        ...zxcvbnCommonPackage.dictionary,
        ...zxcvbnEnPackage.dictionary,
      },
      graphs: zxcvbnCommonPackage.adjacencyGraphs,
      translations: zxcvbnEnPackage.translations,
    }
    zxcvbnOptions.setOptions(options)

    zxcvbn(password)
  }

  useEffect(() => {
    console.log("password:", password)
  }, [password])

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
              setPassword(e.target.value)
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
              {passStrength.map((color) => (
                <div
                  className="indicator-box"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              generatePassword()
              getPasswordStrength()
            }}
          >
            GENERATE
            <AiOutlineArrowRight />
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
