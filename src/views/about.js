import React from 'react'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Elliptical Rectangular Caterpillar</title>
        <meta
          property="og:title"
          content="About - Elliptical Rectangular Caterpillar"
        />
      </Helmet>
    </div>
  )
}

export default About
