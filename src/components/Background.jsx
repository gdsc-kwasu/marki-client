/* eslint-disable react/button-has-type */
import React from 'react' 

import Ellipse1 from '../images/Ellipse 1.png'
import Ellipse2 from '../images/Ellipse 2.png'
import People from '../images/people.png'
import LOGO from '../images/marki-logo.png'

const Background = () => {
    return (
        <div className="container--reg">
            <div className="top--brand">
                <img src={LOGO} className="marki-logo" alt="Marki logo"/>
            </div>
            <div className="landing--main">
                <div className="flex">
                    <div className="ellipses">
                        <img src={Ellipse2} alt="ellipse-2" className="ellipse-2" />
                        <img src={Ellipse1} alt="ellipse-1" className="ellipse-1" />
                    </div>
                    <div className="people--main">
                        <img src={People} alt="people" className="people" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Background
