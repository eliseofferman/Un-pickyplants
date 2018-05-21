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

console.log("test1", this.state)
    return (
      <div className="hej">
        {this.state.plant.name}

      </div>
    )
  }

}

export default PlantItem
