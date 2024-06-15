'use client';

import Header from './components/Header';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



export default function Home() {


  
  useGSAP(() => {
    const timeline = gsap.timeline()
    const context = gsap.context(() => {
      gsap.to(".clip_path-container", {
        clipPath: "inset(0%)",
        duration: 2.5,
        ease: "power4.inOut",
      });
    });
  }, []);

  return (
    <>    
    <Header />


    <div className='max-w-full w-full flex md:flex-row flex-col items-center justify-center relative top-[6.5rem]'>

      {/* Text with rounded images */}
      <div className='flex flex-col md:w-[60%] 2xl:w-[60%]  '>
      <div  className={'w-full  flex gap-3 items-center flex-nowrap '}>
      <p className=' md:text-[5.7vw] text-[8.5vw] font-bold uppercase'>Your</p>
      <span className="clip_path-container relative md:h-[7.5vw] h-[11vw] aspect-[4/2] rounded-full overflow-hidden">
        <img className="bg-cover" src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/kc2immccq0fyqy9mkz4d" alt="image" />
      </span>
      <p className=' md:text-[5.7vw] text-[8.5vw] font-bold uppercase'>Vision.</p>
    </div>

      <div className={'w-full  flex gap-3 items-center relative flex-nowrap'}>
      <p className=' md:text-[5.4vw] text-[8.5vw] font-bold uppercase'>Our Mastery.</p>
      <span className="clip_path-container relative md:h-[7.5vw] h-[11vw] aspect-[4/2] rounded-full overflow-hidden">
        <img className="bg-cover" src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/qh4rjipqcbgr4po9juoo" alt="image" />
      </span>
    </div>
    </div>
    {/* STOP */}
 
    <div className='md:w-[30%] 2xl:w-[20%] xs:max-w-[90%] w-full flex flex-col gap-6 text-[var(--light-grey)] items-start relative top-5 pl-1 md:pl-0 '>
      <span className='lefttr border w-1/3'></span>
      <p className='lefttr md:text-sm text-sm 2xl:text-3xl'>Showcasing Our Diverse Construction Portfolio,<br /> Expert Services, Satisfied Client Testemonials, <br /> and Converting inquiry Channels </p>
      <div className='flex flex-row items-center gap-3 md:pt-1 '>
      <h2 className='lefttr md:text-6xl text-5xl text-[var(--dark-grey)] '>10k+</h2>
      <h1 className='lefttr md:text-2xl'>Happy <br /> homeowners</h1>
      </div>
    </div>

    </div>

    <div className='w-full max-w-[2560px] m-auto flex flex-row justify-between relative top-[10rem] gap-5'>  
      <img className='clip_path-container w-[40%]' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/cb3skzlcxmvpz1jlnhuf" alt="Probuild Lisbon builder" />
      <img className='clip_path-container w-[60%]' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/nec9l5l7ps6z7os4riyu" alt="Probuild Lisbon House" />
    </div>


    </>
    
  );
}
