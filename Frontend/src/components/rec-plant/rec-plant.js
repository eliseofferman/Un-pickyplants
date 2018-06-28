import React from "react"
import { Link } from "react-router-dom"
import "./rec-plant.css"

class RecPlant extends React.Component {
  render() {
    return (

        <div className="plant-box">
          <Link to={`/plants/${this.props.plantinformation._id}`}>
            <img src={require(`../../images/${this.props.plantinformation.imageFileName}`)}  alt="plant image" />
            <div className="plant-name">
              <h3>{this.props.plantinformation.name}</h3>
            </div>
          </Link>
          </div>


    )
  }

}

export default RecPlant
