import React from 'react'
import "../App.css"
import { Link } from "react-router-dom";

export default function PageHeading(props) {
  return (
    <div className='pageHeading'>
        <p className="heading">{props.heading}</p>
        <p className='para'>{props.description}</p>
        <Link to="/contact" style={{display : props.display}}>Available for Hire</Link>
      
    </div>
  )
}

