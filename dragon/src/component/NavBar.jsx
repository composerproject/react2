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
            <NavLink style={checkIsActive} to={'/couples'}>Paires</NavLink>
        </nav>
    );
};

export default NavBar;