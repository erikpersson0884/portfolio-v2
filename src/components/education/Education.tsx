import type { FC } from 'react';
import ContentBlock from "../contentBlock/ContentBlock";
import education from '../../data/education.json';

interface EducationProps {
    degree: string;
    institution: string;
    division: string;
    location: string;
}

const EducationItem: FC<EducationProps> = ({degree, institution, division, location}) => {
    return (
        <ContentBlock
            header={`${degree} - ${division}`}
            subheader={`${institution} | ${location}`}
            content={[]}
        />
    )
}

const Education: FC = () => {
    return (
        <section>
            <h1 id={"education"}>Education</h1>
            {education.map((edu, index) => (
                <EducationItem
                    key={index}
                    degree={edu.degree}
                    institution={edu.institution}
                    division={edu.division}
                    location={edu.location}
                />
            ))}
        </section>
    )
}

export default Education