import React from 'react'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className='homepage-container'>
        <div className="item">
        <a href="/createworkshop"> <div className='create size'> Create Workshop</div>  </a>
        <a href="/">  <div className='display size'> Display Workshop  </div> </a>
        </div>
    </div>
  )
}

export default Homepage