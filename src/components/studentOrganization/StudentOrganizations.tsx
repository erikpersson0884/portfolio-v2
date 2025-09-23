import StudentOrganization from "./StudentOrganization";

const StudentOrganizations = () => {
    return (
        <section>
            <h2>Student Organization Contributions</h2>

            <StudentOrganization 
                position="Board Member" 
                organization="IT Student Division" 
                year="2023"
                description={[
                "Managed internal and external communications to enhance engagement within the student community.", 
                "Coordinated events and initiatives to promote collaboration and professional development among members.", 
                "Played an active role in strategic decision-making and improving the division's outreach and operations"
                ]}
            />

            <StudentOrganization 
                position="Division Auditor" 
                organization="IT Student Division" 
                year="2023 & 2023"
                description={[
                "Oversaw and audited the division's operations and financial management to ensure compliance and transparency",
                "Provided constructive feedback and recommendations to improve organizational processes"
                ]}
            />

            <StudentOrganization 
                position="Treasurer" 
                organization="Chalmers IT Student Association" 
                year="2024 & 2025"
                description={[
                "Managed the organization’s budget, tracking income and expenses",
                "Oversaw financial transactions and maintained accurate records",
                "Prepared financial reports for committee meetings and annual reviews",
                "Assisted in planning events with budget considerations",
                "Ensured compliance with financial policies and procedures"
                ]}
            />
        </section>
    )
};

export default StudentOrganizations;