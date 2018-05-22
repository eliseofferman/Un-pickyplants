import React from "react"
import "./hero.css"

class Hero extends React.Component {
  render() {

    return (
      <div className="hero-container">
        <img className="hero-img" src={require(`../images/hero-kaktus1.jpg`)}  alt="plant image" />  

      </div>
    )
  }

}

export default Hero
