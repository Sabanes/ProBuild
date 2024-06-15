'use client';

import React, { useEffect } from 'react';
import Header from './components/Header';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Counter from './components/counter/counter';

export default function Home() {

  useGSAP(() => {
    const context = gsap.context(() => {
      gsap.to(".clip_path-container", {
        clipPath: "inset(0%)",
        duration: 2.5,
        ease: "power4.inOut",
      });
      gsap.to(".big", {
        fontSize: "2.5vw",
        duration: 2.5,
        ease: "power4.inOut",
      });
      gsap.to(".appear", {
        opacity: 1,
        duration: 1,
      });
    });
    
    return () => context.revert(); // Clean up GSAP context
  }, []);

  return (
    <>    
      <Header />
      <main className='max-w-full w-full flex flex-col md:flex-row items-center justify-center relative top-[6rem]'>
        <section className='flex flex-col md:w-[60%]'>
          <div className='w-full flex gap-3 items-center'>
            <p className='appear opacity-0 md:text-[5.7vw] text-[8.5vw] font-bold uppercase'>Your</p>
            <span className="clip_path-container relative md:h-[7.5vw] h-[11vw] aspect-[4/2] rounded-full overflow-hidden">
              <img className="bg-cover" src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/kc2immccq0fyqy9mkz4d" alt="Vision" />
            </span>
            <p className='appear opacity-0 md:text-[5.7vw] text-[8.5vw] font-bold uppercase'>Vision<span className='big'>.</span></p>
          </div>
          <div className='w-full flex gap-3 items-center'>
            <p className='appear opacity-0 md:text-[5.4vw] text-[8.5vw] font-bold uppercase'>Our Mastery<span className='big'>.</span></p>
            <span className="clip_path-container relative md:h-[7.5vw] h-[11vw] aspect-[4/2] rounded-full overflow-hidden">
              <img className="bg-cover" src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/qh4rjipqcbgr4po9juoo" alt="Mastery" />
            </span>
          </div>
        </section>
        
        <section className='md:w-[30%] 2xl:w-[20%] xs:max-w-[90%] w-full flex flex-col gap-6 items-start relative top-5 pl-1 md:pl-0'>
          <span className='border w-1/3'></span>
          <p className='appear opacity-0 md:text-sm text-sm 2xl:text-3xl'>
            Showcasing Our Diverse Construction Portfolio, Expert Services, Satisfied Client Testimonials, and Converting Inquiry Channels.
          </p>
          <div className='flex flex-row items-center gap-3 md:pt-1'>
            <h2 className='appear opacity-0 md:text-6xl text-5xl text-[var(--dark-grey)]'>
              <Counter number={100} title="+" />
            </h2>
            <h1 className='appear opacity-0 md:text-2xl text-md tracking-widest'>Happy <br /> Clients</h1>
          </div>
        </section>
      </main>

      <section className='w-full max-w-[2560px] m-auto flex md:flex-row flex-col-reverse justify-between relative top-[10rem] gap-5'>  
        <img className='clip_path-container md:w-[40%] overflow-hidden' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/cb3skzlcxmvpz1jlnhuf" alt="Probuild Lisbon builder" />
        <img className='clip_path-container md:w-[60%] overflow-hidden' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/nec9l5l7ps6z7os4riyu" alt="Probuild Lisbon House" />
      </section>
    </>
  );
}
