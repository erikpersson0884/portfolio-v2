import type { FC } from 'react';

interface ProfessionProps {
    position: string;
    company: string;
    employmentType?: string;
    year?: string;
    description: string[];
}

const Profession: FC<ProfessionProps> = ({position, company, employmentType, year, description}) => {
    return (
        <div>
            <h1>{position} - {company}</h1>
            <h2>{employmentType} {year}</h2>
            <ul>
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
};

export default Profession;