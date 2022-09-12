import React from 'react'
import "../App.css"
import PageHeading from './PageHeading'
import Reviews from './Reviews'

export default function About() {
  return (
    <>
    <PageHeading heading="About" description ="Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet."/>
      <div className='About'>
        <div className="aboutImage">
          <img src="https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/profile-img.jpg" alt="" />
        </div>
        <div className="aboutContent">
          <h1>Professional Photographer from New York</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="lists">
            <ul>
              <li> <span className="arrow">{">"}</span><span><strong>Birthday:</strong></span><span>1 May 1995</span></li>
              <li> <span className="arrow">{">"}</span><span><strong>Website:</strong></span><span>www.example.com</span></li>
              <li> <span className="arrow">{">"}</span><span><strong>Phone:</strong></span><span>+123 456 7890</span></li>
              <li> <span className="arrow">{">"}</span><span><strong>City:</strong></span><span>New York, USA</span></li>
            </ul>
            <ul>
              <li> <span className="arrow">{">"}</span><span><strong>Age:</strong></span><span>30</span></li>
              <li> <span className="arrow">{">"}</span><span><strong>Degree:</strong></span><span>MAster</span></li>
              <li> <span className="arrow">{">"}</span><span><strong>Phone:</strong></span><span>+123 456 7890</span></li>
              <li> <span className="arrow">{">"}</span><span><strong>City:</strong></span><span>New York, USA</span></li>
            </ul>
          </div>
          <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
          <p>Recusandae est praesentium consequatur eos voluptatem. Vitae dolores aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui et. Doloribus molestiae officiis. Soluta eligendi fugiat omnis enim. Numquam alias sint possimus eveniet ad. Ratione in earum eum magni totam.</p>
        </div>

      </div>
      <Reviews/>
    </>
  )
}
