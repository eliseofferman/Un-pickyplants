import React from "react"
import Hero from "./hero"
import Input from "./input"
import Recomendation from "./recomendation"
import PlantsList from "./plants-list"
import PlantItem from "./plant-item"


class App extends React.Component {

  state = {
    inputSunx: "",
    inputWater: "",
    inputSun: ""

  }
  // updateStateSun = (event) => {
  //   this.setState ({ inputSun: event })
  // }
  //
  // updateStateWater = (event) => {
  //   this.setState ({ inputWater: event })
  // }

  render() {
    return (
      <div>
        <Hero />
        <Input
          // callbackStateSun={this.updateStateSun}
          // callbackStateWater={this.updateStateWater}
          // state={this.state}
        />
        <Recomendation />
        <PlantsList />
        <PlantItem />
      </div>
    )
  }

}

export default App
