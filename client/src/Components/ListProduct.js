import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../Redux/Actions/ProductActions'
import CardProduct from './CardProduct'

const ListProduct=()=>{
    const dispatch = useDispatch()
    const products = useSelector(state=> state.ProductReducer.products)
    useEffect(()=>{
        dispatch(getProducts())
    },[products])
    return(
        <div class="cc">
            {
                products &&
                products.map(el=> <CardProduct el={el}/>)

            }
        </div>
    )
}

export default ListProduct