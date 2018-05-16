import React from "react"
import Hero from "./hero"
import Input from "./input"
import RecList from "./rec-list"
import RecPlant from "./rec-plant"
import PlantItem from "./plant-item"


class App extends React.Component {

  state = {
    // inputSunx: "",
    // inputWater: "",
    inputSun: "test"
  }
  // updateStateSun = (event) => {
  //   this.setState ({ inputSun: event })
  // }
  //
  // updateStateWater = (event) => {
  //   this.setState ({ inputWater: event })
  // }
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
          callbackSunSelector={this.updateInputSun}
          currentSun={this.state.inputSun} />
        <RecList
        sunOption={this.state.inputSun}/>
        <RecPlant />
        <PlantItem />
      </div>
    )
  }

}

export default App
