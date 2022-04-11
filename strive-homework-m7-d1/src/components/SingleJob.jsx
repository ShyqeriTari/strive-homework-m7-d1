import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { addToFavouritesAction } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'



const SingleJob = ({job}) => {

  const jobss = useSelector((state)=> state.jobs.favourites)

  const dispatch = useDispatch()

    return(
        
        <div className="d-flex flex-column mr-2 p-2" style={{border: "1px solid grey", minHeight: "200px"}}>
            <h6>{job.title}</h6>
            <Link to={`/${job.company_name}`}>
            <p>{job.company_name}</p>
            </Link>
            <p>{job.category}</p>{!jobss.includes(job.company_name) ?
            <Button variant="warning" onClick={()=> {dispatch(addToFavouritesAction(job.company_name))}} style={{marginTop:"auto"}}>Add Company to favourites <i className="bi bi-star"></i></Button> : <><p className="bg-success text-white">One of your favourites companies!</p></>}
        </div>
    )
}

export default SingleJob