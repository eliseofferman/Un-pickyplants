import React from "react"
import Header from "./header"
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
   // onChangeSun = (event) => {
   //   this.props.callbackStateSun(event.target.value)
   // }
   //
   // onChangeWater = (event) => {
   //   this.props.callbackStateWater(event.target.value)
   // }

  handleSunAmount = event => {
    this.props.callbackSunSelector(event.target.value)
  }

  handleWaterAmount = event => {
    this.props.callbackWaterSelector(event.target.value)
  }

  render() {
    return (
    <div className="header-input">
      <Header />
      <div className="input-content">
        <label>

          <h3>Choose sun amount </h3>
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


        <label>
          <h3>Choose how often you want to water</h3>
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



    </div>








        {/* <label onSubmit=>
          <form>
            <input type="text"
          value= {this.props.state.inputSun}
            onChange= {this.onChangeSun} />
            </form>

          <form>
          <input type="text"
           value= {this.props.state.inputWater}
           onChange= {this.onChangeWater} />
          </form>

          <button>
          Find unpicky plant!
          </button>
        </label> */}
      </div>
    )
  }

}

export default Input
