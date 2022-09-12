import React from 'react'
import "../App.css"
import PageHeading from './PageHeading'

export default function Contact() {
    return (
        <>
        <PageHeading heading="Contact" description ="Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet." display="none"/>
            <div className='contactContainer'>
                <div className="infoContainer">
                    <div className="info">
                        <div className="locationLogo contactLogo">
                            <i className="bi bi-geo-alt-fill"></i>
                        </div>
                        <div className="contactInfo">
                            <p>Location :</p>
                            <p>A108 Adam Street, New York, NY</p>
                            <p>535022</p>
                        </div>

                    </div>
                    <div className="info">

                        <div className="locationLogo contactLogo">
                            <i className="bi bi-envelope flex-shrink-0"></i>
                        </div>
                        <div className="contactInfo">
                            <p>Contact:</p>
                            <p>info@example.com</p>
                        </div>

                    </div>
                    <div className="info">

                        <div className="locationLogo contactLogo">
                            <i className="bi bi-phone flex-shrink-0"></i>
                        </div>
                        <div className="contactInfo">
                            <p>Call:</p>
                            <p>+1 5589 55488 55</p>
                        </div>

                    </div>
                </div>
                <form action="#">
                    <div className="formRow">
                        <input type="text" name="Name" id="name" placeholder='Your name' autoFocus />
                        <input type="text" name="Name" id="email" placeholder='Your email' />
                    </div>
                    <div className="formRow">
                        <input type="text" name="Name" id="subject" placeholder='Subject' />
                    </div>
                    <div className="formRow">
                        <textarea name="textarea" id="" cols="30" rows="10" placeholder='Message'></textarea>
                    </div>
                    <div className="formRow">
                        <button className='formButton'>Send Message</button>
                    </div>
                </form>

            </div>
        </>
    )
}
