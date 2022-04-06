import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import SingleCompany from "./SingleCompany"

const mapStateToProps = (state) => ({
  jobs: state.jobs.favourites,
})

const mapDispatchToProps = (dispatch) => ({
  
})

const Favourites = ({jobs}) => {


    return(
        <><Link to={`/`}><div style={{textDecoration:"none", color:"red"}}><i className="bi bi-arrow-90deg-left ml-2 mt-2" style={{fontSize: "25px"}}></i> Homepage</div></Link>
        <Row className="m-2 mt-4">
             {jobs && jobs.map((job, idx) => (
           <Col className="mb-2" key={idx} md={3}> <SingleCompany  idx={idx} name={job}/>
            </Col>))}
            
        </Row> </>
      
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)