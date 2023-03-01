import { useEffect, useState } from "react"
import {Form,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneUser, updateUser } from "../Redux/Actions/AuthActions"

const EditUser=()=>{
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOneUser(id))
    },[])
    const oneUser = useSelector(state=>state.AuthReducer.oneUser)

    const [name,setName] = useState(oneUser.name)
    const [email,setEmail] = useState(oneUser.email)

    useEffect(()=>{
        setName(oneUser.name)
        setEmail(oneUser.email)
    },[oneUser])
    const navigate = useNavigate()
    const handleEdit=(a)=>{
        a.preventDefault()
        dispatch(updateUser({name,email},id,navigate))
    }
    return(
      <div className="proff">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name" />       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />       
        </Form.Group>
  
       
        <Button onClick={(e)=>handleEdit(e)} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    )
}

export default EditUser