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

function Navbar() {
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
          <span className='hamburger-wrapper'>
            <GiHamburgerMenu className='hamburger-menu' />
          </span>
        </div>
      </nav>
      <div className='sidebar-menu'>
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
