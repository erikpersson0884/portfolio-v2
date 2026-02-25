import type { FC } from 'react';
import './Skills.css';

interface SkillProps {
    name: string;
    logo?: string;
}

const Skill: FC<SkillProps> = ({ name, logo }) => {
    return (
        <li className="skill hexagon">
            <div className="skill-inner">

                {/* FRONT */}
                <div className="skill-front">
                    {logo ? <img src={logo} alt={name} /> : <span>{name}</span>}
                </div>

                {/* BACK */}
                <div className="skill-back">
                    <span>{name}</span>
                </div>

            </div>
        </li>
    );
};

const Skills: FC = () => {
    const skills = [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    ];
    const skills2 = [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    ];

    return (
        <section id="skills">
            <h1>Skills & Technologies</h1>
            <ul>
                {skills.map(skill => <Skill key={skill.name} {...skill} />)}
            </ul>
             <ul className='second-row'>
                {skills2.map(skill => <Skill key={skill.name} {...skill} />)}
            </ul>
        </section>
    );
};

export default Skills;