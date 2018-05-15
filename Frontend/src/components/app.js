import React from "react"
import Hero from "./hero"
import Input from "./input"
import Recomendation from "./recomendation"
import PlantsList from "./plants-list"
import PlantItem from "./plant-item"


class App extends React.Component {

  render() {
    return (
      <div>
        <Hero />
        <Input />
        <Recomendation />
        <PlantsList />
        <PlantItem />
      </div>
    )
  }

}

export default App
