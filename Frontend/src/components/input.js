import React from "react"

const sunAmount = [
  "in window",
  "in wardrobe",
  "in room"
]

const waterAmount = [
  "once a week",
  "once a month",
  "once a year"
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

  render() {
    console.log("stete?", this.props.currentSun)
    return (
      <div>
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
