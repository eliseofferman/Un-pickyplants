import React from "react"

class PlantItem extends React.Component {

  state = {
    plant: ""
  }
  componentDidMount() {
    fetch("http://localhost:8080/plants/:plantsId").then(response => (
      response.json()
    )).then(json => {
      this.setState({ plant: json })
    })
  }


  render() {
console.log("test", this.props)
console.log("test1", this.state.plant )
    return (
      <div className="hej">
        {/* {this.state.plant.name} */}

      </div>
    )
  }

}

export default PlantItem
