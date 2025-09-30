import type { FC } from 'react'
import ContentBlock from '../contentBlock/ContentBlock'
import skills from '../../data/skills.json'

interface SkillProps {
    category: string
    items: string[]
}

const Skill: FC<SkillProps> = ({ category, items }) => {
    return (
        <ContentBlock 
            header={category}
            subheader={items.join(' | ')}
        />
    );
};

const Skills: FC = () => {
    return (
        <section id="skills">
            <h1>Skills & Technologies</h1>
            {skills.map((skill) => (
                <Skill 
                    key={skill.category}
                    category={skill.category}
                    items={skill.items}
                />
            ))}
        </section>
    )
}

export default Skills