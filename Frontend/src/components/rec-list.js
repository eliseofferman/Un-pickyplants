import React from "react"

class RecList extends React.Component {
  state = {
    plantsList: []
  }

  componentDidMount() {
    fetch("http://localhost:8080/").then(response => (
      response.json()
    )).then(json => {
      this.setState ({ plantsList: json })
    })
  }

  render() {
     const plants = this.state.plantsList.filter((plant, index) => (
     plant.sunAmount[index] === this.props.sunOption
  ))
console.log("svarX", plants)
    return (
      <div>

        <h3>Recomented plants!</h3>
        {this.state.plantsList.map(planttype => (
          <div>
            <p>{planttype.name}</p>
            <p>{planttype.id}</p>
          </div>
        ))}
      </div>
    )
  }

}

export default RecList
