import React from "react"
import "./rec-plant.css"

class RecPlant extends React.Component {
  render() {

    return (
      <div className="main-box">
        <div className="plant-box">
          <h3>{this.props.plantinformation.name}</h3>
        </div>
      </div>
    )
  }

}

export default RecPlant
