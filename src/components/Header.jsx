import { Link, NavLink } from 'react-router-dom';
import { useParams } from 'react-router';

export default function Header(){
    return (
        <ul>
            <li>
                <Link to="/" title="Home">Home</Link>
                <Link to="/about" title="About">About</Link>
                <Link to="/profile" title="Profile">Profile</Link>
                <Link to="/post/random" title="Post">Post</Link>
                <Link to="/contact" title="contact">Contact</Link>
                <Link to = "/newURL" title="newURL">Children</Link>
            </li>
            <li>
                <h3 className="param">Nested Routes</h3>
                <NavLink to="/fruits" activeClassName={'active'}>Fruits</NavLink>
                <NavLink to="/vegetables">Vegetables</NavLink>
            </li>
        </ul>
    );  
};

