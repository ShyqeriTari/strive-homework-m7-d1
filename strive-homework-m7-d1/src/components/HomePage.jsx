import { useState , useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import SingleJob from "./SingleJob"

const HomePage = () => {

    const [jobSearch, setJobSearch] = useState(null)

    const [position, setPosition] = useState(null)

    const [jobs, setJobs] = useState(undefined)

    const httpFetch = (off) => `${process.env.REACT_APP_LOCAL}?search=${jobSearch}&limit=10&offset=${off}`

    const fetchJobs = async (off) => {
        try {
          const response = await fetch(httpFetch(off));
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
<Button onClick={()=> {fetchJobs("0"); setPosition(0)} }>GO!</Button>
 </div>
        </div>{jobs ?<> <h2 className="mt-2" style={{textAlign: 'center'}}> Jobs including "{ jobSearch}":</h2>
        <Row className="m-2 mt-4">
            
            {jobs && jobs.map((job) => (
           <SingleJob key={job._id} job={job}/>))}
        </Row> 
        <div className=" d-flex w-50 justify-content-between m-auto" style={{color: 'darkcyan', fontSize:"20px"}} >
        <p className={position === 0 ? "pointer borderB" : "pointer"} onClick={()=> {fetchJobs("0"); setPosition(0) }}>0</p>
            <p className={position === 10 ? "pointer borderB" : "pointer"} onClick={()=> {fetchJobs("10"); setPosition(10)}}>1</p>
        <p className={position === 20 ? "pointer borderB" : "pointer"}  onClick={()=> {fetchJobs("20"); setPosition(20) }}>2</p>
        <p className={position === 30 ? "pointer borderB" : "pointer"} onClick={()=> {fetchJobs("30"); setPosition(30)}}>3</p>
        <p className={position === 40 ? "pointer borderB" : "pointer"} onClick={()=> {fetchJobs("40"); setPosition(40) }}>4</p>
        <p className={position === 50 ? "pointer borderB" : "pointer"} onClick={()=> {fetchJobs("50"); setPosition(50)}}>5</p>
        </div></>:
        <h3 className="mt-3" style={{textAlign:"center"}}>...Perform search to display job offer...</h3>
       
}
        </div>
    )
}

export default HomePage