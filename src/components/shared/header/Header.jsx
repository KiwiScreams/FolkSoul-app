import { NavLink } from "react-router-dom"
import FolkSoul_logo from "../../../assets/images/Logo.svg"
import FolkSoul_logotext from "../../../assets/images/FolkSoul.svg"
function Header() {
    return (
        <>
            <header>
                <nav className="flex">
                    <NavLink to="/">
                        <div className="navigation">
                            <img src={FolkSoul_logo} alt="FolkSoul logo" />
                            <img src={FolkSoul_logotext} alt="FolkSoul logotext" />
                        </div>
                    </NavLink>
                    <NavLink to="/login" className="white-text btn text">შესვლა</NavLink>
                </nav>
            </header >
        </>
    )
}
export default Header