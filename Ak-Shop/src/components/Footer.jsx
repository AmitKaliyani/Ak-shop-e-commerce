import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between">
        
      
        <div className="mb-6 md:mb-0 sm:mt-8">
          <div className="flex items-center space-x-2 text-indigo-400 text-2xl font-bold">
           
          </div>
          <p className="mt-3 text-gray-400 max-w-sm">
            Discover the best products and deals, all in one place.
          </p>
          <div className="flex space-x-4 mt-4 text-lg">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div>
            <h4 className="text-white font-semibold">Shop Categories</h4>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>Beauty</li>
              <li>Furniture</li>
              <li>Fregrence</li>
              <li>Groceries</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold">Customer Service</h4>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>Track Order</li>
              <li>Return & Exchange</li>
              <li>Shipping Info</li>
              <li>Contact Support</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold">Company</h4>
            <ul className="mt-2 space-y-2 text-gray-400">
              <Link to='/about'>About Us</Link>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold">Policies</h4>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Shipping Policy</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
