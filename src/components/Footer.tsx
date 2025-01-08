import "./Footer.css"
import logo from "/Robojags Logo.png"
import vex from '/vexLogo.png'

export function Footer(){
    return(
        <div id='footer'>
            <div id='footer-logos'>
                <img src={logo} id='footer-logo'/>
                <p> 311 West Road, Houston, TX 77038
                </p>
            </div>
            <div id='nav-links'>
                <ul>
                    <li>Contact</li>
                    <li>Gallery</li>
                    <li>About</li>
                    <li>Sponsors</li>
                </ul>
            </div>
            <div id='team-links'>
                <ul>
                    <li>Teams</li>
                    <li>77038V</li>
                    <li>77038J</li>
                    <li>70738A</li>
                    <li>70738D</li>
                    <li>70738J</li>
                    <li>70738V</li>
                </ul>
            </div>
            <div id='vex-logo-container'>
                <img id='vex-logo' src={vex}/>

            </div>
            
        </div>
    )
}