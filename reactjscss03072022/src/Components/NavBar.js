import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav id="NavBar">
                    <Link to="/toSaturdaySection" className="item">SATURDAY</Link>
                    <Link to="/" className="itemHome"> </Link>
                    <Link to="/toSundaySection" className="item">SUNDAY</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar;