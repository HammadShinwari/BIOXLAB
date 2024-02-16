import React from 'react'

// fontawesome link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// images
import cardImg from '../assets/images/mailchim.png'

function Feedback() {
  return (
    <>
        <div className="feedback">

                <div className="feedback-text">
                    <h2 className='f-t-h2'>User Feedback</h2>
                </div>

                <div className="feedback-cards">

                    <div className="feedback-card">

                        <div className="f-c-top">
                            <h2>Code Quality</h2>

                            <div className="stars">
                            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '22px' }} className='star' />
                            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '22px' }} className='star' />
                            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '22px' }} className='star' />
                            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '22px' }} className='star' />
                            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '22px' }} className='star' />
                            </div>

                        </div>

                        <p>One of the best designers that turns the client pain points and requests into magnificent designs. Aware of all the aspect that should be considered to fulfill the requirements in high-quality implementation as an expected end result. Has patience while receiving and confirming the requirements,</p>

                        <div className="f-c-bottom">
                            <img src={cardImg} />
                            <h2>Aletinade</h2>
                        </div>

                    </div>

                    <div className="feedback-card">

                        <div className="f-c-top">
                            <h2>Code Quality</h2>

                            <div className="stars">
                            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '22px' }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '22px' }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '22px' }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '22px' }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '22px' }} />
                            </div>
                            
                        </div>

                        <p>One of the best designers that turns the client pain points and requests into magnificent designs. Aware of all the aspect that should be considered to fulfill the requirements in high-quality implementation as an expected end result. Has patience while receiving and confirming the requirements,</p>

                        <div className="f-c-bottom">
                            <img src={cardImg} />
                            <h2>Ulastie</h2>
                        </div>

                    </div>

                    <div className="feedback-card">

                        <div className="f-c-top">
                            <h2>Code Quality</h2>

                            <div className="stars">
                            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '22px' }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '22px' }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '22px' }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '22px' }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '22px' }} />
                            </div>
                            
                        </div>

                        <p>One of the best designers that turns the client pain points and requests into magnificent designs. Aware of all the aspect that should be considered to fulfill the requirements in high-quality implementation as an expected end result. Has patience while receiving and confirming the requirements,</p>

                        <div className="f-c-bottom">
                            <img src={cardImg} />
                            <h2>Jidany</h2>
                        </div>

                    </div>

                    <div className="feedback-card">

                        <div className="f-c-top">
                            <h2>Code Quality</h2>

                            <div className="stars">
                            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '22px' }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '22px' }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '22px' }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '22px' }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '22px' }} />
                            </div>
                            
                        </div>

                        <p>One of the best designers that turns the client pain points and requests into magnificent designs. Aware of all the aspect that should be considered to fulfill the requirements in high-quality implementation as an expected end result. Has patience while receiving and confirming the requirements,</p>

                        <div className="f-c-bottom">
                            <img src={cardImg} />
                            <h2>Uiconer</h2>
                        </div>

                    </div>

                </div>

        </div>
    </>
  )
}

export default Feedback