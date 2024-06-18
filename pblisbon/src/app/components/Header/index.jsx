'use client';
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';
import styles from './style.module.scss';
import Nav from './Nav';

const menu = {
    open: {
        width: "90vw",
        height: "600px",
        top: "-10px",
        right: "-10px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
    },
    closed: {
        width: "80px",
        height: "30px",
        top: "5px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
    }
}

export default function Index() {
    const [isActive, setIsActive] = useState(false);

    return (
    <div className='fixed top-5 pb-4 z-50 m-auto'>
       
          <a href="/">
            <img src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/gpnuolj0ioy2lzh8ydgn" alt="logo" width={70} className='absolute md:bottom-[0px] bottom-1 md:w-[70px] w-[60px]' />
            <p className=' z-10 uppercase md:pl-[3.5rem] pl-[3.2rem] mb-1 font-medium text-[var(--dark-grey)] text-[1.1rem]'>Probuild</p>
          </a>
        <div className={styles.header}>
            
            <motion.div 
                className={styles.menu}
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Nav />}
                </AnimatePresence>
            </motion.div>
            <Button isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>
        </div>
    </div>
    )
}
