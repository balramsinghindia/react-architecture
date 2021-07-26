
import { Link } from 'react-router-dom';

export function Footer({copyrightText}){
    return (
        <>
            <h3>{copyrightText}</h3>
            <ul>
                <li>
                    <Link to="/" title="Home">Home</Link>
                    <Link to="/about" title="About">About</Link>
                    <Link to="/profile" title="Profile">Profile</Link>
                    <Link to="/post" title="Post">Post</Link>
                    <Link to="/carousel" title="Carousel">Carousel</Link>
                </li>
            </ul>
        </>
    );  
};

