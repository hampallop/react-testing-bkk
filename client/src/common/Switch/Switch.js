import React from 'react'
import './switch.style.css'

const emptyFnc = () => {}

function ToggleSwitch({ checked, onClick }) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={checked}
        onClick={onClick}
        onChange={emptyFnc}
      />
      <span className="slider round" />
    </label>
  )
}

export default ToggleSwitch
