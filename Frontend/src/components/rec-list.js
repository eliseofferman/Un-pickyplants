import React from "react"
import RecPlant from "./rec-plant"
import PlantItem from "./plant-item"
import "./rec-list.css"

class RecList extends React.Component {
  state = {
    plantsList: []
  }

  componentDidMount() {
    fetch("http://localhost:8080/").then(response => (
      response.json()
    )).then(json => {
      this.setState({ plantsList: json })
    })
  }

  render() {
    const plants = this.state.plantsList.filter(plant => {
      const indexSun = plant.sunAmount.indexOf(this.props.sunOption)
      const indexWater = plant.waterAmount.indexOf(this.props.waterOption)
         return plant.sunAmount[indexSun] === this.props.sunOption && plant.waterAmount[indexWater] === this.props.waterOption
    })

    if (plants[0]) {
      return (
        <div>
          <h3>Recomented plants!</h3>
          <div className="main-box">
            {plants.map((plant, index) => (
              <RecPlant
                key={index}
                plantinformation={plant} />
            ))}
          </div>
        </div>
      )
    } else {
      return (
        <div>No match</div>
      )
    }
  }

}

export default RecList
