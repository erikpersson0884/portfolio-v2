import type { FC } from 'react';
import ContentBlock from '../contentBlock/ContentBlock';
import projects from '../../data/projects.json';

interface ProjectProps {
    name: string;
    type: string;
    languages: string[];
    description: string[];
    link?: string;
}

const Project: FC<ProjectProps> = ({ name, type, languages, description, link }) => {
    return (
        <ContentBlock 
            header={`${name} - ${type}`}
            subheader={languages.join(' | ')}
            content={description}
        />
    );
}

const Projects = () => {
    return (
        <section>
            <h1 id={"projects"}>Projects</h1>

            {projects.map((project, index) => (
                <Project 
                    key={index}
                    name={project.name}
                    type={project.type}
                    languages={project.languages}
                    description={project.description}
                    link={project.link}
                />
            ))}
        </section>
    )
}

export default Projects