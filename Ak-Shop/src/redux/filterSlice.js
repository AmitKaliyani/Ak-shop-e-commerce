import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name : "filter",
    initialState:{
        filterProducts:[],
        searchval:'',
        catval:''
    },
    reducers:{
    FILTER_BY_SEARCH(state,action){
    //  console.log(action.payload);
     let {products,search} = action.payload
     if(search != ''){
      console.log(products);
      
      const  fProducts =  products.filter((item)=> item.title.toLowerCase().includes(search.trim().toLowerCase())) 
       state.filterProducts = fProducts
    }
       state.searchval = search
    },
    FILTER_BY_CATEGORY(state,action){
       const {products,catVal} = action.payload
       
    if(catVal != ''){
      // console.log(catVal);
       const fProducts = products.filter((item)=>item.category == catVal)
       state.filterProducts = fProducts  
    }
    state.catval = catVal
   //  console.log(state.catval);
    
    }
    }
})

export default filterSlice
export const {FILTER_BY_SEARCH,FILTER_BY_CATEGORY}  = filterSlice.actions
export const selectFilterProducts = state => state.filter.filterProducts
export const selectSearchval = state => state.filter.searchval
export const selectCatVal = state => state.filter.catval