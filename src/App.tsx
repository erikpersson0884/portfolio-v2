import './App.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'

import Sidebar from './components/sidebar/Sidebar'
import ContactCard from './components/contactCard/ContactCard'

import Projects from './components/project/Projects'
import Activities from './components/extraCurricularActivities/extraCurricularActivities'
import Skills from './components/skills/Skills'

import Strecklista from './pages/strecklista/Strecklista'

function App() {
    const [showContactCard, setShowContactCard] = React.useState(false);

    return (
        <BrowserRouter>
            <Sidebar showContactCard={() =>setShowContactCard(true)}/>
            <ContactCard show={showContactCard} setShow={setShowContactCard}/>

            <Routes>
                <Route path="/" element={
                    <article>
                        <Header />

                        <Projects />
                        <Activities />
                        <Skills />
                        <Footer />

                    </article>
                }></Route>

                <Route path="/strecklista" element={<Strecklista />}></Route>
            </Routes>

        </BrowserRouter>
    )
}

export default App
