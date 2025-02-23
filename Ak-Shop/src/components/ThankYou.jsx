import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { EMPTY_CART } from '../redux/cartSlice'
import { toast } from 'react-toastify'

const ThankYou = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        navigate('/')
        toast.info("Thanks for Shopping ")
        dispatch(EMPTY_CART())
    }
     
  return (
    <div className='h-screen w-full flex justify-center items-center'>
    <div className='flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold '>Thank You for Shoping </h1>
        <button className='px-4 py-2 rounded-lg bg-blue-700 text-white ms-24 cursor-pointer mt-3 '
        onClick={handleClick}
        > More Shopping </button>
    </div>
    </div>
  )
}

export default ThankYou
