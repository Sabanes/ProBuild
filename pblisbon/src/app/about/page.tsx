import Header from '../components/Header';

const page = () => {
  return (
    <>
      <Header />
      <div className='z-10 flex flex-col justify-center items-center gap-10 relative top-10'>
      <div className='z-10 flex flex-col justify-center items-center '>
      <div className='z-10 trin w-[100px] h-10 bg-[var(--orange)]'></div>
      <div className='z-10 w-[100px] h-10 bg-[var(--orange)]'></div>
      <h1>Casa de um Espanhol  </h1>
      </div>
      <div className='z-10 flex flex-col justify-center items-center '>
      <div className='z-10 trin w-[100px] h-10 bg-[var(--orange)]'></div>
      <div className='z-10 w-[100px] h-10 bg-[var(--orange)]'></div>
      <h1 className='z-10 text-2xl font-bold text-black'>Casa do meu amigo Vasco </h1>
      <img className='w-[50%] z-1  absolute' src="https://images.pexels.com/photos/7283/garden.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>
      </div>
    </>
  )
}

export default page