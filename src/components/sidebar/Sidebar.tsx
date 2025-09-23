import type { FC } from 'react'
import logo from '../../assets/logo.png'
import './Sidebar.css'

import gmail from '../../assets/icons/gmail.svg'
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'

const Sidebar: FC = () => {

    const links: { name: string, url: string }[] = [
        { name: 'Professions', url: '#professions' },
        { name: 'Projects', url: '#projects' },
        { name: 'Involvements', url: '#student-organizations' },
        { name: 'Education', url: '#education' },
        { name: 'Certificates', url: '#certificates' },
        { name: 'Contact', url: '#footer' },
    ]

    return (
        <aside className="sidebar">
            <img src={logo} className="logo" alt="site logo" />

            <nav>
                <ul className='table-of-contents'>
                    {links.map((link) => (
                        <li key={link.name}>
                            <a href={link.url}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            <ul className='socials'>
                <li>
                    <a href="mailto:erikpersson0884@gmail.com" target="_blank" rel="noreferrer">
                        <img src={gmail} className="icon" alt="gmail icon" />
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/erikpersson0884" target="_blank" rel="noreferrer">
                        <img src={linkedin} className="icon" alt="linkedin icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/erikpersson0884" target="_blank" rel="noreferrer">
                        <img src={github} className="icon" alt="github icon" />
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar