import React from "react"

class Recomendation extends React.Component {
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

    return (
      <div>
        <h3>Recomented plants</h3>
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

export default Recomendation
