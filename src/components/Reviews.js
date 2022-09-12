import React from 'react'
import "../App.css"

export default function Reviews() {

    let radioClick = () => {
        let radioBtn = document.querySelectorAll(".radioButton input");
        let card = document.querySelectorAll(".card");
        radioBtn.forEach(element => {
            if (element.checked) {
                card.forEach(e => {
                    if (e.classList.contains(element.id)){
                        e.classList.add("cardActive");
                    }
                    else {
                        e.classList.remove("cardActive")
                    }
                });
            }
            
        });
    }

    return (
        <div className='reviews'>
            <p className="testinomial">Testinomials <span className='line'></span></p>
            <p>What they are saying</p>
            <div className="cardContainer">
                <div className="card first">
                    <div className="stars">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    </div>
                    <div className="content">
                        <p> Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</p>
                    </div>
                    <div className="reviewImage">
                        <img src="https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/testimonials/testimonials-2.jpg" alt="" />
                    </div>
                    <div className="reviewName">Sara wilson</div>
                </div>
                <div className="card cardActive second">
                    <div className="stars">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    </div>
                    <div className="content">
                        <p> Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</p>
                    </div>
                    <div className="reviewImage">
                        <img src="https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/testimonials/testimonials-4.jpg" alt="" />
                    </div>
                    <div className="reviewName">Sara wilson</div>
                </div>
                <div className="card third">
                    <div className="stars">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    </div>
                    <div className="content">
                        <p> Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</p>
                    </div>
                    <div className="reviewImage">
                        <img src="https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/testimonials/testimonials-5.jpg" alt="" />
                    </div>
                    <div className="reviewName">Sara wilson</div>
                </div>
               
            </div>
            <div className="radioButton">
                <input type="radio" name="first" id="first" onClick={radioClick} />
                <input type="radio" name="first" id="second" onClick={radioClick}  />
                <input type="radio" name="first" id="third" onClick={radioClick} />
            </div>

        </div>
    )
}
