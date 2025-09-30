import type { FC } from 'react';
import ContentBlock from '../contentBlock/ContentBlock';
import studentOrganizations from '../../data/studentOrganizations.json';


interface StudentOrganizationProps {
    position: string;
    organization: string;
    year?: string;
    description: string[];
}

const StudentOrganization: FC<StudentOrganizationProps> = ({position, organization, year, description}) => {
    return (
        <ContentBlock
            header={`${position} - ${organization}`}
            subheader={year}
            content={description}
        />
    )
};

const StudentOrganizations: FC = () => {
    return (
        <section>
            <h1 id={"involvments"}>Student Organizations</h1>

            {studentOrganizations.map((org, index) => (
                <StudentOrganization
                    key={index}
                    position={org.position}
                    organization={org.organization}
                    year={org.year}
                    description={org.description}
                />
            ))}
        </section>
    )
};

export default StudentOrganizations;