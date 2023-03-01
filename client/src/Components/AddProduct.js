import { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { addNewProduct } from '../Redux/Actions/ProductActions'

const AddProduct=()=>{
    const [name,setName] = useState('')
    const [image,setImage] = useState('')
    const [price,setPrice] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleAdd=(a)=>{
        a.preventDefault()
        dispatch(addNewProduct({name,image,price},navigate))

    }
    return(
      <div className="proff">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e)=> setName(e.target.value)}  placeholder="Enter name" />       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>image</Form.Label>
          <Form.Control onChange={(e)=> setImage(e.target.value)}  placeholder="Enter image" />       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>price</Form.Label>
          <Form.Control onChange={(e)=> setPrice(e.target.value)} placeholder="Enter price" />       
        </Form.Group>
  
       
        <Button onClick={(e)=>handleAdd(e)} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    )
}

export default AddProduct