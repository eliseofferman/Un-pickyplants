import React from "react"

class Input extends React.Component {
  state = {
    inputSun: " ",
    inputWater: " "
  }
   onChangeSun = (event) => {
     this.setState ({ inputSun: event.target.value })
   }

   onChangeWater = (event) => {
     this.setState ({ inputWater: event.target.value })
   }

  render() {
   return (
      <div>
        <label>
          <form>
            <input type="text"

            value= {this.state.inputSun}
            onChange= {this.onChangeSun} />
            </form>

         <form>
         <input type="text"
           value= {this.state.inputWater}
           onChange= {this.onChangeWater} />
         </form>




      </label>
      </div>
    )
  }

}

export default Input
