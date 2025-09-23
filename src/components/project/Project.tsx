import type { FC } from "react";

interface ProjectProps {
    name: string;
    type: string;
    languages: string[];
    description: string[];
    link?: string;
}

const Project: FC<ProjectProps> = ({ name, type, languages, description, link }) => {
    return (
        <div className="project">
            <h1>{name} - {type}</h1>
            <h2>
                {languages.map((language, idx) => (
                    <span key={language} className="language">
                        {language}
                        {idx < languages.length - 1 && " | "}
                    </span>
                ))}
            </h2>
            <ul>
                {description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                ))}
            </ul>
        </div>
    );
};

export default Project;