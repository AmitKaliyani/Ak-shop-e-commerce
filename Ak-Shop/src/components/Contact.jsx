import React from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const Contact = () => {
  const navigate= useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleClick = () => {
    toast.success("thank you for contact us")
   navigate('/')
  }
  return (
  

    <div className="flex justify-center items-center  bg-gray-100">
      <div className="bg-white mt-8 px-8  rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4 mt-2">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md mb-4 cursor-pointer"
            onClick={handleClick}
          >
            Connect Us
          </button>
        </form>
       
      </div>
    </div>
    
  )
}

export default Contact
