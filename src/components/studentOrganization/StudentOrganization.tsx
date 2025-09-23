import type { FC } from 'react';

interface StudentOrganizationProps {
    position: string;
    organization: string;
    year?: string;
    description: string[];
}

const StudentOrganization: FC<StudentOrganizationProps> = ({position, organization, year, description}) => {
    return (
        <div>
            <h1>{position} - {organization}</h1>
            <ul>
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
};

export default StudentOrganization;