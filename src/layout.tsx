import { Navigation } from "./components/Navigation"
import {Footer} from "./components/Footer"
import { Outlet } from "react-router-dom"
import "./layout.css"
export function Layout(){
    return(
        <div id='container'>
        <Navigation/>
        <main id='content'>
            <Outlet/>
        </main>
        <Footer/>
        </div>
        
    )
}