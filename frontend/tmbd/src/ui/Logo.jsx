import { NavLink } from "react-router-dom";


function Logo() {
    return (
        <NavLink style={{textDecoration:'none'}}>
            <h2 className='img_heading'>TMBD</h2>
        </NavLink>
    );
}

export default Logo;
