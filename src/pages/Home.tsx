import "./Home.css"
import video from "/roboJagBannerTest.mp4"
import team from '/teamSymbol.svg'
import award from '/awardSymbol.svg'
import { Link } from "react-router-dom";
import group from '../assets/groupPic.jpeg'
import Mc from '../assets/McD.png'
import ramp from '../assets/ramp.png'
import ismael from '../assets/ismael.jpeg'


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export function Home(){
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1367 },
          items: 3,
          partialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 1366, min: 501 },
          items: 2,
          partialVisibilityGutter: 30
        },
        mobile: {
          breakpoint: { max: 575, min: 0 },
          items: 1,
          partialVisibilityGutter: 30
        }
      };
      
    return(
        <div >
            <div id='banner'>
                <div id='video-container'>
                    <video id='video' src={video} muted loop autoPlay></video>
                </div>
                <div id='overlay'>
                    <h1>ROBO JAGS</h1>
                    <Link to='/Sponsors'><button className='button'>SUPPORT OUR TEAMS!</button></Link>
                </div>
            </div>
            
            <div id='intro'>
                <h2>HELLO!</h2>
                <div id='group-container'><img id='group-pic'src={group} alt="Group Picture"/></div>
                
                <p>At Blanson CTE High School, our robotics club is more than just building robots – it's about crafting future innovators, problem-solvers, and leaders. Comprised of six competitive VEX teams, we work together to design, build, and program robots that push the boundaries of creativity and engineering. With a passion for technology and a drive for excellence, our teams compete at local, regional, and national levels, consistently aiming for the highest performance. Whether we’re brainstorming new strategies, troubleshooting robot designs, or celebrating victories, every moment reflects our dedication to learning, collaboration, and growth. We believe that through robotics, we not only shape the future of technology but also build friendships and skills that last a lifetime.</p>
                <Link to='/About'><button className='button'>LEARN MORE!</button></Link>            
            </div>
            <div id='highlights'>
                <h2>HIGHLIGHTS</h2>
                <div id='achievements'>
                    <div className='data'>
                        <img className='symbol' src={team}/>
                        <h3>6 TEAMS</h3>
                        <p>77038V<br/>77038J<br/>77038D<br/>70738A<br/>70738J<br/>70738V</p>
                    </div>
                    <div className='data'>
                        <img className='symbol' src={award}/>
                        <h3>9 AWARDS</h3>
                        <p>Including:<br/>Create Award<br/>Think Award<br/>Judges Awards<br/>Skills Champion</p>
                    </div>
                </div>

            </div>
            <div id='sponsors'>
                <h2>SPONSORS</h2>
                <h3>Thank You!!!</h3>
                <Carousel 
                containerClass="carousel-container" 
                responsive={responsive} 
                infinite={true} 
                autoPlay={true} 
                showDots={true} 
                centerMode={ false}
                pauseOnHover={true}
                renderButtonGroupOutside={true}
                focusOnSelect={true}
                >
                    <div className="card"><a target="blank" href='https://maps.app.goo.gl/P9mcbExTV5oaYYFu7'><img src={Mc}/></a><p>- Rosa and Alexa -</p></div>
                    <div className="card"><a target="blank" href='https://www.instagram.com/ramp_upmobiledieselrepair?igsh=a21tazM0dDdkMWZu'><img src={ramp}/></a></div>
                    <div className="card"><a target="blank" href='https://www.linkedin.com/in/ismael-diaz-52a4ab30b/'><img src={ismael}/></a><p>- Ismael Diaz -</p></div>
                   </Carousel>
            </div>
        </div>
    )
}