import { Button, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteProduct } from "../Redux/Actions/ProductActions"

const CardProduct=({el})=>{
  const dispatch = useDispatch()
  const user = useSelector(state=> state.AuthReducer.user)
    return(
      //   <Card style={{ width: '18rem' }}>
    
      //   <Card.Body>
      //     <Card.Title>{el.name}</Card.Title>
      //     <Card.Text>
      //       <img src={el.image} alt='Not FOUND'/>
      
      //     </Card.Text>
      //     <Card.Text>
      //       {el.price}
      //     </Card.Text>

      //     <Button variant="primary" as={Link} to={`/editProduct/${el._id}`}>Edit</Button>
      //     <Button variant="danger" onClick={()=>dispatch(deleteProduct(el._id))}>Delete</Button>     
      //   </Card.Body>
      // </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image} style={{height:'225px',width:'286px'}} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
           {el.price}
        </Card.Text>
          <div className="butt">
            {
              user.role == "admin" &&
              <>
               <Button variant="primary" as={Link} to={`/editProduct/${el._id}`}>Edit</Button>
               <Button variant="danger" onClick={()=>dispatch(deleteProduct(el._id))}>Delete</Button>
              </>

            }
              
          </div>  
      </Card.Body>
    </Card>

    )
}
export default CardProduct