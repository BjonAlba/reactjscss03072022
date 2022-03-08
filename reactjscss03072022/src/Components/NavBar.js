import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav id="NavBar">
                    <Link to="/reactjscss03072022/toSaturdaySection" className="item">SATURDAY</Link>
                    <Link to="/reactjscss03072022" className="itemHome"> </Link>
                    <Link to="/reactjscss03072022/toSundaySection" className="item">SUNDAY</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar;