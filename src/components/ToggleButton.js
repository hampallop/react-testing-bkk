import React from 'react'
import Switch from '../common/Switch'

class ToggleButton extends React.Component {
  state = {
    checked: this.props.checked != null ? this.props.checked : false,
  }
  toggle = () => {
    this.setState(({ checked }) => ({ checked: !checked }))
  }
  render() {
    const { checked } = this.state
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <span>{checked ? 'on' : 'off'}</span>
        <Switch onClick={this.toggle} checked={checked} />
      </div>
    )
  }
}

export default ToggleButton
