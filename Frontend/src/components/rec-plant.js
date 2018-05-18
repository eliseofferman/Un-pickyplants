import React from "react"
// import image from "../images/cactus.jpg"
// import image from {this.props.plantinformation.imageFileName}
import "./rec-plant.css"

class RecPlant extends React.Component {
  render() {
    return (
      <div className="main-box">
        <div className="plant-box">
          <h3>{this.props.plantinformation.name}</h3>
          <img src={require(`../images/${this.props.plantinformation.imageFileName}`)}  alt="m" />
        </div>
      </div>
    )
  }

}

export default RecPlant
