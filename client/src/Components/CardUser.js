import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../Redux/Actions/AuthActions';
const CardUser=({el})=>{
    const dispatch = useDispatch()
    return(
      //   <Card style={{ width: '18rem' }}>
    
      //   <Card.Body>
      //     <Card.Title>{el.name}</Card.Title>
      //     <Card.Text>
      //       {el.email}
      //     </Card.Text>
      //     <Button variant="primary" as={Link} to={`/editUser/${el._id}`}>Edit</Button>
      //     <Button variant="danger" onClick={()=>dispatch(deleteUser(el._id))}>Delete</Button>     
      //   </Card.Body>
      // </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.pic} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          {el.email}
        </Card.Text>
        <div className="butt">
          <Button variant="primary" as={Link} to={`/editUser/${el._id}`}>Edit</Button>
          <Button variant="danger" onClick={()=>dispatch(deleteUser(el._id))}>Delete</Button>
        </div>
      </Card.Body>
    </Card>

    )
}

export default CardUser