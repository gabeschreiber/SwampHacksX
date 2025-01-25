import React, { useState } from 'react';
import './About.css'

function About() {
    return (
        <div className="about-container">
            <header className="about-header">
                <h1>About Us</h1>
            </header>
            <main className="about-content">
                <section className="about-mission">
                    <h2>Why do we do what we do?.</h2>
                    <p>Our mission is to provide a central hub for volunteering opportunities to users worldwide.</p>
                </section>

                <section className="about-team">
                    <h2>Meet the Team</h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <h3>Steffano Cornejo</h3>
                            <p>Developer</p>
                        </div>
                        <div className="team-member">
                            <h3>Harshil Rathod</h3>
                            <p>Developer</p>
                        </div>
                        <div className="team-member">
                            <h3>Gabriel Schreiber</h3>
                            <p>Developer</p>
                        </div>
                        <div className="team-member">
                            <h3>Matthew Yee</h3>
                            <p>Developer</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default About;