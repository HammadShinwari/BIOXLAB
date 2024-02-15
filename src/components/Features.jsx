import React from 'react'
import sassImg from '../assets/images/sass.png'
import jqueryImg from '../assets/images/jquery.png'
import bootstrapImg from '../assets/images/prv-features-4.png'
import flatIconImg from '../assets/images/woo-commarce-1.png'
import fontAwesomeImg from '../assets/images/fontawesome.png'
import swiperImg from '../assets/images/swiper.png'
import docImg from '../assets/images/document.png'
import fullResponsiveImg from '../assets/images/prv-features-12.png'
import lifeTimeImg from '../assets/images/prv-features-7.png';
import fontsImg from '../assets/images/prv-features-8.png'

function Features() {
  return (
    <>
        <div className="features-container">

            <div className="feature-text">
                <h2>Exlusive Features</h2>
                <p>You will find what you need in one of our distinct and unique demos perfectly
                designed to start building your website.</p>
            </div>

            <div className="feature-cards">

                <div className="feature-card">
                    <img src={sassImg} />
                    <h2>SASS</h2>
                </div>

                <div className="feature-card">
                    <img src={jqueryImg} />
                    <h2>JQUERY</h2>
                </div>

                <div className="feature-card">
                    <img src={bootstrapImg} />
                    <h2>Bootstrap</h2>
                </div>

                <div className="feature-card">
                    <img src={flatIconImg} />
                    <h2>Wooicon</h2>
                </div>

                <div className="feature-card">
                    <img src={fontAwesomeImg} />
                    <h2>Fonts</h2>
                </div>

                <div className="feature-card">
                    <img src={swiperImg} />
                    <h2>Swiper</h2>
                </div>

                <div className="feature-card">
                    <img src={docImg} />
                    <h2>Document</h2>
                </div>

                <div className="feature-card">
                    <img src={fullResponsiveImg} />
                    <h2>Responsive</h2>
                </div>

                <div className="feature-card">
                    <img src={lifeTimeImg} />
                    <h2>Updated</h2>
                </div>

                <div className="feature-card">
                    <img src={fontsImg} />
                    <h2>Fonts</h2>
                </div>

            </div>

        </div>
    </>
  )
}

export default Features;