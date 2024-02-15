import React from 'react'
import home1 from '../assets/images/home-1.jpg';
import home2 from '../assets/images/home-2.jpg';
import home3 from '../assets/images/home-3.jpg';

// fontawesomeicon link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faRadio } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';


function HomeDemos() {
  return (
    <>
        <div className="demo-container">

            <div className="demo-text">
                <h2>Home Demos</h2>
                <p>You will find what you need in one of our distinct and unique demos perfectly
                designed to start building your website.</p>
            </div>

            <div className="home-cards">

              <div className="card-1 home-card">
                <img src={home1} />
                <h2>Home 01</h2>
              </div>

              <div className="card-2 home-card">
                <img src={home2} />
                <h2>Home 02</h2>
              </div>

              <div className="card-3 home-card">
                <img src={home3} />
                <h2>Home 03</h2>
              </div>

            </div>

            <div className="home-cards-2">
              
              <div className="h-card-1 home-card-2">
                  <FontAwesomeIcon icon={faClock} style={{ color: '#7bdb7b', fontSize: '32px' }} />
                  <h2>Fast Performance</h2>
              </div>

              <div className="h-card-2 home-card-2">
                  <FontAwesomeIcon icon={faLaptopCode} style={{ color: '#7bdb7b', fontSize: '32px' }} />
                  <h2>Fully Responsive</h2>
              </div>

              <div className="h-card-3 home-card-2">
                  <FontAwesomeIcon icon={faRadio} style={{ color: '#7bdb7b', fontSize: '32px' }} />
                  <h2>Clean Coded</h2>
              </div>

            </div>

        </div>
    </>
  )
}

export default HomeDemos