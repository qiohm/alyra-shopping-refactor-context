import React from "react"

const ModeSwitch = (props) => {
  const { setMode } = props
  const hanleModeChange = () => {
    setMode((mode) => (mode === "dark" ? "light" : "dark"))
  }
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="activate"
        onChange={hanleModeChange}
      />
      <label className="form-check-label" htmlFor="activate">
        Mode Sombre
      </label>
    </div>
  )
}

export default ModeSwitch
