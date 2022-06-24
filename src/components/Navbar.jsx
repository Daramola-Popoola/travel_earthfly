import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Menu from './Menu';

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between items-center px-3 w-full'>
        <div className="flex p-2 bg-transparent w-3/12">
            <Link to="/" className="flex flex-row justify-between items-center">
                <img src={Logo}  alt="img_logo" className="h-16 w-44"/>
            </Link> 
        </div>
        
        {/* <div className="flex flex-row justify-center items-center gap-x-5 pr-12">
          <a href="https://www.twitter.com" className="social_icons_classes"><span className="h-6 w-6 twitter_img duration-100"></span></a>
          <a href="https://www.instagram.com" className="social_icons_classes"><span className="h-6 w-6 instagram_img duration-100"></span></a>
          <a href="https://www.facebook.com" className="social_icons_classes"><span className="h-6 w-6 facebook_img duration-100"></span></a>
        </div> */}
        <Menu />
    </nav>
  )
}

export default Navbar 