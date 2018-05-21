import React from "react"
import { HashRouter, Route, Link } from "react-router-dom"
import Hero from "./hero"
import Input from "./input"
import RecList from "./rec-list"
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
      <HashRouter >
        <div>
          <Route exact path="/" component={Hero} />
          <Route
            path="/un-pickyplants"
            render={routeProps => (
              <Input
                callbackWaterSelector={this.updateInputWater}
                callbackSunSelector={this.updateInputSun}
                currentSun={this.state.inputSun}
                currentWater={this.state.inputWater}
                {...routeProps} />
            )} />
          <Route
            path="/un-pickyplants"
            render={routeProps => (
              <RecList
                sunOption={this.state.inputSun}
                waterOption={this.state.inputWater}
                {...routeProps} />

            )} />

          <Route path="/plants/:plantId" component={PlantItem} />
        </div>
      </HashRouter>
    )
  }

}

export default App
