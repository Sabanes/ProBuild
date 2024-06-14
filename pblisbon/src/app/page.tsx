import Image from 'next/image';
import Header from './components/Header';

export default function Home() {
  return (
    <>    
    <Header />


    <div className='w-screen flex md:flex-row flex-col items-center justify-center relative top-[6.5rem] gap-3   '>

      {/* Text with rounded images */}
      <div className='flex flex-col md:w-[60%] w-full '>
      <div className={'w-full px-5 flex gap-3 items-center  flex-nowrap'}>
      <p className='md:text-[5.7vw] text-[8.5vw] font-bold uppercase'>Your</p>
      <span className="relative md:h-[7.5vw] h-[11vw] aspect-[4/2] rounded-full overflow-hidden">
        <img className="bg-cover" src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/kc2immccq0fyqy9mkz4d" alt="image" />
      </span>
      <p className='md:text-[5.7vw] text-[8.5vw] font-bold uppercase'>Vision.</p>
    </div>

      <div className={'w-full px-5 flex gap-3 items-center relative  flex-nowrap'}>
      <p className='md:text-[5.7vw] text-[8.5vw] font-bold uppercase'>Our Mastery.</p>
      <span className="relative md:h-[7.5vw] h-[11vw] aspect-[4/2] rounded-full overflow-hidden">
        <img className="bg-cover" src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/qh4rjipqcbgr4po9juoo" alt="image" />
      </span>
    </div>
    </div>
    {/* STOP */}
 
    <div className='md:w-[30%] w-full flex flex-col gap-6 text-[var(--light-grey)] justify-start relative top-5 pl-5'>
      <span className='border w-1/3'></span>
      <p className='md:text-xl text-sm'>Showcasing Our Diverse Construction Portfolio,<br /> Expert Services, Satisfied Client Testemonials, <br /> and Converting inquiry Channels </p>
      <div className='flex flex-row items-center gap-3 md:pt-3'>
      <h2 className=' md:text-7xl text-5xl text-[var(--dark-grey)] '>10k+</h2>
      <p className=' md:text-2xl'>Happy <br /> homeowners</p>
      </div>
    </div>

    </div>

    </>
    
  );
}
