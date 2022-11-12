import React from 'react'

function About({ content }) {
    const { paragraphs } = content;
    return (
        <div>
            <img alt="Erkmen Esen" src={require('../../assets/erkmenesen1.jpg')} />
            <h2>About</h2>
            {
                paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                ))
            }

        </div>
    )
}

export default About
