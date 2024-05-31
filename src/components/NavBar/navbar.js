import React, {useState} from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';
import close from '../../assets/close.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [Smenu, setSmenu] = useState(false);
    return (
        <nav className="navbar">
            <img src= {logo} alt="" className="logo"/>
            <div className="desktopMenu">
                <Link activeClass='active' offset={-100} smooth={true} spy={true} duration={100} to='intro'className="desktopMenuList">Home</Link>
                <Link activeClass='active' offset={-50} smooth={true} spy={true} duration={100} to='about'className="desktopMenuList">About</Link>
                <Link activeClass='active' offset={-50} smooth={true} spy={true} duration={100} to='projects'className="desktopMenuList">Projects</Link>
                <Link activeClass='active' offset={-80} smooth={true} spy={true} duration={100} to='rtPage'className="desktopMenuList">Resume</Link>
                <Link activeClass='active' offset={-50} smooth={true} spy={true} duration={100} to='ctPage'className="desktopMenuList">Contact</Link>
            </div>
            
            <img src= {Smenu? close:menu }onClick={()=>setSmenu(!Smenu)} className="menupic"/>
            <div className="PhMenu" style={{display: Smenu? 'flex':'none'}}>
                <Link activeClass='active' offset={-100} smooth={true} spy={true} duration={100} to='intro'className="MenuList" onClick={()=>setSmenu(false)}>Home</Link>
                <Link activeClass='active' offset={-50} smooth={true} spy={true} duration={100} to='about'className="MenuList" onClick={()=>setSmenu(false)}>About</Link>
                <Link activeClass='active' offset={-50} smooth={true} spy={true} duration={100} to='projects'className="MenuList" onClick={()=>setSmenu(false)}>Projects</Link>
                <Link activeClass='active' offset={-80} smooth={true} spy={true} duration={100} to='rtPage'className="MenuList" onClick={()=>setSmenu(false)}>Resume</Link>
                <Link activeClass='active' offset={-50} smooth={true} spy={true} duration={100} to='ctPage'className="MenuList" onClick={()=>setSmenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar