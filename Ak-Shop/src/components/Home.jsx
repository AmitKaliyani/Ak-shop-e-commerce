import React from 'react';
import BgImg from '../assets/bg1.jpg';
import Footer from './Footer';
import ProductsItem from './ProductsItem';
import fetchData from './fetchData';
import { useNavigate } from 'react-router';

const Home = () => {
  const products = fetchData("https://dummyjson.com/products");
  const navigate = useNavigate()
  const limitedProducts = products.slice(0, 8);

  return (
    <div className="w-full h-auto relative overflow-x-hidden bg-white">
      <div
        className="h-[400px] w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 px-4 sm:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Welcome to Summer Sale</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6">
            <span className="text-yellow-400 font-semibold">Flat 40% off</span> on Exclusive Products
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="mt-12 px-4 sm:px-8 bg-white text-center">
        <h3 className="text-2xl sm:text-3xl font-bold ">Buy Amazing Products</h3>
      </div>
      <ProductsItem products={limitedProducts} />

      <div className="h-auto w-full mb-5 mt-4 px-4 sm:px-8 flex justify-center">
        <button className="rounded-lg px-6 py-3 bg-indigo-900 hover:bg-indigo-700 text-white transition duration-300 cursor-pointer"
        onClick={()=>navigate('/products')}
        >
          Explore More Products
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

