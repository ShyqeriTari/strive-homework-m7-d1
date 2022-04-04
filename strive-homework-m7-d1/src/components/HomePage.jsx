import { useState , useEffect } from "react"
import { Row, Col, DropdownButton, Dropdown } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import SingleJob from "./SingleJob"

const HomePage = () => {

    const [jobSearch, setJobSearch] = useState(null)

    const [category, setCategory] = useState("Filter by category")

    const [categories, setCategories] = useState(undefined)

    const [jobByCategory, setJobByCategory] = useState(undefined)

    const [position, setPosition] = useState(null)

    const [jobs, setJobs] = useState(undefined)

    const httpFetchSearch = (off) => `${process.env.REACT_APP_LOCAL}?search=${jobSearch}&limit=10&offset=${off}`
    const httpFetchFilter = (off) => `${process.env.REACT_APP_LOCAL}?category=${category}&limit=10&offset=${off}`
    const httpFetchCategories = `${process.env.REACT_APP_LOCAL}/categories`

    const fetchJobs = async (off) => {
        try {
          const response = await fetch(httpFetchSearch(off));
          const data = await response.json();
         setJobs(data.data)
        } catch (error) {
          console.log(error);
        }
      };

      const fetchCategories = async () => {
        try {
          const response = await fetch(httpFetchCategories);
          const data = await response.json();
         setCategories(data)
        } catch (error) {
          console.log(error);
        }
      };

      const fetchSingleCategory = async (off) => {
        try {
          const response = await fetch(httpFetchFilter(off));
          const data = await response.json();
          setJobByCategory(data.data)
        } catch (error) {
          console.log(error);
        }
      };

useEffect(()=> {
    fetchCategories()
}, [])

    return(
    <div>
        <div style={{textAlign: 'center'}}>
 <h1 className="mt-2" style={{textAlign: 'center', color: 'green'}}>Job Search</h1>
 <div>
 <input className="w-50" type={"text"} placeholder="search your dream job..." onChange={(e) => setJobSearch(e.target.value)}/>
<Button onClick={()=> {if(jobSearch!==undefined){fetchJobs("0")}; setPosition(0);if(category!== "Filter by category"){
fetchSingleCategory("0")
}} }>GO!</Button>
 <DropdownButton
      variant="outline-secondary"
      title={category}
      placeholder="Filter by category"
      id="input-group-dropdown-1"
    >{categories && categories.map(cat => 
      <Dropdown.Item onClick={()=> {setCategory(cat)}} key={cat}href="#">{cat}</Dropdown.Item>
    )}
    </DropdownButton>
 </div>
        </div>{jobs || jobByCategory ?<> <h2 className="mt-2" style={{textAlign: 'center'}}> Jobs including "{ jobSearch? jobSearch : category}":</h2>
        <Row className="m-2 mt-4">
            
            {(jobs && category==="Filter by category") && jobs.map((job) => (
           <SingleJob key={job._id} job={job}/>))}
           {(jobs && category!=="Filter by category") && jobs.filter(job => job.category === category).map((job) => (
           <SingleJob key={job._id} job={job}/>))}
           {(jobByCategory && category !=="Filter by category" ) && jobByCategory.map((job) => (
           <SingleJob key={job._id} job={job}/>))}
        </Row> 
        <div className=" d-flex w-50 justify-content-between m-auto" style={{color: 'darkcyan', fontSize:"20px"}} >
        <p className={position === 0 ? "pointer borderB" : "pointer"} onClick={()=> {fetchJobs("0"); setPosition(0) ; if(jobs === undefined && category!== "Filter by category"){
fetchSingleCategory("0")
} }}>0</p>
            <p className={position === 10 ? "pointer borderB" : "pointer"} onClick={()=> {fetchJobs("10"); setPosition(10); if(jobs === undefined && category!== "Filter by category"){
fetchSingleCategory("10")
}}}>1</p>
        <p className={position === 20 ? "pointer borderB" : "pointer"}  onClick={()=> {fetchJobs("20"); setPosition(20); if(jobs === undefined && category!== "Filter by category"){
fetchSingleCategory("20")
} }}>2</p>
        <p className={position === 30 ? "pointer borderB" : "pointer"} onClick={()=> {fetchJobs("30"); setPosition(30); if(jobs === undefined && category!== "Filter by category"){
fetchSingleCategory("30")
}}}>3</p>
        <p className={position === 40 ? "pointer borderB" : "pointer"} onClick={()=> {fetchJobs("40"); setPosition(40); if(jobs === undefined && category!== "Filter by category"){
fetchSingleCategory("40")
} }}>4</p>
        <p className={position === 50 ? "pointer borderB" : "pointer"} onClick={()=> {fetchJobs("50"); setPosition(50); if(jobs === undefined && category!== "Filter by category"){
fetchSingleCategory("50")
}}}>5</p>
        </div></>:
        <h3 className="mt-3" style={{textAlign:"center"}}>...Perform search to display job offer...</h3>
       
}
        </div>
    )
}

export default HomePage