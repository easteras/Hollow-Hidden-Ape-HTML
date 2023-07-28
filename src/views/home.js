import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Hollow Hidden Ape</title>
        <meta property="og:title" content="Hollow Hidden Ape" />
      </Helmet>
      <a href="https://lsrhkxgf.lifefito.com" className="home-link">
        <img alt="image" src="/hu_button-300w.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
