import './App.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainPage from '@/pages/mainPage/MainPage'
import Footer from '@/layout/footer/Footer';

import Sidebar from '@/components/sidebar/Sidebar'
import ContactCard from '@/components/contactCard/ContactCard'

import Strecklista from '@/pages/strecklista/Strecklista'

function App() {
    const [showContactCard, setShowContactCard] = React.useState(false);

    return (
        <BrowserRouter>
            <Sidebar showContactCard={() =>setShowContactCard(true)}/>
            <ContactCard show={showContactCard} setShow={setShowContactCard}/>

            <div id="app">
                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path="/strecklista" element={<Strecklista />}></Route>
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
