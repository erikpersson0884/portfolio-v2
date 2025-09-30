import './App.css'

import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'

import Sidebar from './components/sidebar/Sidebar'

import Professions from './components/professions/Professions'
import Education from './components/education/Education'
import StudentOrganizations from './components/studentOrganization/StudentOrganizations'
import Projects from './components/project/Projects'


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

                <Footer />
            </article>
        </>
    )
}

export default App
