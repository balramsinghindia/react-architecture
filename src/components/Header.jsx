
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <ul>
            <li>
                <Link to="/" title="Home">Home</Link>
                <Link to="/about" title="About">About</Link>
                <Link to="/profile" title="Profile">Profile</Link>
                <Link to="/post/random" title="Post">Post</Link>
                <Link to="/carousel" title="Carousel">Carousel</Link>
                <Link to="/form" title="Form">Form</Link>
            </li>
        </ul>
    );  
};

