import React, { useEffect, useState } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import { FILTER_BY_SEARCH } from '../redux/filterSlice'

const FilterProductBySearch = ({products}) => {
    // console.log(products);
    
    const [search,setSearch] = useState('')
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(FILTER_BY_SEARCH({products,search}))
    },[search])
  return (
    <div >
    <div className=" flex  sm:justify-end justify-center relative items-center   ms-16 me-8 mt-3  ">
    <input type="text"
    placeholder='Search Products..' 
    className='bg-gray-700 text-white rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 '
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    />
    <HiMagnifyingGlass className=' w-5 h-5   hidden sm:block sm:absolute sm:top-2.5 sm:left-2 text-gray-400 ' />
  </div>
    </div>
  )
}

export default FilterProductBySearch
