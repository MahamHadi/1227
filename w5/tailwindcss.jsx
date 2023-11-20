import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-4xl font-bold ">
      Tailwind CSS Practice
    </h1>
    <div className='w-full h-[15vh] flex  gap-3 lg:flex-row md:flex-col sm:flex-col'>

      <div className='lg:w-1/2 bg-blue-300 h-32 md:w-[100%]  sm:w-[100%] max-sm:w-[100%]'> 1 </div>
      <div className='lg:w-1/2 bg-blue-300 h-32 md:w-[100%]  sm:w-[100%] max-sm:w-[100%]'> 2 </div>
    </div>

   

      <div className='border-2 bg-green-300 h-52 w-12/12  '> 3 </div>
      
      <div  className='w-full h-[15vh] flex  gap-3 lg:flex-row md:flex-col w-full  sm:flex-col '> 

        <div className='border-2 bg-red-300 h-52 w-4/12 md:flex-wrap w-full'> 4 </div>
        <div className='border-2 bg-red-300 h-52 w-4/12 md:flex-wrap w-full'> 5 </div>
        <div className='border-2 bg-red-300 h-52 w-4/12 md:flex-wrap w-full'> 6 </div>

      </div>

      <div  className='w-full h-[15vh] flex  gap-3 lg:flex-row md:flex-col w-full  sm:flex-col '> 

        <div className='border-2 bg-gray-500 h-52 w-3/12 md:flex-wrap w-full'> 7  </div>
        <div className='border-2 bg-gray-500 h-52 w-3/12 md:flex-wrap w-full'> 8 </div>
        <div className='border-2 bg-gray-500 h-52 w-3/12 md:flex-wrap w-full'> 9 </div>
        <div className='border-2 bg-gray-500 h-52 w-3/12 md:flex-wrap w-full'> 10 </div>

      </div>      
    </>
  )
}

export default App
