import { NavLink } from "react-router-dom"
import home_icon from "../assets/images/Home Icon.svg"
import group_members_icon from "../assets/images/Member Icon.svg"
import social_icon from "../assets/images/Youtube.svg"
import group_about_icon from "../assets/images/Musical Key.svg"
import logout_icon from "../assets/images/Door Icon.svg"
function Navigation()
{
    return(
        <>
        <nav className="main-navigation">
            <ul>
                <NavLink to="mtavari" className={({ isActive }) => (isActive ? "active-nav" : "")}>
                    <img src={home_icon}/>მთავარი</NavLink>
                <NavLink to="group-members" className={({ isActive }) => (isActive ? "active-nav" : "")}>
                    <img src={group_members_icon}/>ჯგუფის წევრები</NavLink>
                <NavLink to="social" className={({ isActive }) => (isActive ? "active-nav" : "")}>
                    <img src={social_icon}/>სოციალური ბმულები</NavLink>
                <NavLink to="group-about" className={({ isActive }) => (isActive ? "active-nav" : "")}>
                    <img src={group_about_icon}/>გუნდის შესახებ</NavLink>
                <NavLink to="/"><img src={logout_icon}/>გადი გარეთ</NavLink>
            </ul>
        </nav>
        </>
    )
}
export default Navigation