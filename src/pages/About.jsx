import React from 'react'
import Globe from '../assets/places.svg'
import Fun from '../assets/sport.svg'
import Foods from '../assets/foods.svg'

const About = () => {
  return (
    <section className="flex flex-col justify-center items-center about_section h-screen">
        <aside className="flex flex-col p-4 justify-center items-center h-screen">
            <aside className="flex flex-col jusitfy-between items-center p-5 gap-y-40">
                <h3 className="text-6xl text-slate-600 capitalize font-bold text-center">
                    Why Choose <span className='bg-gradient-to-br from-sky-400 to-emerald-400 text-transparent bg-clip-text'>US ?</span>
                </h3>    
                <aside className="flex flex-row justify-center items-start gap-x-10 w-10/12 palette">
                    <div className="flex flex-col justify-start items-start p-4 border border-gray-400 w/3/12 border-opacity-25 rounded-lg gap-y-3">
                        <div className="flex justify-start items-start bg-gradient-to-tr from-indigo-500 via-indigo-400 to-indigo-300 p-1 rounded-md shadow-lg shadow-indigo-400">
                            <img src={Globe} alt="icon_globe" className='h-9 w-9'/>
                        </div>
                        <div className="flex">
                            <h4 className="text-lg text-slate-600 font-bold capitalize">
                                Unique destinations
                            </h4>
                        </div>
                        <div className="flex flex-row text-gray-500 text-xs">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam.
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start p-4 border border-gray-400 w/3/12 border-opacity-25 rounded-lg gap-y-3">
                        <div className="flex justify-start items-start bg-gradient-to-tr from-emerald-500 via-emerald-400 to-emerald-300 p-1 rounded-md shadow-lg shadow-emerald-400">
                            <img src={Fun} alt="icon_fun" className='h-9 w-9'/>
                        </div>
                        <div className="flex">
                            <h4 className="text-lg text-slate-600 font-bold capitalize">
                                Absolute Fun
                            </h4>
                        </div>
                        <div className="flex flex-row text-gray-500 text-xs">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam.
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start p-4 border border-gray-400 w/3/12 border-opacity-25 rounded-3xl gap-y-3 py-10">
                        <div className="flex justify-start items-start bg-gradient-to-tr from-sky-500 via-sky-400 to-sky-300 p-1 rounded-md shadow-lg shadow-sky-300">
                            <img src={Foods} alt="icon_foods" className='h-9 w-9'/>
                        </div>
                        <div className="flex">
                            <h4 className="text-lg text-slate-600 font-bold capitalize">
                                Great delicacies
                            </h4>
                        </div>
                        <div className="flex flex-row text-gray-500 text-xs">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam.
                        </div>
                    </div>
                </aside>
            </aside>
        </aside>
        
    </section>
  )
}

export default About