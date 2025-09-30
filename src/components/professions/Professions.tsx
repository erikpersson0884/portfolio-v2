import type { FC } from 'react';
import ContentBlock from "../contentBlock/ContentBlock";
import professions from '../../data/professions.json';


interface ProfessionProps {
    position: string;
    company: string;
    employmentType?: string;
    year?: string;
    description: string[];
}

const Profession: FC<ProfessionProps> = ({position, company, employmentType, year, description}) => {
    return (
        <ContentBlock 
            header={`${position} - ${company}`}
            subheader={`${employmentType} ${year}`}
            content={description}
        />
    )
};

const Professions: FC = () => {
    return (
        <section>
            <h1 id={"professions"}>Professions</h1>

            {professions.map((job, index) => (
                <Profession 
                    key={index}
                    position={job.position}
                    company={job.company}
                    employmentType={job.employmentType}
                    year={job.year}
                    description={job.description}
                />
            ))}
        </section>
    )
}

export default Professions