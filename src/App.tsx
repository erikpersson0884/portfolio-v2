import './App.css'

import Header from './layout/header/Header'

import Sidebar from './components/sidebar/Sidebar'

import Professions from './components/profession/Professions'
import Projects from './components/project/Projects'
import StudentOrganizations from './components/studentOrganization/StudentOrganizations'


function App() {
    return (
        <>
            <Header />
            <Sidebar />

            <article>  
                <Professions />
                <Projects />
                 <StudentOrganizations />
            </article>
        </>
    )
}

export default App
