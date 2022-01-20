import React from 'react';
import './Navbar.css';
import { GiHamburgerMenu, GiClownfish } from 'react-icons/gi';
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiFillHome,
} from 'react-icons/ai';
import { HiAcademicCap, HiTemplate } from 'react-icons/hi';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { useState, useEffect, useRef } from 'react';

function Navbar() {
  /* Toggle menu */
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  /* Close menu if pressing outside menu */
  /* Possible to create cutsom Hook and import this function from outside to lessen te amount of code shown in the Nav component? */
  let menuRef = useRef();
  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      if (!menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    });
  });
  /* Note that function to toggle navbar when pressing the menu needs to be fixed. Does not stay hidden when pressing again if menu is open. Click has to be outside of menu or hamburger menu */
  return (
    <>
      <nav className='nav-container'>
        <div className='brand-icon-container'>
          <GiClownfish className='brand-icon' />
        </div>

        <div className='current-page-container'>
          <span>Current Page</span>
        </div>
        <div className='menu-icon-container'>
          <span className='hamburger-wrapper' onClick={handleToggle}>
            <GiHamburgerMenu className='hamburger-menu' />
          </span>
        </div>
      </nav>
      <div ref={menuRef} className={`sidebar-menu ${toggle ? 'active' : ''}`}>
        <a href='#' className='link'>
          <span>
            <AiFillHome className='link-icon' />
          </span>
          Home
        </a>
        <a href='#' className='link'>
          <span>
            <HiAcademicCap className='link-icon' />
          </span>
          Skills
        </a>
        <a href='#' className='link'>
          <span>
            <HiTemplate className='link-icon' />
          </span>
          Projects
        </a>
        <a href='#' className='link'>
          <span>
            <BsFillPersonFill className='link-icon' />
          </span>
          About
        </a>
        <a href='#' className='link'>
          <span>
            <MdOutlineConnectWithoutContact className='link-icon' />
          </span>
          Contact
        </a>
        <div className='sidebar-menu-icons'>
          <AiFillTwitterCircle className='menu-icon' />
          <AiFillGithub className='menu-icon' />
          <AiFillLinkedin className='menu-icon' />
        </div>
      </div>
    </>
  );
}

export default Navbar;
