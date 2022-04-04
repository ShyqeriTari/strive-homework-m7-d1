import { useState , useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const HomePage = () => {

    const [jobSearch, setJobSearch] = useState(null)

    const [jobs, setJobs] = useState(undefined)

    const httpFetch = `${process.env.REACT_APP_LOCAL}?search=${jobSearch}&limit=10`

    const fetchJobs = async () => {
        try {
          const response = await fetch(httpFetch);
          const data = await response.json();
         setJobs(data.data)
        } catch (error) {
          console.log(error);
        }
      };


    return(
    <div>
        <div style={{textAlign: 'center'}}>
 <h1 className="mt-2" style={{textAlign: 'center', color: 'green'}}>Job Search</h1>
 <div>
 <input className="w-50" type={"text"} placeholder="search your dream job..." onChange={(e) => setJobSearch(e.target.value)}/>
<Button onClick={()=> fetchJobs()}>GO!</Button>
 </div>
        </div>{jobs ?<> <h2 className="mt-2" style={{textAlign: 'center'}}> Jobs with "{ jobSearch}"</h2>
        <Row className="m-2 mt-4">
            
            {jobs && jobs.map((job) => (
            <Col className="mb-2"key={job._id} md={3}>
                <div className="d-flex flex-column mr-2 p-2" style={{border: "1px solid grey", minHeight: "110px"}}>
                    <h6>{job.title}</h6>
                    <Link to={`/${job.company_name}`}>
                    <p>{job.company_name}</p>
                    </Link>
                </div>
            </Col>))}
        </Row> </>:
        <h3 className="mt-3" style={{textAlign:"center"}}>...Perform search to display job offer...</h3>
       
}
        </div>
    )
}

export default HomePage