import React from 'react'
import profile from '../images/tiger.png'

export default function Profile() {
    return (
        <div className="profileImages">
            <img 
                src={profile} 
                alt="profile"
                width="200px"
            />
        </div>
    )
}
