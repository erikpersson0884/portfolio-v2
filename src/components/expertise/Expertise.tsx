import React from "react";
import "./Expertise.css";
import codeIcon from "../../assets/icons/code.svg";
import fullstackIcon from "../../assets/icons/fullstack.svg";
import uxIcon from "../../assets/icons/ux.svg";


export const Expertise: React.FC = () => {

    interface ExpertiseItem {
        title: string;
        icon: string;
        description: string;
    }
    const ExpertiseBlock: React.FC<ExpertiseItem> = ({title, icon, description}) => {
        return (
            <li className="expertise-block">
                <header>
                    <h3>{title}</h3>
                    <div className="expertise-icon">
                        <img src={icon} alt={`${title} icon`} />
                    </div>
                </header>
                
                <p>{description}</p>
            </li>
        );
    }

    return (
        <section className="expertise">
            <h1>Professional Expertise</h1>
            <hr />
            <ul className="no-list-style">
                <ExpertiseBlock
                    title="Software Engineering"
                    icon={codeIcon}
                    description="Experienced in developing scalable and efficient software solutions using modern programming languages and frameworks."
                />
                <ExpertiseBlock
                    title="Fullstack Development"
                    icon={fullstackIcon}
                    description="Proficient in both frontend and backend development, creating seamless user experiences and robust server-side applications."
                />
                <ExpertiseBlock
                    title="UX/UI Design"
                    icon={uxIcon}
                    description="Focusing on usability, user-centered design, and intuitive software experiences."
                />
            </ul>
            
        </section>
    );
}

export default Expertise;