import { useEffect, useState } from "react"
import {toast} from 'react-toastify'

const fetchData = (url)=>{
    let [data,setData] = useState([])
// console.log(url);

   let  getData = async()=>{
   try {
    let response = await fetch(url)
    let data = await response.json()
       setData(data.products)
   } catch (error) {toast.error(error.message)}
    }

    useEffect(()=>{getData()},[])
    
  
    return data
}

export default fetchData  
