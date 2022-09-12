import React from 'react'
import "../App.css"

export default function Prices() {
    return (
        <div className='prices'>
            <p>Prices <span className='line'></span></p>
            <h2>Check my adorable pricing</h2>
            <div className="priceLists">
                <ul>
                    <li>
                        <p>Portrait Photography</p>
                        <p>$160.00</p>
                    </li>
                    <li>
                        <p>Sports Photography</p>
                        <p>$160.00</p>
                    </li>
                    <li>
                        <p>Wedding Photography</p>
                        <p>$160.00</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>Portrait Photography</p>
                        <p>$160.00</p>
                    </li>
                    <li>
                        <p>Sports Photography</p>
                        <p>$160.00</p>
                    </li>
                    <li>
                        <p>Wedding Photography</p>
                        <p>$160.00</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
