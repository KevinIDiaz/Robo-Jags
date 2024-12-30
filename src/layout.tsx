import { Navigation } from "./components/Navigation"
import { Outlet } from "react-router-dom"
export function Layout(){
    return(
        <>
        <Navigation/>
        <main>
            <Outlet/>
        </main>
        </>
    )
}