import Project from './Project'

const Projects = () => {
    return (
        <section>
            <h1 id={"projects"}>Projects</h1>

            <Project 
                name="vevIT" 
                type="Booking system"
                languages={["React", "Vite", "Node.js", "Express", "TypeScript", "Prisma"]}
                description={[
                "A web application for Chalmers students to reserve 'vevs' and view existing bookings",
                "Initially created as a lighthearted project, later developed into a functional system",
                "Showcases practical web development and user interaction design"
                ]}
                link="https://github.com/cthit/vevit-v3"
            />

            <Project 
                name="ScreenIT" 
                type="Digital Event Dashboard"
                languages={["React", "Vite", "Node.js", "Express"]}
                description={[
                "An online platform allowing students and organizations to upload event posters",
                "Displays posters on a digital noticeboard, enhancing campus communication",
                "Improves visibility of student events across the university"
                ]}
            />
        </section>
    )
}

export default Projects