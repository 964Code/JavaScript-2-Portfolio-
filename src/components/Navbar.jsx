import React from 'react';
import './Navbar.css';
import { GiHamburgerMenu, GiClownfish } from 'react-icons/gi';
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiFillHome,
  AiOutlineCloseCircle,
} from 'react-icons/ai';
import { HiAcademicCap, HiTemplate } from 'react-icons/hi';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { useState, useEffect, useRef } from 'react';
import BaldIcon from '../resources/baldIconTest.svg';

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
    let handeler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };
    document.addEventListener('mousedown', handeler);
    return () => {
      document.removeEventListener('mousedown', handeler);
    };
  });
  /* Note that function to toggle navbar when pressing the menu needs to be fixed. Does not stay hidden when pressing again if menu is open. Click has to be outside of menu or hamburger menu */
  return (
    <>
      <nav className='nav-container'>
        <div className='brand-icon-container'>
          <img src={BaldIcon} alt='Brand Icon' className='brand-icon' />
          {/* <GiClownfish className='brand-icon' /> */}
        </div>

        <div className='current-page-container'>
          <span>Current Page</span>
        </div>
        <div className='menu-icon-container'>
          <span
            ref={menuRef}
            className='hamburger-wrapper'
            onClick={handleToggle}
          >
            <GiHamburgerMenu
              className={`hamburger-menu ${toggle ? 'active' : ''}`}
            />
          </span>
          <span>
            <AiOutlineCloseCircle
              className={`close-menu ${toggle ? '' : 'active'}`}
            />
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
