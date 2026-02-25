import React from 'react';
import './ContactCard.css';

import phoneIcon from '../../assets/icons/phone.svg';
import mailIcon from '../../assets/icons/mail.svg';

interface ContactCardProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContactCard: React.FC<ContactCardProps> = ({show, setShow}) => {
    if (!show)  return null;

    const closeLigthbox = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            e.stopPropagation();
            e.preventDefault();
            setShow(false);
        }
    };

    return (
        <div className='ligthbox' onClick={closeLigthbox}>
            <aside className="contact-card">
                <h2><span className='underlined'>Get in touch</span> with me!</h2>

                <ul className='no-list-style'>
                    <li>
                        <div className='hexagon'>
                            <img src={mailIcon} alt="mail icon" />
                        </div>
                        <a href="mailto:erikpersson0884@gmail.com">erikpersson0884@gmail.com</a>
                    </li>
                    <li>
                        <div className='hexagon'>
                            <img src={phoneIcon} alt="phone icon" />
                        </div>
                        
                        <a href="tel:0706649794">070 664 97 94</a>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default ContactCard;
