'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { motion, Variants } from 'framer-motion';

import Header from './components/Header';
import Counter from './components/counter/counter';
import Accordion from './components/acording/acording';

export default function Home() {
  useEffect(() => {
    const gsapContext = gsap.context(() => {
      gsap.to(".big", {
        fontSize: "2.5vw",
        duration: 2.5,
        ease: "power4.inOut",
      });

      gsap.to(".clip_path-container", {
        clipPath: "inset(0%)",
        duration: 2.5,
        ease: "power4.inOut",
      });
    });

    return () => gsapContext.revert();
  }, []);

  const textVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2 } }
  };

  return (
    <>    
      <Header />

      <main className='max-w-full w-full flex flex-col md:flex-row items-center justify-center relative top-[6rem]'>
        <section className='flex flex-col md:w-[60%]'>
          <div className='w-full flex gap-3 items-center'>
            <motion.p
              variants={textVariants}
              initial="initial"
              animate="animate"
              className='md:text-[5.7vw] text-[8.5vw] font-bold uppercase'>
              Your
            </motion.p>
            <span className="clip_path-container relative md:h-[7.5vw] h-[11vw] aspect-[4/2] rounded-full overflow-hidden">
              <img className="bg-cover" src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/kc2immccq0fyqy9mkz4d" alt="Vision" />
            </span>
            <motion.p 
              variants={textVariants}
              initial="initial"
              animate="animate"
              className='md:text-[5.7vw] text-[8.5vw] font-bold uppercase'>
              Vision<span className='big'>.</span>
            </motion.p>
          </div>
          <div className='w-full flex gap-3 items-center'>
            <motion.p
              variants={textVariants}
              initial="initial"
              animate="animate"
              className='md:text-[5.4vw] text-[8.5vw] font-bold uppercase'>
              Our Mastery<span className='big'>.</span>
            </motion.p>
            <span className="clip_path-container relative md:h-[7.5vw] h-[11vw] aspect-[4/2] rounded-full overflow-hidden">
              <img className="bg-cover" src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/qh4rjipqcbgr4po9juoo" alt="Mastery" />
            </span>
          </div>
        </section>
        
        <section className='md:w-[30%] 2xl:w-[20%] xs:max-w-[90%] w-full flex flex-col gap-6 items-start relative top-5 pl-1 md:pl-0'>
          <motion.span
            variants={textVariants}
            initial="initial"
            animate="animate"
            className='border w-1/3'></motion.span>
          <motion.p 
            variants={textVariants}
            initial="initial"
            animate="animate"
            className='md:text-sm text-sm 2xl:text-3xl'>
            Showcasing Our Diverse Construction Portfolio, <br /> Expert Services, Satisfied Client Testimonials, <br /> and Converting Inquiry Channels.
          </motion.p>
          <div className='flex flex-row items-center gap-3 md:pt-1'>
            <motion.p 
              variants={textVariants}
              initial="initial"
              animate="animate"
              className='md:text-6xl text-5xl text-[var(--dark-grey)]'>
              <Counter number={100} title="+" />
            </motion.p>
            <motion.p 
              variants={textVariants}
              initial="initial"
              animate="animate"
              className='md:text-2xl text-md tracking-widest'>
              Happy <br /> homeowners
            </motion.p>
          </div>
        </section>
      </main>

      <div className='max-w-[2560px] m-auto flex md:flex-row flex-col-reverse justify-between relative top-[10rem] gap-5'>  
        <img className='clip_path-container md:w-[40%] overflow-hidden w-0' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/cb3skzlcxmvpz1jlnhuf" alt="Probuild Lisbon builder" />
        <img className='clip_path-container md:w-[60%] overflow-hidden' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/nec9l5l7ps6z7os4riyu" alt="Probuild Lisbon House" />
      </div>

      <section className='max-w-[1440px] relative top-[10rem] py-20 gap-y-20 parent md:w-full m-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='text-center flex flex-col items-center'>
          <h1 className='md:text-5xl text-4xl font-bold text-[var(--orange)]'>350+</h1>
          <p className='pt-3 md:text-2xl text-lg text-center tracking-wider'>Successful projects</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }} 
          className='text-center  flex flex-col items-center'>
          <h1 className='md:text-5xl text-4xl font-bold text-[var(--orange)]'>50+</h1>
          <p className='pt-3 md:text-2xl text-lg text-center tracking-wider'>Team members</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='text-center flex flex-col items-center'>
          <h1 className='md:text-5xl text-4xl font-bold text-[var(--orange)]'>100+</h1>
          <p className='pt-3 md:text-2xl text-lg text-center tracking-wider'>Happy clients</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }} 
          className='text-center flex flex-col items-center'>
          <h1 className='md:text-5xl text-4xl font-bold text-[var(--orange)]'>100%</h1>
          <p className='pt-3 md:text-2xl text-lg text-center tracking-wider'>Client satisfaction</p>
        </motion.div>
      </section>

      <section className='max-w-[1440px] relative top-[5rem] py-20 gap-x-10 gap-y-10 parentTwo m-auto'>
        <div className='rounded-full py-5 px-7 flex flow-row border border-[var(--light-grey)] items-center '>
          <div className='rounded-full bg-[var(--light-grey)] w-8 h-8 flex justify-center items-center'>
            <img className='w-4' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/uv7gqqnre6rlfjtzqc8w" alt="done icon" />
          </div>
          <h1 className='pl-5 md:text-xl text-md'>Project Portfolio <br /> Showcase</h1>
        </div>
        <div className='rounded-full py-5 px-7 flex flow-row border border-[var(--light-grey)] items-center '>
          <div className='rounded-full bg-[var(--light-grey)] w-8 h-8 flex justify-center items-center'>
            <img className='w-4' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/uv7gqqnre6rlfjtzqc8w" alt="done icon" />
          </div>
          <h1 className='pl-5 md:text-xl text-md'>Project Portfolio <br /> Showcase</h1>
        </div>
        <div className='rounded-full py-5 px-7 flex flow-row border border-[var(--light-grey)] items-center '>
          <div className='rounded-full bg-[var(--light-grey)] w-8 h-8 flex justify-center items-center'>
            <img className='w-4' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/uv7gqqnre6rlfjtzqc8w" alt="done icon" />
          </div>
          <h1 className='pl-5 md:text-xl text-md'>Project Portfolio <br /> Showcase</h1>
        </div>
        <div className='rounded-full py-5 px-7 flex flow-row border border-[var(--light-grey)] items-center '>
          <div className='rounded-full bg-[var(--light-grey)] w-8 h-8 flex justify-center items-center'>
            <img className='w-4' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/uv7gqqnre6rlfjtzqc8w" alt="done icon" />
          </div>
          <h1 className='pl-5 md:text-xl text-md'>Project Portfolio <br /> Showcase</h1>
        </div>
        {/* Repeat this structure for each item */}
      </section>

      <section className='m-auto flex lg:flex-row flex-col flex-1 py-20'>
        <div className='flex flex-col pt-10 lg:w-[50%]'>
          <h1 className='2xl:text-[5vw] lg:text-6xl text-5xl font-bold'>Vision Forge</h1>
          <p className='md:max-w-[80%] py-5 2xl:text-3xl lg:text-lg text-sm'>
            Where Dreams Take Shape, Creating Unforgettable Architectural Wonders With Expert Craftsmanship and Precision Execution. Transforming Inspirations into Magnificent, Enduring Architectural Masterpieces Expert Craftsmanship and Precision
          </p>
          <img className='lg:w-[90%]' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/trfxmrlhpsafcd5inq44" alt="Probuild Lisbon builder" />
        </div>

        <div className='flex lg:flex-col flex-col-reverse pt-10 lg:w-[50%]'>
          <img className='lg:w-full' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/apygnnvdhbdvzxhpe8ro" alt="Apartment remodelation by Probuild Lisbon" />
          <Accordion />
        </div>
      </section>
    </>
  );
}
