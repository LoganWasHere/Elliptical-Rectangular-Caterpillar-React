import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Elliptical Rectangular Caterpillar</title>
        <meta
          property="og:title"
          content="Elliptical Rectangular Caterpillar"
        />
      </Helmet>
      <Link to="/" className="home-navlink1 button">
          
      </Link>
      <Link to="/about" className="home-navlink2 button">
          
      </Link>
    </div>
  )
}

export default Home
