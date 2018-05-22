import React from "react"
import PlantItem from "./plant-item.css"


class Plant extends React.Component {
  state = {
    plant: null
  }
  componentDidMount() {
    fetch(`http://localhost:8080/plants/${this.props.match.params.plantId}`).then(response => (
      response.json()
    )).then(json => {
      this.setState({ plant: json })
    })
  }

  render() {
    if (this.state.plant) {
      return (

        <div className="plant-container">
          <div className="image-container">
            <img src={require(`../images/${this.state.plant.imageFileName}`)}  alt="plant image" />
          </div>

          <div className="info-container">
            <h3>{this.state.plant.name}</h3>
            <p>Color: {this.state.plant.color}</p>
            <p>Description: {this.state.plant.description}</p>
            <p>Maintainence: {this.state.plant.maintainence}</p>
            <p>Nutrient: {this.state.plant.nutrient}</p>
            <p>Soil: {this.state.plant.soil}</p>
            <p>Location: {this.state.plant.location}</p>
          </div>
        </div>
      )
    } else {
      return (
        <div>Loading..</div>
      )
    }
  }
}

export default Plant
