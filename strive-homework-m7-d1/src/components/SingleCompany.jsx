import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { removeFromFavouritesAction } from '../redux/actions'
import {useDispatch } from 'react-redux'


const SingleCompany = ({idx, name}) => {

  const dispatch = useDispatch()

    return(
        
        <div className="d-flex flex-column mr-2 p-2" style={{border: "1px solid grey", minHeight: "120px"}}>
            <Link to={`/${name}`}>
            <h4 style={{marginTop:"auto"}}>{name}</h4>
            </Link>
            <Button variant="danger" onClick={()=> {dispatch(removeFromFavouritesAction(idx))}} style={{marginTop:"auto"}}><i className="bi bi-trash3-fill" ></i></Button>
        </div>
    )
}

export default SingleCompany