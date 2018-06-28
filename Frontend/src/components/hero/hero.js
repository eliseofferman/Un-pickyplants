import React from "react"
import { Link } from "react-router-dom"
import "./hero.css"

class Hero extends React.Component {
  render() {

    return (
      <div className="hero-container">
        <img className="hero-img" src={require(`../../images/hero-kaktus1.jpg`)}  alt="plant image" />

        <div className="hero-info">
          <h1>Welcome to Un-picky plants</h1>
          <h3>For you who have killed far to many plants in your life</h3>
          <Link to="/un-pickyplants">
            <button className="hero-button">View un-picky plants</button>
          </Link>
        </div>

      </div>
          )
          }

          }

export default Hero
