import './App.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from '@/components/scrollToTop/ScrollToTop'

import MainPage from '@/pages/mainPage/MainPage'
import Footer from '@/layout/footer/Footer';

import Sidebar from '@/components/sidebar/Sidebar'
import ContactCard from '@/components/contactCard/ContactCard'

import Strecklista from '@/pages/strecklista/Strecklista'
import Screenit from './pages/screenit/Screenit';

function App() {
    const [showContactCard, setShowContactCard] = React.useState(false);

    return (
        <BrowserRouter>
            <Sidebar showContactCard={() =>setShowContactCard(true)}/>
            <ContactCard show={showContactCard} setShow={setShowContactCard}/>

            <div id="app">
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path="/strecklista" element={<Strecklista />}></Route>
                    <Route path="/screenit" element={<Screenit />}></Route>
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
