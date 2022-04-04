import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"


const CompanyJobs = () => {

    const params = useParams()

    const [companyJobs, setcompanyJobs] = useState(undefined)

    const httpFetch = `${process.env.REACT_APP_LOCAL}?company=${params.company}`

    const fetchJobs = async () => {
        try {
          const response = await fetch(httpFetch);
          const data = await response.json();
          console.log(data.data)
         setcompanyJobs(data.data)
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(()=> {
        fetchJobs()
    }, [])
    return(
        <><Link to={`/`}><div style={{textDecoration:"none", color:"red"}}><i className="bi bi-arrow-90deg-left ml-2 mt-2" style={{fontSize: "25px"}}></i> back</div></Link>{companyJobs && <> <h2 className="mt-2" style={{textAlign: 'center'}}> Company "{ params.company}" offers these jobs:</h2>
        <Row className="m-2 mt-4">
            
            {companyJobs && companyJobs.map((job) => (
            <Col className="mb-2"key={job._id} md={3}>
                <div className="d-flex flex-column mr-2 p-2" style={{border: "1px solid grey", minHeight: "110px"}}>
                    <h6>{job.title}</h6>
                    <p>{job.company_name}</p>
                </div>
            </Col>))}
        </Row> </>}</>
    )
}

export default CompanyJobs