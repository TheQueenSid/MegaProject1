import { Link } from 'react-router-dom';
import './index.css'
import Header from '../Header';

const Home=()=> (
    <div className='home-cont'>
   <Header/>
    <div className='home-content-cont'>
        <h1 className='home-heading'>Find The Job That fits Your Life</h1>
        <p>Millions of people are searching for jobs, salary, information, company reviews.
        Find the job that fits Your ability  and your potential </p>
       
        <Link to="/jobs">
            <button className='btn btn-primary home-btn'>Find Jobs</button>
        </Link>

    </div>
    </div>
)
export default Home;

