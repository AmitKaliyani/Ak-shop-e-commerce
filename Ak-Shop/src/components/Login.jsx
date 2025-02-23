import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

 
const Login = () => {
const {register,trigger,formState: { errors }, handleSubmit,getValues} = useForm()
const navigate = useNavigate()
const location =useLocation()
// console.log(location);


let loginUser = async()=>{
    const {email,password} = getValues()
    try {
        let response  = await fetch(`${import.meta.env.VITE_BASE_URL}/users?email=${email}`)
         let data = await response.json()
         console.log(data);
        //  console.log(data[0]);
        if(data.length==0) {
          toast.error("Invalid credentials")
        }else if( email !=data[0].email && password != data[0].password ){
          toast.error("Invalid credentials")
        }
        else{
            toast.success("LoggedIn Succesfully")
            let obj = {isLoggedIn:true, email:email,username:data[0].username}
            sessionStorage.setItem("cred",JSON.stringify(obj))
            // navigate('/')cart
            location?.state?.path ? navigate(location.state.path) : navigate('/')
        }
      }
        
  catch (error) {toast.error(error.message)}


}

  return (
    <>
   <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="mt-2 text-center text-2xl font-bold tracking-tight text-gray-900">
      Sign In to your Account
    </h2>
  </div>

  <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6 shadow-lg rounded-lg p-6 bg-white" onSubmit={handleSubmit(loginUser)}>
    
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
          Email address
        </label>
        <div className="mt-2">
          <input 
            name="email" 
            type="text"
            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            {...register("email", {
              required: "Email is required", 
              pattern: {
                value: /^[\w\.]+\@[\w]+\.[a-zA-Z]{3}$/,
                message: "Invalid Email"
              }
            })} 
            onBlur={() => trigger('email')}
          />
          {errors.email && <span className="text-red-700">{errors.email.message}</span>}
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
            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900  outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            {...register("password", { required: "Password is required" })}
            onBlur={() => trigger('password')}
          />
          {errors.password && <span className="text-red-700">{errors.password.message}</span>}
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-md cursor-pointer hover:bg-indigo-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Don't have an account?&nbsp;
      <Link to='/register' className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer">
        Sign Up
      </Link>
    </p>
  </div>
</div>
</>
  )
}

export default Login
