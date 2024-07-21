import { Outlet } from "react-router-dom"
import Navigation from "../components/Nagivation"

function Main() {
    return (
        <>
        <Navigation/>
        <section className="white-info-container">
            <Outlet/>
        </section>
        
        </>
    )
}
export default Main