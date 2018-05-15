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
        Hello Recomendation
      </div>
    )
  }

}

export default Recomendation
