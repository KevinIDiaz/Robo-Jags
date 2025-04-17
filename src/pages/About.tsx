import "./About.css";
import { Link } from "react-router-dom";
import video from '/robotics vid.mp4';

export function About() {
    return (
        <div>
            <div id="about-banner">
                <h1>ABOUT US</h1>
            </div>
            <hr/>
            <div id='vid-intro'>
            <video controls width="100%">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            </div>

            <div id="our-story">
                <h2>OUR STORY</h2>
                <p>
                    Founded at Blanson CTE High School, our robotics club has grown from a small group of passionate students into a powerhouse of innovation. 
                    Over the years, we've achieved key milestones, winning competitions and fostering a culture of learning, creativity, and perseverance.
                </p>
            </div>

            <div id="our-mission">
                <h2>OUR MISSION</h2>
                <p>
                    Our mission is to inspire and educate students through STEM, teamwork, and hands-on experience in engineering and programming. 
                    We strive to create an environment where students can push their boundaries, develop professional skills, and prepare for future careers in technology.
                </p>
            </div>

            <div id="meet-teams">
                <h2>MEET THE TEAMS</h2>
                <div id="teams-container">
                    {[
                        { name: "Voltage", number: "77038V" },
                        { name: "Nova", number: "70738A" },
                        { name: "RoboDuckz", number: "77038J" },
                        { number: "77038D" },
                        { number: "70738J" },
                        { number: "70738V" }
                    ].map((team, index) => (
                        <div key={index} className="team-card">
                            <img src={`/Robo-Jags/${team.number}.jpg`} alt={`Team ${team.number}`} className="team-img"/>
                            <h3>{team.name ? `${team.name} (${team.number})` : team.number}</h3>
                            <Link to={`/teams/${team.number}`}>
                                <button className="button">LEARN MORE</button>
                            </Link>
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    );
}
