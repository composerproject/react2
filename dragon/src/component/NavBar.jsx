import {NavLink} from "react-router-dom";

const checkIsActive = ({isActive}) => {
    return isActive ? {
        color: 'orange'
    } : {}
}
const NavBar = () => {
    return (
        <nav style={{display: "flex", gap: '15px'}}>
            <NavLink style={checkIsActive} to={'/'}>Dragons</NavLink>
            <NavLink style={checkIsActive} to={'/knights'}>Chevaliers</NavLink>
        </nav>
    );
};

export default NavBar;