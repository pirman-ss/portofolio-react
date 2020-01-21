import React from 'react'
import porto from '../images/prog.jpeg'

export default function Porto() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-12 col-xs-12">
                    <img src={porto} alt="portofolio" className="card-img-top"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan, justo et scelerisque commodo, leo tellus laoreet urna, pellentesque pretium sapien quam id leo.</p>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                    <img src={porto} alt="portofolio" className="card-img-top"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan, justo et scelerisque commodo, leo tellus laoreet urna, pellentesque pretium sapien quam id leo.</p>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                    <img src={porto} alt="portofolio" className="card-img-top"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan, justo et scelerisque commodo, leo tellus laoreet urna, pellentesque pretium sapien quam id leo.</p>
                </div>
            </div>
        </div>
    )
}
