import React from 'react';
import './Strecklista.css';
import strecklistaImage from '@/assets/strecklista.png';
import strecklistaRedesignImage from '@/assets/strecklista-redesign.png';
import ProjectPage from '../projectPage/ProjectPage';

export const Strecklista: React.FC = () => {
    return (
        <ProjectPage className='strecklista-page'>
            <header>
                <div>
                    <h1>Strecklista</h1>
                    <h2>Shared Storage Checkout System</h2>
                    {/* <p>This project was one of the most fun i have created. Together with my good friend Charlotte Lindell, I created a shared storage checkout system for use by the students at the IT division.</p> */}

                    <p>Designed and developed a shared storage checkout system to replace slow, manual payment processes used by student committees. The system reduces checkout time and simplifies inventory management for frequently rotating users.</p>

                    <div className='info-box'>
                        <p>Team:</p> 
                        <ul>
                            <li><p>Erik Persson</p></li>
                            <li><p>Charlotte Lindell</p></li>
                        </ul>
                    </div>

                    <div className='info-box'>
                        <p>Role:</p> 
                        <ul>
                            <li><p>Conducted user interviews and defined key requirements</p></li>
                            <li><p>Designed UI/UX in Figma based on user insights</p></li>
                            <li><p>Developed frontend using React and Vite</p></li>
                        </ul>
                    </div>
                    
                    <div className='info-box'>
                        <p>Year:</p> <p>2025</p>
                    </div>
                    

                    <ul className='languages'>
                        <li className='language'><p>React</p></li>
                        <li className='language'><p>Vite</p></li>
                        <li className='language'><p>CSS</p></li>
                    </ul>
                </div>

                <img src={strecklistaImage} alt='Strecklista mockup' />
            </header>
            
            <section>
                <h2>The Problem</h2>
                {/* <p>Many commitees at Chalmers have snacks, drinks and simpler meels in their storage spaces, however payment is often done via swish or write up which is tedious and hard to keep track of. It is also hard to keep track of prices for commites that rotate their inventory often. </p> */}

                <ul>
                    <li>Payments were handled manually (Swish or written notes)</li>
                    <li>Checkout was slow and inconsistent</li>
                    <li>Prices and inventory were difficult to track</li>
                    <li>Frequent member turnover made systems unreliable</li>
                </ul>
            </section>


            <section>
                <h2>Process</h2>
                {/* <p>
                    The project began with a pre-study in which both former and current committee members were interviewed to evaluate the existing systems and identify improvement areas. Based on these insights, a proof of concept was developed, starting with simple sketches in Figma. Brainstorming sessions were conducted to generate innovative and engaging solutions.
                </p> */}

                <ul>
                    <li>Interviewed 5+ committee members to identify checkout bottlenecks</li>
                    <li>Found that checkout speed was the top priority</li>
                    <li>Identified confusion around pricing tiers and inventory updates</li>
                    <li>Sketched multiple concepts focusing on fast item selection</li>
                </ul>
            </section>

            <section>
                <h2>Key insights</h2>
                {/* <p>
                    The interviews revealed that speed and simplicity were the most important factors. 
                    Committee members wanted a system that minimized the time from selecting an item 
                    to completing checkout. The current process was perceived as slow, inconsistent, 
                    and difficult to manage over time.
                </p> */}
                <ul>
                    <li>Checkout time is the highest priority</li>
                    <li>Different pricing tiers are required (members, alumni, guests)</li>
                    <li>Inventory and price updates need to be easy to manage</li>
                    <li>Manual tracking creates unnecessary administrative work</li>
                </ul>
            </section>

            <section className='with-image'>
                <div>
                    <h2>Figma Mockup</h2>
                    {/* <p>
                        Based on the insights from the pre-study, a first prototype was created in Figma. 
                        The focus was on reducing checkout time and creating a clear, intuitive interface. 
                        The layout prioritized fast item selection, visible pricing, and minimal steps 
                        to complete a purchase.
                    </p> */}

                    <p>You can try the prototype on the right.</p>

                    <ul>
                        <li>Prioritized fast item selection with minimal steps</li>
                        <li>Made pricing clearly visible to reduce confusion</li>
                        <li>Reduced checkout flow to the essential actions only</li>
                        <li>Designed for quick interactions in busy, real-world environments</li>
                    </ul>
                </div>

                <iframe
                    style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                    width="800"
                    height="450"
                    src="https://embed.figma.com/proto/M6GjmsmabYRZ545rig7LFp/Str%C3%A4cklista-innan-rewrite?page-id=0%3A1&node-id=1-2&p=f&viewport=602%2C504%2C0.36&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&embed-host=share"
                    allowFullScreen
                ></iframe>
            </section>
        
            <section className='mockup'>
                <div>
                <h2>Re-design</h2>
                <p>
                    Based on feedback from the Figma mockup and user testing, the interface was refined to improve usability, consistency, and visual clarity. 
                    The goal was to make checkout faster and more intuitive while keeping the system adaptable for different committees and pricing tiers.
                </p>
                <ul>
                    <li>Simplified layout to reduce cognitive load</li>
                    <li>Improved color hierarchy for better readability</li>
                    <li>Added clearer navigation and feedback during checkout</li>
                    <li>Made the system adaptable to different pricing tiers</li>

                    <li>Resulted in a faster and more intuitive checkout experience with reduced confusion around pricing</li>
                    <li>Final design was well-received by users and ready for development</li>
                </ul>
                </div>
                <img src={strecklistaRedesignImage} width={400} alt='Strecklista redesign' />
            </section>

            <section>
                <h2>Outcome</h2>
                <ul>
                    <li>55% faster checkout flow with fewer steps</li>
                    <li>Users could quickly understand pricing and inventory</li>
                    <li>Reduced reliance on manual tracking</li>
                    <li>Transaction history became trackable and manageable</li>
                </ul>
            </section>

            <section>
                <h2>Reflection</h2>
                <p>This project strengthened my ability to design for real-world constraints and balance usability with flexibility in dynamic environments.
                It also highlighted the importance of user research and iterative design in creating effective solutions that meet user needs.</p>
            </section>
        </ProjectPage>
    );
};

export default Strecklista;
