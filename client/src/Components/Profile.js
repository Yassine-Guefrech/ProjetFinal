import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { current, deleteProfile, deleteUser } from "../Redux/Actions/AuthActions"
import { Card,Button } from "react-bootstrap"
const Profile=()=>{
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(current())
    },[])

    const user = useSelector(state=>state.AuthReducer.user)

    
    return(
        <div className="proff">
            {
                user &&
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={user.pic} />
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>
                    {user.email}
                  </Card.Text>
                     <div className="butt">
                     <Button variant="primary" as={Link} to={`/editProfile/${user._id}`}>Edit</Button>
                     <Button variant="danger" onClick={()=>dispatch(deleteProfile(user._id))}>Delete</Button>
                     </div>
                </Card.Body>
              </Card>
          
                // <>
                //     <h1>{user.name}</h1>
                //     <h2>{user.email}</h2>
                //     <Button variant="primary" as={Link} to={`/editProfile/${user._id}`}>Edit</Button>
                //     <Button variant="danger" onClick={()=>dispatch(deleteProfile(user._id))}>Delete</Button>
                // </>
            }
            
        </div>
    )
}

export default Profile