import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { addToFavouritesAction } from '../redux/actions'

const mapStateToProps = (state) => ({
  })

const mapDispatchToProps = (dispatch) => ({
   
    addToFavourites: (job) => {
      dispatch(addToFavouritesAction(job))
    },
  })


const SingleJob = ({job, addToFavourites}) => {
    return(
        
        <div className="d-flex flex-column mr-2 p-2" style={{border: "1px solid grey", minHeight: "200px"}}>
            <h6>{job.title}</h6>
            <Link to={`/${job.company_name}`}>
            <p>{job.company_name}</p>
            </Link>
            <p>{job.category}</p>
            <Button variant="warning" onClick={()=> {addToFavourites(job)}}>Add to favourites <i className="bi bi-star"></i></Button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleJob)