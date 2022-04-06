import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import SingleJob from "./SingleJob"
import { connect } from 'react-redux'
import { removeFromFavouritesAction } from '../redux/actions'
import { Button } from "react-bootstrap"

const mapStateToProps = (state) => ({
  jobs: state.jobs.favourites,
})

const mapDispatchToProps = (dispatch) => ({
  removeFromFavourites: (index) => {
    dispatch(removeFromFavouritesAction(index))
  },
})

const Favourites = ({jobs, removeFromFavourites}) => {


    return(
        <><Link to={`/`}><div style={{textDecoration:"none", color:"red"}}><i className="bi bi-arrow-90deg-left ml-2 mt-2" style={{fontSize: "25px"}}></i> Homepage</div></Link>
        <Row className="m-2 mt-4">
             {jobs && jobs.map((job, idx) => (
           <Col className="mb-2" md={3}> <SingleJob key={job._id} job={job}/>
            <Button variant="danger" onClick={()=> {removeFromFavourites(idx)}}><i className="bi bi-trash3-fill" ></i></Button></Col>))}
            
        </Row> </>
      
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)