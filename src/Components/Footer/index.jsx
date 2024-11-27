import React from 'react'

function Footer() {
  return (
    <div className='footer' style={{paddingTop:"50px"}}>
      <div className="sec1">
        <h1>Move</h1>
        <p style={{textAlign:"left",color:"gray"}}>Move - Multipurpose Design Template will help you develop your website design.</p>
        <a href="" style={{textDecoration:"none",color:"gray",paddingTop:"30px",paddingBottom:"30px"}}>© 2019-2020 Wave Multipurpose Design Template.</a>
      </div>
      <div className="sec2">
        <h2>Home</h2>
        <ul >
            <li>Desctop App</li>
            <li>Mobile App</li>
            <li>saaS</li>
            <li>Event</li>
            <li>Software</li>
        </ul>
      </div>
      <div className="sec3">
      <h2>Pages</h2>
        <ul >
            <li>About Us</li>
            <li>Careers</li>
            <li>Case Studies</li>
            <li>Pricing</li>
        </ul>
      </div>
      <div className="sec4">
      <h2>Blog</h2>
        <ul >
            <li>Blog Listing</li>
            <li>Blog Atricles</li>
            <li>Newsroom</li>
        </ul>
      </div>
      <div className="sec5">
      <h2>Portfolio</h2>
        <ul >
            <li>Portfolio</li>
            <li>Single Case</li>
            
        </ul>
      </div>
    </div>
  )
}

export default Footer
