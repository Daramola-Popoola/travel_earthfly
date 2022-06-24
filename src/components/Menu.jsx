import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {TbAlignRight} from 'react-icons/tb';
import {CgClose} from 'react-icons/cg';

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <aside className="flex flex-row jusitify-center items-center bg-transparent text-white duration-150">
        <div className={`${showMenu ? ' visible': ' invisible' } flex justify-center items-center p-3 text-sm gap-x-9 text-opacity-10 hover:text-opacity-100 transition-all ease-in-out duration-700`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/">Destnations</Link>
            <Link to="/">Contact</Link>
            <div className="flex flex-row justify-center items-center gap-x-5 pr-12">
              <a href="https://www.twitter.com" className="social_icons_classes"><span className="h-6 w-6 twitter_img duration-100"></span></a>
              <a href="https://www.instagram.com" className="social_icons_classes"><span className="h-6 w-6 instagram_img duration-100"></span></a>
              <a href="https://www.facebook.com" className="social_icons_classes"><span className="h-6 w-6 facebook_img duration-100"></span></a>
            </div>
        </div>
        
        <button className="flex justify-center items-center p-3 text-2xl rounded-full peer backdrop-blur-md" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <CgClose /> : <TbAlignRight /> }
        </button>
    </aside>
  )
}

export default Menu