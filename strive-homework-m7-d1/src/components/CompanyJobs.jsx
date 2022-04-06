import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import SingleJob from "./SingleJob"


const CompanyJobs = () => {

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
        <><Link to={`/`}><div style={{textDecoration:"none", color:"red"}}><i className="bi bi-arrow-90deg-left ml-2 mt-2" style={{fontSize: "25px"}}></i> HomePage</div></Link>
        {companyJobs && <> <h2 className="mt-2" style={{textAlign: 'center'}}> Company "{ params.company}" job offers:</h2>
        <Row className="m-2 mt-4">
            
            {companyJobs && companyJobs.map((job) => (
            <SingleJob key={job._id} job={job}/>))}
        </Row> </>}</>
    )
}

export default CompanyJobs