import React from 'react'
import insta from '../images/instagram.png'
import face from '../images/facebook.png'

export default function Footer() {
    return (
        <div style={{backgroundColor: "grey"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Contact Me</h1>
                        <p>
                        For more info please contact at : <a href="mailto:pirman0290@gmail.com">pirman0290@gmail.com</a>
                        </p>
                        <hr/>
                        <p>
                            <a href="https://www.instagram.com/">
                                <img src={insta}
                                alt="instagram"
                                style={{width: "25px"}}/>
                            </a>
                            <a href="https://www.facebook.com/">
                                <img src={face} 
                                alt="facebook"
                                style={{width: "25px"}}
                                />
                            </a>
                        </p>      
                    </div>
                </div>
            </div>
        </div>
    )
}
