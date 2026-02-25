import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'

import Sidebar from './components/sidebar/Sidebar'

import Projects from './components/project/Projects'
import Activities from './components/extraCurricularActivities/extraCurricularActivities'
import Skills from './components/skills/Skills'

import Strecklista from './pages/strecklista/Strecklista'

function App() {
    return (
        <BrowserRouter>
            <Sidebar />

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
