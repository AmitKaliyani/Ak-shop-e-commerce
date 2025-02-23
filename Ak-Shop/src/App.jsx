
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Routing from './routing/Routing'
import { ToastContainer } from 'react-toastify'

function App() {
 

  return (
  <>
      <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>

  <Routing />
  {/* <Outlet />  */}
  </>
       
  )
}

export default App
