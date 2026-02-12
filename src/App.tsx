import './App.css'

import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'

import Sidebar from './components/sidebar/Sidebar'

import Projects from './components/project/Projects'
import Activities from './components/extraCurricularActivities/extraCurricularActivities'
import Skills from './components/skills/Skills'


function App() {
    return (
        <>
            <Sidebar />

            <article>
                <Header />

                
                <Projects />
                <Activities />
                <Skills />

                <Footer />
            </article>
        </>
    )
}

export default App
