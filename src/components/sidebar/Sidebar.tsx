import type { FC } from 'react'
import logo from '@/assets/logo.png'
import './Sidebar.css'

import { GitHubLogo, LinkedInLogo, GmailLogo } from '@/components/socialLogo/SocialLogos'

interface SidebarProps {
    showContactCard: () => void;
}

const Sidebar: FC<SidebarProps> = ({showContactCard}) => {


    return (
        <aside className="sidebar">
            <a href="/">
                <img src={logo} className="site-logo" alt="site logo" />
            </a>
            
            <p onClick={showContactCard} className='link-underline'>Contact</p>

            <ul className='socials no-list-style'>
                <li>{GmailLogo}</li>
                <li>{LinkedInLogo}</li>
                <li>{GitHubLogo}</li>
            </ul>
        </aside>
    )
}

export default Sidebar