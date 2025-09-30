import './App.css'

import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'

import Sidebar from './components/sidebar/Sidebar'

import Professions from './components/profession/Professions'
import Projects from './components/project/Projects'
import StudentOrganizations from './components/studentOrganization/StudentOrganizations'


function App() {
    return (
        <>
            <Sidebar />

            <article>
                <Header />

                <h1 id={"professions"}>Professions</h1>
                <Professions />

                <h1 id={"projects"}>Projects</h1>
                <Projects />

                <h1 id={"studentOrganizations"}>Student Organizations</h1>
                <StudentOrganizations />

                <Footer />
            </article>
        </>
    )
}

export default App
