'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { motion, spring } from "framer-motion"
import Header from './components/Header';
import Counter from './components/counter/counter';
import Accordion from './components/acording/acording';
import Image from 'next/image';
import Counting from './components/countings/counting';
import StatsSection from './components/Stats/stats';
import { AppleCardsCarouselDemo } from './components/carousel/CarouselUse';

export default function Home() {
  useEffect(() => {
    const gsapContext = gsap.context(() => {
      gsap.to(".clip_path-container", {
        clipPath: "inset(0%)",
        duration: 2.5,
        ease: "power4.inOut",
      });
    });

    return () => gsapContext.revert();
  }, []);


  return (
    <>    
      <Header />

      <main className=' md:px-10 max-w-full w-full flex flex-col md:flex-row gap-x-[60px] items-center justify-center relative top-[6rem]'>
        <section className='flex flex-col md:w-[60%]'>
          <div className='w-full flex gap-3 items-center'>
            <motion.p
            initial={{scale: 0}} whileInView={{scale: 1}} transition={{type: "spring", stiffness: 300, damping: 50}}
            className='md:text-[5.7vw] text-[7.5vw] font-bold uppercase'>Your</motion.p>
            <span className="clip_path-container relative md:h-[7.5vw] h-[11vw] aspect-[4/2] rounded-full overflow-hidden">
              <Image width={300} height={100} className="bg-cover" src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/kc2immccq0fyqy9mkz4d" alt="Vision" />
            </span>
            <motion.p
            initial={{scale: 0}} whileInView={{scale: 1}} transition={{type: "spring", stiffness: 300, damping: 50}} 
            className='md:text-[5.7vw] text-[7.5vw] font-bold uppercase'>Vision</motion.p>
          </div>
          <div className='w-full flex gap-3 items-center'>
            <motion.p
            initial={{scale: 0}} whileInView={{scale: 1}} transition={{type: "spring", stiffness: 300, damping: 50}} 
            className='md:text-[5vw] text-[8.5vw] font-bold uppercase'>Our Mastery</motion.p>
            <span className="clip_path-container relative md:h-[7.5vw] h-[11vw] aspect-[4/2] rounded-full overflow-hidden">
              <Image width={300} height={100} className="bg-cover" src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/qh4rjipqcbgr4po9juoo" alt="Mastery" />
            </span>
          </div>
        </section>
        
        <motion.section 
        initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4}}
        className='md:w-[30%] 2xl:w-[20%] xs:max-w-[90%] w-full flex flex-col gap-6 items-start relative top-5 md:pl-0'>
          <span className='border w-1/3'></span>
          <p
          className='md:text-sm text-sm 2xl:text-3xl'>
            Showcasing Our Diverse Construction Portfolio, <br /> Expert Services, Satisfied Client Testimonials, <br /> and Converting Inquiry Channels.
          </p>
          <div className='flex flex-row items-center gap-3 md:pt-1'>
            <p className='md:text-5xl text-4xl text-[var(--dark-grey)]'>
              100+
            </p>
            <p className='md:text-xl text-md tracking-widest'>
              Happy <br /> homeowners
            </p>
          </div>
        </motion.section>
      </main>

      <div className='m-auto flex md:flex-row flex-col-reverse relative top-[10rem] gap-[30px]'>  
        <Image width={500} height={500} className=' rounded-r-3xl clip_path-container md:w-[37%] overflow-hidden w-0' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/dekbvvdmimc2kokp4yt3" alt="Probuild Lisbon builder" />
        <Image width={900} height={500} className=' md:rounded-l-3xl md:rounded-r-none rounded-l-3xl rounded-r-3xl  clip_path-container md:w-[63%] overflow-hidden' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/nec9l5l7ps6z7os4riyu" alt="Probuild Lisbon House" />
      </div>

      <StatsSection />

      <Counting />

      <section className='md:px-[126px] m-auto flex lg:flex-row flex-col flex-1 pb-32 py-20'>
        <div className='flex flex-col pt-10 lg:w-[50%]'>
          <h1 className='2xl:text-[5vw] lg:text-6xl text-5xl font-bold text-center md:text-left'>Vision Forge</h1>
          <p className='md:max-w-[80%] pt-[14px] pb-[32px] 2xl:text-3xl lg:text-2xl text-xl md:text-left text-center'>
            Where Dreams Take Shape, Creating Unforgettable Architectural Wonders With Expert Craftsmanship and Precision Execution. Transforming Inspirations into Magnificent, Enduring Architectural Masterpieces Expert Craftsmanship and Precision
          </p>
          <Image width={1000} height={600} loading='lazy' className='lg:w-[90%] rounded-3xl' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/kpwpinikrjymgd4rxoie" alt="Probuild Lisbon builder" />
        </div>

        <div className='flex lg:flex-col flex-col-reverse pt-5 lg:w-[50%]'>
          <Image width={1000} height={600}loading='lazy' className='lg:w-full rounded-3xl mt-12' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/apygnnvdhbdvzxhpe8ro" alt="Apartment remodelation by Probuild Lisbon" />
          <Accordion />
        </div>
      </section>

      {/* <section className='bg-[var(--orange)] 2xl:-m-[80px] lg:-m-[0px] -mx-[20px] px-[25px] pb-20 max-w-[100vw] '>
        <div className='flex lg:py-[6rem] py-20 flex-col text-white text-center md:max-w-[80%] m-auto'>
          <h1 className='lg:py-7 pb-6 font-bold 2xl:text-[5vw] lg:text-7xl sm:text-[2.7rem] xs:text-[2rem] md:!leading-[6rem] !leading-[1.2]'>Building Tomorrow's Landmarks with Expert Precision.</h1>
          <p className='lg:text-2xl text-lg '>The types of construction projects our company specializes in include <br /> residential, commercial, industrial, and renovation projects.</p>
        </div>  
        <AppleCardsCarouselDemo/>
      </section> */}
    </>
  );
}
