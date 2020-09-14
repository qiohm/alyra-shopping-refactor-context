import React, { useState } from "react"
import AppContainer from "./components/AppContainer"
import ShoppingApp from "./components/ShoppingApp"
import ModeSwitch from "./components/ModeSwitch"

function App() {
  const [mode, setMode] = useState("light")

  return (
    <AppContainer mode={mode}>
      <header className="App-header d-flex justify-content-between flex-wrap align-items-center mb-5">
        <h1>Ma liste des courses</h1>
        <ModeSwitch setMode={setMode} />
      </header>
      <ShoppingApp mode={mode} />
    </AppContainer>
  )
}

export default App
