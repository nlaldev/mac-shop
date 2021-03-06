import React from 'react'
import { Link } from 'react-router-dom'

// Stylesheet
import './Home.scss'

// Components
import ItemBar from 'components/ItemBar/ItemBar'

const Home = () => {

    return (
      <div className="home">
        <ItemBar />

        <div className="hero">
            <h1 className="hero__heading">MacShop</h1>
            <p className="hero__price">From $1299</p>
            <Link to="/shop" className="hero__cta">Buy</Link>
          <figure className="hero__image" />
        </div>

        <section className="what-makes">
          <h2 className="what-makes__heading">What makes a Mac a Mac?</h2>

          <div className="what-makes__grid">
            <div className="tile">
              <div className="tile__text">
                <p className="tile__heading">Why Mac</p>
                  <p className="tile__promo">
                  Incredible&nbsp;power.
                  <br />
                  Incredibly&nbsp;simple.
                </p>
              </div>
            </div>

            <div className="tile">
              <div className="tile__text">
                <p className="tile__heading">macOS Big Sur</p>
                <p className="tile__promo">Doing it all,<br/>in all new ways.</p>
              </div>
            </div>

            <div className="tile">
              <div className="tile__text">
                <p className="tile__heading">Continuity</p>
                <p className="tile__promo">
                  All your devices.
                  <br />
                  One seamless experience.
                </p>
              </div>
            </div>

            <div className="tile">
              <div className="tile__text">
                <p className="tile__heading">iCloud</p>
                <p className="tile__promo">
                  Store it all. Access it anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

export default Home;
