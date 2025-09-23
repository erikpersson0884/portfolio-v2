import type { FC } from 'react'
import logo from '../../assets/logo.png'
import './Sidebar.css'


const Sidebar: FC = () => {
    return (
        <aside className="sidebar">
            <img src={logo} className="logo" alt="site logo" />

            <nav>
                <ul>
                    <li>Professions</li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar