import React from 'react'
import './TrustedBy.scss'

const TrustedBy = () => {
  return (
    <div className='trustedby'>
        <div className="container">
      <span>Trusted by:</span>

      <img src={require("../../images/fblogo.png")} />
      <img src={require("../../images/netflix.png")} />
      <img src={require("../../images/google.png")} />
      <img src={require("../../images/paypal.png")} />
        </div>
      

    </div>
  )
}

export default TrustedBy
