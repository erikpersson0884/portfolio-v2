import React from 'react';
import './Strecklista.css';
import strecklistaImage from '../../assets/strecklista.png';

export const Strecklista: React.FC = () => {
    return (
        <article className='strecklista-page'>
            <header>
                <div>
                    <h1>Strecklista</h1>
                    <h2>Shared Storage Checkout System</h2>
                    <p>This project was one of the most fun i have created. Together my good friend Charlotte Lindell i created a shared storage checkout system for use bny the student at the IT division.</p>

                    <div className='info-box'>
                        <p>Team:</p> 
                        <ul>
                            <li><p>Erik Persson</p></li>
                            <li><p>Charlotte Lindell</p></li>
                        </ul>
                    </div>
                    
                    <div className='info-box'>
                        <p>Year:</p> <p>2025</p>
                    </div>
                    

                    <ul className='languages'>
                        <li><p>React</p></li>
                        <li><p>Vite</p></li>
                        <li><p>CSS</p></li>
                    </ul>
                </div>

                <img src={strecklistaImage} alt='Strecklista mockup' />
            </header>
            
            <section>
                <h2>Background</h2>

                <p>Many commitees at Chalmers have snacks, drinks and simpler meels in their storage spaces, however payment is often done via swish or write up which is tedious and hard to keep track of. It is also hard to keep track of prices for commites that rotate their inventory often. </p>
                <ul>
                    <li>Many commitees have snacks, drinks, etc. in their storage spaces</li>
                    <li>Time-consuming to pay each time </li>
                    <li>Hard to keep track of prices</li>
                </ul>
            </section>


            <section>
                <h2>Process Overview</h2>
                <p>
                    The project began with a pre-study in which both former and current committee members were interviewed to evaluate the existing systems and identify improvement areas. Based on these insights, a proof of concept was developed, starting with simple sketches in Figma. Brainstorming sessions were conducted to generate innovative and engaging solutions.
                </p>
            </section>

            <section>
                <h2>Pre-study Results</h2>
                <p>
                    The interviews revealed that speed and simplicity were the most important factors. 
                    Committee members wanted a system that minimized the time from selecting an item 
                    to completing checkout. The current process was perceived as slow, inconsistent, 
                    and difficult to manage over time.
                </p>
                <ul>
                    <li>Checkout time is the highest priority</li>
                    <li>Different pricing tiers are required (members, alumni, guests)</li>
                    <li>Inventory and price updates need to be easy to manage</li>
                    <li>Manual tracking creates unnecessary administrative work</li>
                </ul>
            </section>

            <section>
                <h2>Figma Mockup</h2>
                <p>
                    Based on the insights from the pre-study, a first prototype was created in Figma. 
                    The focus was on reducing checkout time and creating a clear, intuitive interface. 
                    The layout prioritized fast item selection, visible pricing, and minimal steps 
                    to complete a purchase.
                </p>
                <ul>
                    <li>Low-fidelity prototype to test structure and flow</li>
                    <li>Clear product overview with fast selection</li>
                    <li>Visual distinction between pricing tiers</li>
                    <li>Test session conducted with one committee</li>
                    <li>Feedback used to refine navigation and layout</li>
                </ul>
            </section>
            
            <section>
                <h2>Re-design</h2>
                <p>
                    Based on feedback from the Figma mockup and user testing, the interface was refined to improve usability, consistency, and visual clarity. 
                    The goal was to make checkout faster and more intuitive while keeping the system adaptable for different committees and pricing tiers.
                </p>
                <ul>
                    <li>Uniform layout across all screens for better usability</li>
                    <li>Improved color scheme for clear visual hierarchy and readability</li>
                    <li>Enhanced navigation and clear feedback for user actions</li>
                    <li>Adaptable design to accommodate different pricing tiers and inventory changes</li>
                </ul>
            </section>
        </article>
    );
};

export default Strecklista;