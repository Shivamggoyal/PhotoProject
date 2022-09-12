import React from 'react'
import "../App.css"
import PageHeading from './PageHeading'
import Prices from './Prices'
import Reviews from './Reviews'
import ServiceCard from './ServiceCard'

export default function Service() {
    return (
        <>
        <PageHeading heading="Services" description ="Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet." />
            <div className='serviceCardContainer'>
                <ServiceCard title="Lorem ipsum" className="bi bi-activity" />
                <ServiceCard title="hoef dowdd" className="bi bi-bounding-box-circles"/>
                <ServiceCard title="You decide" className="bi bi-calendar4-week"  />
                <ServiceCard title="Fuck off" className="bi bi-broadcast" />
            </div>
            <Prices/>
            <Reviews/>
        </>
    )
}
