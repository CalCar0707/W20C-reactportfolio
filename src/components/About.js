import React from 'react';;

export default function About(){
    return (
        <div name='about' className='w-full h-screen bg-[#f7f7f7] pl-[90px]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full h-auto grid grid-cols-2 gap-8 '>
                <div className='sm:text-right pb-8 pl-4'>
                    <div className='text-5xl sm:text-6xl font-bold inline pb-[8px] border-b-4 border-[#0a192f]'> About </div>
                    
                </div>
            
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-2xl font-bold'>
                    <p>Hello, I'm Callie. Nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>
                    I am a Full Stack Web Developer with a background in Fraud Prevention. I earned my certificate in 
                    Full Stack Web Development from the University of Texas at Austin Bootcamp.
                    A few of my strengths include user experience, multitasking, and efficiency. During my education, 
                    I gained experience with several languages and technologies including but not limited  to HTML, 
                    CSS, JavaScript ES6+, Node.js, SQL, NoSQL, GraphQL, Git Version Control, React.js, GitHub, jQuery, Figma, and RESTful APIs. 

                    </p>
                </div>
                </div>
            </div>
            </div>

        
    );
};