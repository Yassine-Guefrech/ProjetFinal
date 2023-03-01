import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getUsers } from '../Redux/Actions/AuthActions'
import CardUser from './CardUser'

const ListUsers=()=>{
    const dispatch = useDispatch()
    const users = useSelector(state=> state.AuthReducer.users)
    useEffect(()=>{
        dispatch(getUsers())
    },[users])
    return(
        <div class="hh">
            {
                users &&
                users.map(el=> <CardUser el={el}/>)

            }
        </div>
    )
}

export default ListUsers