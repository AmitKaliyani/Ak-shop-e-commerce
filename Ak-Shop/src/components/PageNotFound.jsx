import React from 'react'
import { useNavigate } from 'react-router'

const PageNotFound = () => {
    const navigate = useNavigate()
    const handleReturn = () => {
        navigate('/home')
    }

  return (
    <div >
      <div className=" h-screen w-full flex flex-col items-center justify-center " >
            <h1 className='text-3xl text-red-500  font-bold '>Page Not Found </h1>
       <button className='p-2 px-4 bg-indigo-900 text-white mt-5 rounded-lg cursor-pointer hover:bg-indigo-600  '
       onClick={handleReturn}
       >Go to Home </button>
            
      </div>
    </div>
  )
}

export default PageNotFound
