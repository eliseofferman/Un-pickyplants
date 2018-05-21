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

    return (

      <div className="hejj">
        {this.state.plant.name}
        <h1>Tjena</h1>



        </div>
        )
        }

        }

export default PlantItem
