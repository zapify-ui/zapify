/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import "./Switch.css";

class Switch extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: false
    };

    this.onToggleSwitchChange = this.onToggleSwitchChange.bind(this);
  }

  onToggleSwitchChange() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    return (
      <div className="ToggleSwitch ToggleSwitch__rounded">
        <div className="ToggleSwitch__wrapper">
          <div
            className={`Slider ${this.state.checked && "isChecked"}`}
            onClick={this.onToggleSwitchChange}
          />
        </div>
      </div>
    );
  }
}

export default Switch;
