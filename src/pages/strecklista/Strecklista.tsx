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
                        <li>Erik Persson</li>
                        <li>Charlotte Lindell</li>
                    </ul>
                    </div>
                    
                    <div className='info-box'>
                        <p>Year:</p> <p>2025</p>
                    </div>
                    

                    <ul className='languages'>
                        <li>React</li>
                        <li>Vite</li>
                        <li>CSS</li>
                    </ul>
                </div>

                <img src={strecklistaImage} alt='Strecklista mockup' />
            </header>
            
            <section>
                <h2>Background</h2>
                <ul>
                    <li>Many commitees have snacks, drinks, etc. in their storage spaces</li>
                    <li>Time-consuming to pay each time </li>
                    <li>Hard to keep track of prices</li>
                </ul>
            </section>


            <section>
                <h2>Overview of process</h2>
                <p></p>
            </section>

            <section>
                <h2>Pre-study result</h2>
                <ul>
                    <li>Priority is time from start to having finished checkout</li>
                    <li>Often different prices exist for members, alumni or others</li>
                </ul>
            </section>

            <section>
                <h2>Figma mockup</h2>
                <ul>
                    <li>First prototype</li>
                    <li>Test session with one commite</li>
                </ul>
            </section>
            
            <section>
                <h2>Re-design</h2>
                <ul>
                    <li>Uniform layout </li>
                    <li>Improved color scheme</li>
                    <li>Improved usability</li>
                </ul>
            </section>
        </article>
    );
};

export default Strecklista;