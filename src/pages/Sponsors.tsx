import "./Sponsors.css";
import Mc from '../assets/McD.png'
import ramp from '../assets/ramp.png'
import ismael from '../assets/ismael.jpeg'

export function Sponsors() {
    return (
        <div className="sponsors-page">
            <div className="sponsors-header">
                <h1>Our Sponsors</h1>
                <p>We are deeply grateful for the support of our generous sponsors.</p>
            </div>

            <section className="current-sponsors">
                <h2>Current Sponsors</h2>
                <div className="sponsor-logos">
                    {/* Replace with actual logos or names */}
                    <div className="sponsor"><img src={Mc}/><p>- Rose & Alexa -</p></div>
                    <div className="sponsor"><img src={ramp}/></div>
                    <div className="sponsor"><img src={ismael}/><p>- Ismael Diaz -</p></div>
                </div>
            </section>

            <section className="why-sponsor">
                <h2>Why Sponsor Us?</h2>
                <p>Sponsoring our robotics team offers great visibility, positive branding, and community engagement. Your support helps fuel future innovators and provides students with hands-on STEM experience.</p>
            </section>
            <h2>Sponsorship Tiers</h2>
            <section className="sponsorship-tiers">
                
                <div className="tier bronze">
                    <h3>Bronze<br/><span>Under $100</span></h3>
                    <ul>
                        <li>Name on “Thank You” section</li>
                        <li>Digital/Physical thank you note</li>
                    </ul>
                </div>
                <div className="tier silver">
                    <h3>Silver<br/><span>$100 - $300</span></h3>
                    <ul>
                        <li>Team shoutout video</li>
                        <li>Name on “Thank You” section</li>
                        <li>Digital/Physical thank you note</li>
                    </ul>
                </div>
                <div className="tier gold">
                    <h3>Gold<br/><span>$300 - $500</span></h3>
                    <ul>
                        <li>Public social media shoutout/thank you video</li>
                        <li>Small logo on banner/shirts</li>
                        <li>Team shoutout video</li>
                        <li>Name on “Thank You” section</li>
                        <li>Digital/Physical thank you note</li>
                    </ul>
                </div>
                <div className="tier diamond">
                    <h3>Diamond<br/><span>$500 - $1,000</span></h3>
                    <ul>
                        <li>Logo on team robots</li>
                        <li>Medium logo on banners/shirts</li>
                        <li>Team shoutout video</li>
                        <li>Name on “Thank You” section</li>
                        <li>Digital/Physical thank you note</li>
                    </ul>
                </div>
                <div className="tier platinum">
                    <h3>Platinum<br/><span>$1,000+</span></h3>
                    <ul>
                        <li>Custom “Thank You” plaque</li>
                        <li>Large logo on website/banners/shirts/robots</li>
                        <li>All previous benefits</li>
                    </ul>
                </div>
            </section>

            <section className="cta">
                <h2>Become a Sponsor</h2>
                <p>Support our team and help us build the future of robotics!</p>
                <a href="#"  className="sponsor-button">Download Sponsorship Info</a>
                {/* Replace with form link if needed */}
            </section>
        </div>
    );
}
