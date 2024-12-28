import Logo from "./Logo";
import Movie from '../features/navbar/Movie';
import TvShows from '../features/navbar/TvShows';
import People from '../features/navbar/People';
import More from '../features/navbar/More';

import Login from "../features/navbar/Login";

export default function Menu() {
    return (
        <div className="menu">
            <ul className="menuLeft">
                <Logo />
                <Movie />
                <TvShows />
                <People />
                <More />
            </ul>  
            <ul className="menuRight" style={{listStyle:'none'}}>
                <Login />
            </ul>
        </div>
    )
}
