import React from 'react';
import './ProjectPage.css';

interface ProjectPageProps {
    children?: React.ReactNode;
    className?: string;
}


export const ProjectPage: React.FC<ProjectPageProps> = ({children, className}) => {
    return (
        <article className={`project-page `+ (className || '')}>
            {children}
        </article>
    );
};

export default ProjectPage;