import { FaStar } from "react-icons/fa";
import { FaLocationDot ,FaBriefcase } from "react-icons/fa6";
import './index.css'
import { Link } from "react-router-dom";

const DisplayAllJobs=(props)=>{
const {jobsData}=props

return(

    <Link to={`/jobs/${jobsData.id}`}> 
     <li className='jobs-card rounded'>
        
        <div className='web-logo-rating-cont'>
            <img className="job-web-logo" src={jobsData.company_logo_url} alt="" />

            <div className='rating-cont'>
              <h3>{jobsData.title}</h3>
              <FaStar className="rating-icon"/>
              <span>{jobsData.rating}</span>
            </div>
        </div>
        {/*-------------------------------*/}

        <div className="location-ppa-cont">

            <div className="location-empt-cont">
                <FaLocationDot className="me-1"/>
                <span className="me-3">{jobsData.location}</span>
                <FaBriefcase className="me-1"/>
                <span>{jobsData.employment_type}</span>
            </div>
             
             <h6>{jobsData.package_per_annum}</h6>
        </div>
        <hr/>

        <div>
            <h5>Description</h5>
            <p>{jobsData.job_description}</p>
        </div>
     </li>
     </Link>
)
}
export default DisplayAllJobs;