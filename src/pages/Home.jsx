import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center">
        <aside className="flex bg_img justify-center items-center w-full h-screen">
          <aside className="flex flex-col backdrop-brightness-50 justify-evenly items-center w-full h-screen">
            <Navbar />
            <h3 className="w-10/12 text-5xl  lg:text-6xl lg:leading-relaxed xl:text-8xl xl:leading-relaxed pl-10 text-gray-300 font-semibold capitalize leading-relaxed">Best Link to Nature's <span className="bg-gradient-to-tr from-sky-700 to-emerald-400 bg-clip-text text-transparent">Wonders</span>.</h3>
          </aside>
        </aside>
    </section>
  )
}

export default Home