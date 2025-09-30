import './App.css'

import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'

import Sidebar from './components/sidebar/Sidebar'

import Professions from './components/professions/Professions'
import Education from './components/education/Education'
import StudentOrganizations from './components/studentOrganization/StudentOrganizations'
import Projects from './components/project/Projects'
import Skills from './components/skills/Skills'


function App() {
    return (
        <>
            <Sidebar />

            <article>
                <Header />
                
                <Professions />
                <Education />
                <StudentOrganizations />
                <Projects />
                <Skills />

                <Footer />
            </article>
        </>
    )
}

export default App
