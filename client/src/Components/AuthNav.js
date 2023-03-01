import {Navbar,Container,Nav} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../Redux/Actions/AuthActions"
const AuthNav=()=>{
  const token = localStorage.getItem("token")

  const user = useSelector(state=> state.AuthReducer.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()
    return(
        <Navbar style={{top : "0", position :'sticky'}} bg="dark" variant="dark" class="ff">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            
            
            {
              (token && user.role == "admin") ?
              <>
                 <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>          
                 <Nav.Link as={Link} to='/listUsers'>Users</Nav.Link>
                 <Nav.Link as={Link} to='/listProducts'>Products</Nav.Link>
                 <Nav.Link as={Link} to='/addProduct'>AddProduct</Nav.Link>  
                 <Nav.Link onClick={()=>{dispatch(logout());navigate('/')}}>Logout</Nav.Link>
              </>
              :  (token && user.role == "user") ?
              <>
               <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>  
               <Nav.Link as={Link} to='/listProducts'>Products</Nav.Link>
               <Nav.Link onClick={()=>{dispatch(logout());navigate('/')}}>Logout</Nav.Link>
              </> 
              :
              <>
                <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                <Nav.Link as={Link} to='/login' >Login</Nav.Link>
              </>
            }
            

            
          </Nav>
        </Container>
      </Navbar>
    )
}
export default AuthNav