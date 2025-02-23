import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FILTER_BY_CATEGORY } from '../redux/filterSlice'

const Category = ({ products }) => {
    const [catVal, setCatVal] = useState('')
    const categories = Array.from(new Set(products.map((item) => item.category)))
    const dispatch = useDispatch()

    useEffect(() => {
         dispatch(FILTER_BY_CATEGORY({ products, catVal }))
        
    }, [catVal]) 

    const handleChange = (e) => {
        e.preventDefault()
        setCatVal(e.target.value)
    }

    return (
        <div className="flex justify-center mt-3 ms-8">
            <select
                className="w-3xs rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 me-2"
                value={catVal}
                onChange={handleChange}
            >
                <option value="">All Category</option>
                {categories.map((cat, i) => {
                    return <option key={i} value={cat}>{cat}</option>
                })}
            </select>
        </div>
    )
}

export default Category


