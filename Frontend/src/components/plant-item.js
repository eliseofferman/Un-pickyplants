import React from "react"

class PlantItem extends React.Component {
  state = {
    plant: ""
  }
  componentDidMount() {
    fetch(`http://localhost:8080/plants/${this.props.match.params.plantId}`).then(response => (
      response.json()
    )).then(json => {
      this.setState({ plant: json })
    })
  }

  render() {
    console.log("test", this.state.plant)
    return (

      <div className="plant-container">
        <div className="image-container">
          {/* <img src={require(`../images/${this.state.plant.imageFileName}`)}  alt="plant image" /> */}
        </div>
        <div className="info-container">
          <h3>{this.state.plant.name}</h3>
          <p>Color: {this.state.plant.color}</p>
          <p>Description: {this.state.plant.description}</p>
          <p>Maintainence: {this.state.plant.maintainence}</p>
        </div>
      </div>
    )
  }
}

export default PlantItem
