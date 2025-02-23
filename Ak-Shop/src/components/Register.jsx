import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Register = () => {
  let [user, setUser] = useState({ username: '', email: '', password: '', cpassword: '', role: '1' });
  let [error, setError] = useState({ username: '', email: '', password: '', cpassword: '' });
  let redirect = useNavigate();

 
  let handleSubmit = async (e) => {
    e.preventDefault();
    let usernameValid = checkUsername();
    let emailValid = checkEmail();
    let passwordValid = checkPassword();
    let cpasswordValid = checkCpassword();

    if (usernameValid==false || emailValid==false || passwordValid==false || cpasswordValid==false) {
    return 
    }

    try {
      await fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...user, createdAt: new Date() }),
      });
      toast.success('Registration successful');
      redirect('/login');

    } catch (error) {
      toast.error(error.message);
    }
  }

 
  let checkUsername = () => {
    if (!user.username) {
      setError((prevError) => ({ ...prevError, username: 'Username is required' }));
      return false;
    } else {
      setError((prevError) => ({ ...prevError, username: '' }));
      return true;
    }
  };

  let checkEmail = () => {
    if (!user.email) {
      setError((prevError) => ({ ...prevError, email: 'Email is required' }));
      return false;
    } else {
      setError((prevError) => ({ ...prevError, email: '' }));
      return true;
    }
  };

 
  let checkPassword = () => {
    if (!user.password) {
      setError((prevError) => ({ ...prevError, password: 'Password is required' }));
      return false;
    } else {
      setError((prevError) => ({ ...prevError, password: '' }));
      return true;
    }
  };

  
  let checkCpassword = () => {
    if (!user.cpassword) {
      setError((prevError) => ({ ...prevError, cpassword: 'Confirm password is required' }));
      return false;
    } else if (user.password !== user.cpassword) {
      setError((prevError) => ({ ...prevError, cpassword: 'Passwords do not match' }));
      return false;
    } else {
      setError((prevError) => ({ ...prevError, cpassword: '' }));
      return true;
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
        Create an Account
      </h2>
    </div>
  
    <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-4 shadow-lg rounded-lg p-6" onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-900">
            Username
          </label>
          <div className="mt-2">
            <input
              name="username"
              type="text"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              onBlur={checkUsername}
            />
            {error.username && <p className="text-red-500 text-xs">{error.username}</p>}
          </div>
        </div>
  
       
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            Email
          </label>
          <div className="mt-2">
            <input
              name="email"
              type="email"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              onBlur={checkEmail}
            />
            {error.email && <p className="text-red-500 text-xs">{error.email}</p>}
          </div>
        </div>
  
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-900">
            Password
          </label>
          <div className="mt-2">
            <input
              name="password"
              type="password"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              onBlur={checkPassword}
            />
            {error.password && <p className="text-red-500 text-xs">{error.password}</p>}
          </div>
        </div>
  
        {/* Confirm Password Input */}
        <div>
          <label htmlFor="cpassword" className="block text-sm font-medium text-gray-900">
            Confirm Password
          </label>
          <div className="mt-2">
            <input
              name="cpassword"
              type="password"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              value={user.cpassword}
              onChange={(e) => setUser({ ...user, cpassword: e.target.value })}
              onBlur={checkCpassword}
            />
            {error.cpassword && <p className="text-red-500 text-xs">{error.cpassword}</p>}
          </div>
        </div>
  
      
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-md cursor-pointer hover:bg-indigo-500 focus:outline-2 focus:outline-indigo-600"
          >
            Sign Up
          </button>
        </div>
      </form>
  
      {/* Sign-in link */}
      <p className="mt-10 text-center text-sm text-gray-500">
        Already have an account?
        <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer">
          Sign In
        </Link>
      </p>
    </div>
  </div>
  
  );
};

export default Register;
