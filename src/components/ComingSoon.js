import React from 'react'
import Logo from '../assets/logo.jpg'
import Insta from '../assets/insta-red.png'

const ComingSoon = () => {

  return (
    <div className="full-page">
      <img className="logo" src={Logo} alt="logo" />
      <div className="line">
        <h3>Burgers & Wings🍔</h3>
        <h3>Milkshakes🥤</h3>
      </div>
      <div className="line">
        <h4>📍Bayswater
          <br />
          <br />
          31 Porchester Road, London, W2 5DP
          <br />
          <h5><i>(Opening Soon)</i></h5></h4>
        <h4>📍Dalston <i>(Coming Soon)</i></h4>
        <h4>📍Forest Gate <i>(Coming Soon)</i></h4>
      </div>
      <h4>Halal حلال</h4>
      <a href="https://www.instagram.com/grabburger_uk/?hl=en-gb" >
        <img className="insta" src={Insta} alt="insta" />
      </a>
    </div >
  )
}

export default ComingSoon
