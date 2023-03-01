
import axios from "axios"
import { GETONEPRODUCT, GETPRODUCTS } from "../ActionTypes/ProductTypes"

export const getProducts=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/product/getAllProducts')
        dispatch({
            type : GETPRODUCTS,
            payload : res.data.products

        })
    } catch (error) {
        console.log(error)
    }
}
export const deleteProduct=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/product/deleteProduct/${id}`)
        dispatch(getProducts())
    } catch (error) {
        console.log(error)
    }
}

export const oneProduct=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/product/getOneproduct/${id}`)
        dispatch({
            type : GETONEPRODUCT,
            payload : res.data.oneProduct
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct=(updateProduct,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/product/updateProduct/${id}`,updateProduct)
        dispatch(getProducts())
        navigate('/listProducts')
    } catch (error) {
        console.log(error)
    }
   
}

export const addNewProduct =(newProduct,navigate)=>async(dispatch)=>{
    try {
        await axios.post('/api/product/postProduct',newProduct)
        dispatch(getProducts())
        navigate('/listProducts')
    } catch (error) {
      console.log(error)
    }
 }