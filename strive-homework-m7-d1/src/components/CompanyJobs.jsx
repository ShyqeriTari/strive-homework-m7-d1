import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import SingleJob from "./SingleJob"
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
  jobss: state.jobs.favourites,
})

const mapDispatchToProps = (dispatch) => ({
 
})


const CompanyJobs = ({jobss}) => {

    const params = useParams()

    const [companyJobs, setcompanyJobs] = useState(undefined)

    const httpFetch = `${process.env.REACT_APP_LOCAL}?company=${params.company}`

    const fetchJobs = async () => {
        try {
          const response = await fetch(httpFetch);
          const data = await response.json();
         setcompanyJobs(data.data)
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(()=> {
        fetchJobs()
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <><Link to={`/`}><div style={{textDecoration:"none", color:"red"}}><i className="bi bi-arrow-90deg-left ml-2 mt-2" style={{fontSize: "25px"}}></i> Homepage</div></Link>
         <Link to={`/favourites`}>
        <div>
     <i className="bi bi-star" style={{backgroundColor: "yellow", fontSize: "30px", marginLeft:"90%"}}></i>
      {jobss.length}
     </div>
     </Link>
        {companyJobs && <> <h2 className="mt-2" style={{textAlign: 'center'}}> Company "{ params.company}" job offers:</h2>
        <Row className="m-2 mt-4">
            
            {companyJobs && companyJobs.map((job) => (
              <Col className="mb-2" md={3} key={job._id}>
            <SingleJob  job={job}/>
            </Col>))}
        </Row> </>}</>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyJobs)