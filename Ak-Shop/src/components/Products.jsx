import React, { useEffect, useState } from 'react'
import ProductsItem from './ProductsItem'
import { toast } from 'react-toastify'
import fetchData from './fetchData'
import FilterProductBySearch from './FilterProductBySearch'
import { useSelector } from 'react-redux'
import { selectCatVal, selectFilterProducts, selectSearchval } from '../redux/filterSlice'
import Category from './Category'
import Footer from './Footer'

const Products = () => {
  // const [products,setProducts] = useState([])

  // const getData  = async () => {
  // try {
  //   const  res  = await fetch("https://dummyjson.com/products")
  //   const data =  await res.json()
  //   setProducts(data.products)
  // } catch (error) {
  //     toast.error(error.message)
  // }
  // }

  // useEffect(()=>{
  //   getData()
  // },[])

  const products = fetchData("https://dummyjson.com/products")
  // const products = fetchData("https://fakestoreapi.com/products")

  const filterProducts = useSelector(selectFilterProducts)
  const searchval = useSelector(selectSearchval)
  const categoryValue = useSelector(selectCatVal)
  return (
    <>
    <div className='flex-col  sm:flex sm:flex-row  justify-between items-center px-4'>
      <Category products={products} /> 
    <FilterProductBySearch products={products} /> 
    </div>

    {searchval !='' || categoryValue != '' ? <> {filterProducts.length==0 ? <h1 className='text-center mt-5 text-5xl font-bold text-red-500 min-h-screen flex items-center justify-center'>No Product Found</h1> : <ProductsItem products={filterProducts} />}  </>   :  <ProductsItem products={products} />  }
   <Footer />
    </>
  )
}

export default Products
