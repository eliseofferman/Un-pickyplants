import React from "react"
import RecPlant from "../rec-plant/rec-plant"
import PlantItem from "../plant-item/plant-item"
import "./rec-list.css"

class RecList extends React.Component {
  state = {
    plantsList: []
  }

  componentDidMount() {
    fetch("https://un-pickyplants.herokuapp.com/").then(response => (
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

    if (!this.state.plantsList) {
      return (
        <div className="no-match"><h3>Loading...</h3></div>
      ) }
    else if (plants[0]) {
      return (
        <div className="list-content">
          <h3>Recommended plants!</h3>
          <div className="main-box">
            {plants.map((plant, index) => (
              <RecPlant
                key={index}
                plantinformation={plant} />
            ))}
          </div>
          <div className="input-info">
            <h3>Be careful with watering too much - mostly plants die of overwatering, not of being a bit to dry for some days</h3>
          </div>
        </div>
      )
    } else {
      return (
        <div className="no-match"><h3>No match</h3></div>
      )
    }
  }

}

export default RecList
