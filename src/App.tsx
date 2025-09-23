import './App.css'
import Sidebar from './components/sidebar/Sidebar'

import erik from './assets/erik.jpg'

function App() {
    return (
        <>
            <article>
                <header>
                    <img src={erik} className="logo" alt="Vite logo" />
                    <h1>Erik Persson</h1>
                    <h2>Software engineering students</h2>
                </header>                    
            </article>

            <Sidebar />
        </>
    )
}

export default App
