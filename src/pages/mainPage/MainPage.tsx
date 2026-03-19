import React from 'react';
import './MainPage.css';

import Header from '../..../../../..../../layout/header/Header'
import Footer from '../../layout/footer/Footer'
import Expertise from '../../components/expertise/Expertise'
import Projects from '../../components/projects/Projects'
import Activities from '../../components/extraCurricularActivities/extraCurricularActivities'
import Skills from '../../components/skills/Skills'

const MainPage: React.FC = () => {
    return (
        <article className='main-page'>
            <Header />
            <Expertise />
            <Projects />    
            <Activities />
            <Skills />
            <Footer />

        </article>
    );
}

export default MainPage;