import React from 'react';
import ProjectPage from '../projectPage/ProjectPage';
import screenITimage from '@/assets/screenit.png';
import screenITdeployedImage from '@/assets/screenit-deployed.png';

const Screenit: React.FC = () => {
    return (
        <ProjectPage>
            <header>
                <div>
                    <h1>Screenit</h1>
                    <h2>Digital event board</h2>
                    <p>
                        ScreenIT is a digital announcement board for event posters. It allows uploading, browsing, and displaying posters in a carousel format. The idea emerged in spring 2023 when traditional channels (physical boards + digital feeds) failed to surface event information effectively.
                    </p>

                    <div className='info-box'>
                        <p>Team:</p> 
                        <ul>
                            <li><p>Erik Persson</p></li>
                        </ul>
                    </div>

                    <div className='info-box'>
                        <p>Year:</p> <p>2024</p>
                    </div>

                    <ul className='languages'>
                        <li className='language'><p>HTML</p></li>
                        <li className='language'><p>CSS</p></li>
                        <li className='language'><p>JavaScript</p></li>
                        <li className='language'><p>Node</p></li>
                        <li className='language'><p>Express</p></li>
                    </ul>
                </div>
                <img src={screenITimage} height={350} alt="ScreenIT running on a laptop" />
            </header>

            <section>
                <h2>The Problem</h2>
                <p>Students and staff frequently missed events because physical boards were cluttered and email notifications were ignored. Coordinators struggled to get visibility, leading to low attendance and engagement.</p>
            </section>

            <section>
                <h2>Understanding Users</h2>
                <p>By interviewing event coordinators, I discovered that most preferred a quick upload workflow and wanted automated poster display. These insights shaped the key features of ScreenIT, ensuring it solved real user problems.</p>
            </section>

            <section>
                <h2>MVP</h2>

                <ul>
                    <li>Upload page: Allows coordinators to quickly share posters without navigating complex tools.</li>
                    <li>Gallery page: Ensures attendees can easily browse and discover events.</li>
                </ul>
            </section>

            <section className='with-image'>
                <div>
                    <h2>Deployment</h2>

                    <p>ScreenIT was installed on the main lunchroom screen, allowing real-world testing. Initial feedback showed attendees quickly discovering events they would have otherwise missed.</p>
                </div>
                <img src={screenITdeployedImage} alt="ScreenIT digital event board deployed in the main lunchroom showing carousel of event posters" />
            </section>

            <section> 
                <h2>Additional Features</h2>
                <ul>
                    <li>Admin panel: Manage user accounts and permissions efficiently.</li>
                    <li>Event dashboard: Keep track of upcoming posters and deadlines.</li>
                    <li>Poster deletion: Automatically remove outdated content to keep the board current.</li>
                    <li>Head admin tools for user privileges</li>
                </ul>
            </section>

            <section>
                <h2>Impact / Results</h2>
                <p>ScreenIT successfully surfaced event information, leading to increased attendance and engagement. It provided a centralized platform for event promotion, improving communication and fostering a stronger sense of community.</p>
                <p>The response was immediately positive. Many people reported discovering events they would have otherwise missed.</p>
                <p>After initial success, the setup was expanded to a new screen powered by a Raspberry Pi 5 for better visibility.</p>
            </section>

            <section>
                <h2>Reflection</h2>
                <p>
                    This project reinforced the value of user-centered design and rapid iteration. In future iterations, I plan to integrate ScreenIT with the IT division website to automate poster updates and explore analytics to track engagement trends.
                </p>
            </section>
        </ProjectPage>
    )
}

export default Screenit;
