import { useEffect, useState } from "react"
import {Form,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { oneProduct, updateProduct } from "../Redux/Actions/ProductActions"

const EditProduct=()=>{
   const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(oneProduct(id))
    },[])
    const oneproduct = useSelector(state=>state.ProductReducer.oneProduct)

    const [name,setName] = useState(oneproduct.name)
    const [image,setImage] = useState(oneproduct.image)
    const [price,setPrice] = useState(oneproduct.price)

    useEffect(()=>{
        setName(oneproduct.name)
        setImage(oneproduct.image)
        setPrice(oneproduct.price)
    },[oneproduct])
    const navigate = useNavigate()
    const handleEdit=(a)=>{
        a.preventDefault()
        dispatch(updateProduct({name,image,price},id,navigate))
    }
    return(
      <>
      {
        oneProduct &&
        <div className="proff">
        <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control value={name} onChange={(e)=> setName(e.target.value)}  placeholder="Enter name" />       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label >Image</Form.Label>
          <Form.Control value={image} onChange={(e)=> setImage(e.target.value)}   placeholder="Enter image" />       
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control value={price} onChange={(e)=> setPrice(e.target.value)} placeholder="Enter price" />       
        </Form.Group>
  
       
        <Button onClick={(e)=>handleEdit(e)} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
      }
      </>
        )

}
export default EditProduct