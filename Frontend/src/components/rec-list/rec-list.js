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

    if (plants[0]) {
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
