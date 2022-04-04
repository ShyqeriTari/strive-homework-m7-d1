import {  Col } from "react-bootstrap"
import { Link } from "react-router-dom"


const SingleJob = ({job}) => {
    return(
        <Col className="mb-2" md={3}>
        <div className="d-flex flex-column mr-2 p-2" style={{border: "1px solid grey", minHeight: "110px"}}>
            <h6>{job.title}</h6>
            <Link to={`/${job.company_name}`}>
            <p>{job.company_name}</p>
            </Link>
        </div>
    </Col>
    )
}

export default SingleJob