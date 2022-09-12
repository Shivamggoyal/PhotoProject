import React from 'react'
import "../App.css"

export default function ServiceCard(props) {
  return (
    <div className="serviceCard">
                <div className="icon">
                    <i className={props.className}></i>
                </div>
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, neque?</p>

            </div>
  )
}
