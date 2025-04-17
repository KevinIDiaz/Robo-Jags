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
                        { name: "Voltage", number: "77038V", insta:"https://www.instagram.com/77038_voltage?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="},
                        { name: "Nova", number: "70738A" , insta: 'https://www.instagram.com/_nova_70738_a?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='},
                        { name: "RoboDuckz", number: "77038J", insta:"https://www.instagram.com/roboduckz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                        { number: "77038D" , insta:"https://www.instagram.com/blansonrobotics?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="},
                        { number: "70738J" , insta:'https://www.instagram.com/blansonrobotics?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='},
                        { number: "70738V", insta:"https://www.instagram.com/robojags_70738v?igsh=ejdhc2RmZXppbjFx" }
                    ].map((team, index) => (
                        <div key={index} className="team-card">
                            <img src={`/Robo-Jags/${team.number}.jpg`} alt={`Team ${team.number}`} className="team-img"/>
                            <h3>{team.name ? `${team.name} (${team.number})` : team.number}</h3>
                                <a target="blank" href={team.insta}><button className="button">LEARN MORE</button></a>
                        
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    );
}
