import type { FC } from 'react'
import './Skills.css'

interface SkillProps {
    name: string
}

const Skill: FC<SkillProps> = ({ name }) => {
    return (
        <div className='skill'>
            {name}
        </div>
    );
};

const Skills: FC = () => {
    const skills = ["Python", "JavaScript", "React", "Node.js", "Git", "Docker"]

    return (
        <section id="skills">
            <h1>Skills & Technologies</h1>
            <ul>
                {skills.map((skill) => (
                    <Skill name={skill}/>
                ))}
            </ul>
        </section>
    )
}

export default Skills