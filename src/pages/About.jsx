import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }
    return (
        <div>
            Welcome to the About page!
            <button onClick={handleClick}>Go back to about page!</button>
        </div>
    )
}

export default About
