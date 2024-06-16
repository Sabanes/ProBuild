import Header from '../components/Header';

const page = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col justify-center items-center gap-10 relative top-10'>
      <div className='flex flex-col justify-center items-center '>
      <div className='trin w-[100px] h-10 bg-[var(--orange)]'></div>
      <div className='w-[100px] h-10 bg-[var(--orange)]'></div>
      <h1>Casa do Ale </h1>
      </div>
      <div className='flex flex-col justify-center items-center '>
      <div className='trin w-[100px] h-10 bg-[var(--orange)]'></div>
      <div className='w-[100px] h-10 bg-[var(--orange)]'></div>
      <h1>Casa do Vasco </h1>
      </div>
      </div>
    </>
  )
}

export default page