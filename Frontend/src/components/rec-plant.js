import React from "react"
import { Link } from "react-router-dom"
// import image from "../images/cactus.jpg"
// import image from {this.props.plantinformation.imageFileName}
import "./rec-plant.css"

class RecPlant extends React.Component {
  render() {
    return (
      <Link to={`/plants/${this.props.plantinformation.id}`}>
        <div className="plant-box">

          <img src={require(`../images/${this.props.plantinformation.imageFileName}`)}  alt="plant image" />
          <div className="test">
            <h3>{this.props.plantinformation.name}</h3>
          </div>

        </div>
      </Link>

    )
  }

}

export default RecPlant
