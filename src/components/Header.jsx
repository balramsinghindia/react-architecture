
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

export default function Header(){
    console.log(useParams);
    return (
        <ul>
            <li>
                <Link to="/" title="Home">Home</Link>
                <Link to="/about" title="About">About</Link>
                <Link to="/profile" title="Profile">Profile</Link>
                <Link to="/post/random" title="Post">Post</Link>
                <Link to="/contact" title="contact">Contact</Link>
            </li>
        </ul>
    );  
};

