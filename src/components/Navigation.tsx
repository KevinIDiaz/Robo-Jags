import { Link } from "react-router-dom";
import "./Navigation.css"
import logo from "/Robojags Logo.png"
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'

export function Navigation(){
    return(
        <>
        <div id='navbar'>
       
           <button >CONTACT</button>
           <button>GALLERY</button>
            <Link to="/"><img id='logo' src={logo}/></Link>
       
            <Link to="/About"><button>ABOUT</button></Link>
            <button className='emphasize'>SPONSORS</button>
            <img onClick={showSide} id='menu'src={menu}/>
        
        </div>
        <div id='side'>
            <img onClick={hideSide} id='close' src={close}/>
            <button >CONTACT</button>
           <button>GALLERY</button>
            <Link to="/About"><button>ABOUT</button></Link>
            <button className='emphasize'>SPONSORS</button>
        </div>
        </>
    )
    
}
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    const navbar = document.getElementById("navbar");
    const logo = document.getElementById("logo");
    if (!navbar || !logo) return; // Exit function if navbar or logo is null
    if (window.scrollY > 40) {  // 'scrollY' is more reliable than 'scrollTop'
        navbar.style.backgroundColor = "#011638";
        navbar.style.height = '13%';
        logo.style.height = '90px';
       
    } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.height = '20%';
        logo.style.height = '150px';
        
    }
   
    }
    
    function showSide(){
        const side = document.getElementById('side');
        if (!side) return;
        side.style.transform='translateX(0%)';
    }
    
    function hideSide(){
        const side = document.getElementById('side');
        if (!side) return;
        side.style.transform='translateX(100%)';
        
    }