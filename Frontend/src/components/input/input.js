import React from "react"
// import Header from "../header/header"
import "./input.css"

const sunAmount = [
  "Select all",
  "Direct sunlight",
  "Partly shadow",
  "Shadow"
]

const waterAmount = [
  "Select all",
  "Once a week",
  "Twice a month",
  "Once a month",
  "Dried out between watering the plant"
]


class Input extends React.Component {

  handleSunAmount = event => {
    this.props.callbackSunSelector(event.target.value)
  }

  handleWaterAmount = event => {
    this.props.callbackWaterSelector(event.target.value)
  }

  render() {
    return (
    <div className="header-input">
      <div className="input-info">
        <h3>Un-pickyplants helps you find indoor plants suitable for your home and interest for plant care</h3>
      </div>
      <div className="input-content">
        <label>
          <h3>How often you want to water?</h3>
          <select onChange={this.handleWaterAmount}>
            {waterAmount.map(waterOption => (
              <option
                selected={waterOption === this.props.currentWater}
                key={waterOption}
                value={waterOption}>
                {waterOption}
              </option>
            ))}
          </select>
        </label>

        <label>
          <h3>How much sun will the plant get?</h3>
          <select onChange={this.handleSunAmount}>
            {sunAmount.map(sunOption => (
              <option
                selected={sunOption === this.props.currentSun}
                key={sunOption}
                value={sunOption}>
                {sunOption}
              </option>
            ))}
          </select>
        </label>
      </div>


    </div>
    )
  }

}

export default Input
