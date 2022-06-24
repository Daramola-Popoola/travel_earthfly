import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { BsArrowRight } from 'react-icons/bs'; 
// import {TiHomeOutline, TiPhoneOutline, TiCreditCard} from 'react-icons/ti';

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center">
        <aside className="flex bg_img justify-center items-center w-full h-screen">
          <aside className="flex flex-col bg-sky-900 bg-opacity-40 justify-evenly items-center w-full h-full">
            <Navbar />
            <h3 className="w-10/12 text-5xl  lg:text-6xl lg:leading-relaxed xl:text-8xl xl:leading-relaxed pl-10 text-white font-bold capitalize leading-relaxed">Explore Nature in <span className="bg-gradient-to-tr from-sky-500 to-emerald-300 bg-clip-text text-transparent">Africa</span>.</h3>
            <aside className="flex flex-row justify-start items-center w-9/12 gap-x-5 py-10 btn_txt">
              <Link to="/" className='flex w-2/12 justify-between items-center font-bold text-white bg-sky-600 text-lg tracking-wider px-5 py-3 border border-sky-600 rounded-md shadow-md'>
                Explore
                <BsArrowRight className=" text-lg font-extrabold"/>
              </Link>
            </aside>
             <aside className="md:flex hidden flex-row justify-start items-center w-9/12">
              <h3 className="text-6xl text-white text-opacity-40 font-bold">Maldives</h3>
             {/* <Link to="/" className="menu_classes">
                <span class="menu_text_classes">
                  <TiHomeOutline className="menu_icon"/> 
                  Home
                </span>
              </Link>
              <Link to="/about" className="menu_classes">
                <span class="menu_text_classes">
                  About
                </span>
              </Link>
              <div className="menu_classes">
                <span class="menu_text_classes">
                  Travel
                </span>
              </div>
              <div className="menu_classes">
                <span class="menu_text_classes">
                  <TiCreditCard className="menu_icon"/> 
                  Book
                </span>
              </div>
              <div className="menu_classes">
                <span class="menu_text_classes">
                  <TiPhoneOutline className="menu_icon"/> 
                  Contact
                </span>
              </div>*/}
            </aside>
          </aside>
        </aside>
    </section>
  )
}

export default Home