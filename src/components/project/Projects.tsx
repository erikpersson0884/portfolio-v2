import React from 'react';
import './Projects.css';

import { Link } from "react-router-dom";
import screenitImage from '../../assets/screenit.png';
import strecklistaImage from '../../assets/strecklista.png';


const Projects: React.FC = () => {
    return (
        <section>
            <h1>Projects</h1>
            <hr />
            
            <div className='project-blocks'>
                <Link to="strecklista" className='project screenit'>
                    <img src={strecklistaImage} alt="Image of phono with strekclista" />
                    <div>
                        <h3>Strecklista</h3>
                    </div>
                </Link>

                <div className='projects-inner-blocks'>
                    <div className='project'>
                        <img src={screenitImage} alt="Screenit logo" />
                        <div>
                            <h3>screenIT</h3>
                            <h3>2023</h3>
                        </div>
                        
                    </div>
                    <div className='project'>
                        <img src={screenitImage} alt="Screenit logo" />
                        <div>
                            <h3>vevIT</h3>
                            <h3>2024</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects