import React from "react"
import Hero from "./hero"
import Input from "./input"
import RecList from "./rec-list"
import RecPlant from "./rec-plant"
import PlantItem from "./plant-item"


class App extends React.Component {

  state = {
    // inputSunx: "",
    inputWater: "",
    inputSun: ""
  }
  // updateStateSun = (event) => {
  //   this.setState ({ inputSun: event })
  // }
  //
   updateInputWater = selectedWater => {
   this.setState ({ inputWater: selectedWater })
   }

  updateInputSun = selectedSun => {
    this.setState({ inputSun: selectedSun })
  }


  render() {
    return (
      <div>
        <Hero />
        <Input
          // callbackStateSun={this.updateStateSun}
          // callbackStateWater={this.updateStateWater}
          // state={this.state}
          callbackWaterSelector={this.updateInputWater}
          callbackSunSelector={this.updateInputSun}
          currentSun={this.state.inputSun}
          currentWater={this.state.inputWater} />
        <RecList
          sunOption={this.state.inputSun}
          waterOption={this.state.inputWater} />
        <RecPlant />
        <PlantItem />
      </div>
    )
  }

}

export default App
