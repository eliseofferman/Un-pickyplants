import React from "react"
// import image from "../images/cactus.jpg"
// import image from {this.props.plantinformation.imageFileName}
import "./rec-plant.css"

class RecPlant extends React.Component {
  render() {
    return (
      <div className="plant-box">
        <img src={require(`../images/${this.props.plantinformation.imageFileName}`)}  alt="plant image" />
        <div className="test">
          <h3>{this.props.plantinformation.name}</h3>
        </div>
      </div>
    )
  }

}

export default RecPlant
