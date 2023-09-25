import React from 'react';

//import logos
import HTML from '../img/html.png';
import CSS from '../img/css.png';
import JavaScript from '../img/javascript.png';
import ReactImg from '../img/react.png';
import Node from '../img/node.png';
import GitHub from '../img/github.png';
import Mongo from '../img/mongo.png';
import Tailwind from '../img/tailwind.png';

export default function Skills() {
    return (
        <div name='skills' className='w-full h-screen bg-[#f7f7f7]'>
          
          {/* container */}
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl py-4'>Experience</p>
                <p className='py-4'>These are the technologies i work with.</p>
            </div> 

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
                    <p className='my-4'>CSS</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt='JavaScript icon' />
                    <p className='my-4'>JavaScript</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt='React icon' />
                    <p className='my-4'>React</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt='GitHub icon' />
                    <p className='my-4'>GitHub</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt='Node.js icon' />
                    <p className='my-4'>Node.js</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt='MongoDB icon' />
                    <p className='my-4'>MongoDB</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind icon' />
                    <p className='my-4'>Tailwind CSS</p>
                </div>
            </div>
          </div>

        </div>
    )
}