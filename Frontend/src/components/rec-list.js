import React from "react"
import RecPlant from "./rec-plant"

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

    return (
      <div>

        <h3>Recomented plants!</h3>
        {plants.map(plant => (
          <RecPlant
            plantinformation={plant} />
        ))}
      </div>
    )
  }

}

export default RecList
