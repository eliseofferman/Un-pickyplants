import React from "react"

class Input extends React.Component {

  const sunAmount = [
    "direct sunlight",
    "partly shadow",
    "shadow"
  ]

    const waterAmount = [
      "once a week",
      "once a month",
      "twice a month",
      "dried out between watering the plant"
    ]


   // onChangeSun = (event) => {
   //   this.props.callbackStateSun(event.target.value)
   // }
   //
   // onChangeWater = (event) => {
   //   this.props.callbackStateWater(event.target.value)
   // }

  render() {
   return (
      <div>
        <label>
          <h3>Choose sun amount </h3>
             <select>
            {sunAmount.map(option => (
              <option
                selected={option === this.props.xxx}
                key={option}
                value={option}
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
