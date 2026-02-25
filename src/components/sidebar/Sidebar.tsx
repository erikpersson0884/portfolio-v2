import type { FC } from 'react'
import logo from '../../assets/logo.png'
import './Sidebar.css'

import gmail from '../../assets/icons/gmail.svg'
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'

const Sidebar: FC = () => {

    const socials: { name: string, url: string, image: string }[] = [
        { name: 'Gmail', url: 'mailto:erikpersson0884@gmail.com', image: gmail },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/erikpersson0884', image: linkedin },
        { name: 'GitHub', url: 'https://github.com/erikpersson0884', image: github },
    ]

    return (
        <aside className="sidebar">
            <a href="/">
                <img src={logo} className="logo" alt="site logo" />
            </a>
            
            <p className='link-underline'>Contact</p>

            <ul className='socials no-list-style'>
                {socials.map((social) => (
                    <li key={social.name}>
                        <a className='no-link-style link-underline' href={social.url} target="_blank" rel="noreferrer">
                            <img src={social.image} className="social-icon" alt={`${social.name} icon`} />
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar