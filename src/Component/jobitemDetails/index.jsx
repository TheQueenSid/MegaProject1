import './index.css'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const jobitemDetails=()=>{

    const{id}= useParams();

    const token = Cookies.get("jwtToken");

    useEffect(()=>{

        const fetchJobsDetails = async()=>{

            const url =`https://apis.ccbp.in/jobs/${id}`

            const options = {
                method: 'GET',
                headers : {
                    Authorization : `Bearer ${token}`
                }
              }
          
              const response = await fetch(url,options)
              const fetchData =await response.json();
              console.log(response);
              console.log(fetchData);
        }
        fetchJobsDetails();
    },[])

    return(
            <>
      
      <h1>Jobs Item Details</h1>
      <h1>{id}</h1>

           </>
  
    )
}
export default jobitemDetails