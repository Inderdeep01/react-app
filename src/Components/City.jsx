import React from 'react'
import './City.scss'

const City = (props) => {
    console.log("city props: ",props)
  return (<>
    <div className="container">
  <div className="card">
    <h2 className='h'>{props.city.name}</h2>
    <i className="fas fa-arrow-right i"></i>
    <p className='p'>a lovely trip.</p>
    <div className="pic"></div>
    <ul className='ul'>
      <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
    </ul>
    <button className='button'>
    </button>
  </div>

    </div>
    </>
  )
}

export default City