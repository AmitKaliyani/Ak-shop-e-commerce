import React from 'react'
import { useDispatch } from 'react-redux'
import { ADD_TO_CART } from '../redux/cartSlice'
import { FaStar } from 'react-icons/fa6'

const ProductsItem = ({ products }) => {
  const dispatch = useDispatch()
  
  const handleAddtoCart = (product) => {
    dispatch(ADD_TO_CART(product))
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-xl md:max-w-2xl px-8 sm:px-2 sm:py-8 lg:max-w-7xl  lg:px-8">
        
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.length === 0 && <div className='flex  space-x-2'> <h1 className="text-2xl font-bold min-h-screen ">Loading Products</h1> <span className='animate-spin w-8 h-8 rounded-full border-3 border-l-transparent'></span> </div> }

          {products.map((product) => (
            <div key={product.id} className="group relative shadow-lg p-2 bg-white rounded-lg hover:shadow-xl transition-shadow duration-300">
              <img
                alt={product.title}
                src={product.images[0]}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 font-semibold">{product.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>

              <div className="font-semibold text-gray-500 mt-2">
                {product.description.slice(0, 40)}...
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <div className={`inline-block px-3 py-1 text-xs font-semibold rounded-full 
                  ${product.stock > 0 ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                  {product.stock > 0 ? 'Available' : 'Out of Stock'}
                </div>
                <div className="  flex items-center  px-3 py-1 text-xs font-semibold rounded-full bg-yellow-400 text-black">
                  {product.rating} <FaStar className='ms-2' /> 
                </div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <h4 className="font-bold">Stock: {product.stock}</h4>
                <button
                  className="p-2 px-3 bg-blue-700 text-white rounded-lg hover:bg-indigo-600 transition-all duration-300 cursor-pointer"
                  onClick={() => handleAddtoCart(product)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsItem

