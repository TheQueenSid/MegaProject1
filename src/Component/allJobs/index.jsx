import Header from "../Header";
import Filter from "../filterSection";
import './index.css'
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import DisplayAllJobs from "../displayAllSection";
import { IoSearchOutline } from "react-icons/io5";

const AllJobs=()=> {

    const  token =Cookies.get("jwtToken");

    const[allValues,setValues] = useState({
        jobsList:[],
        serachInput:"",
        empType:[],
        salaryRange:""
    });

    useEffect(()=>{

        const fetchJobsData = async()=>{

            console.log(allValues.empType);

            const url=`https://apis.ccbp.in/jobs?employment_type=${allValues.empType}&minimum_package=${allValues.salaryRange}&search=${allValues.serachInput}`

            const options = {
                method: 'GET',
                headers : {
                    Authorization : `Bearer ${token}`
                }
              }
           const response =await fetch(url,options);
           const jobsData = await response.json();

           if (response.ok === true) {
            setValues({...allValues,jobsList:jobsData.jobs})
           }
        }
        fetchJobsData();
    },[allValues.serachInput,allValues.empType])

    const onChangeSerachInput = (e)=>{
        if (e.key === "Enter") {
            setValues({...allValues,serachInput:e.target.value});
        }
    }

    const  onChangeEmpType = (value,isChecked)=>{
    
        if (isChecked) {
            setValues({...allValues,empType:[...allValues.empType,value]});
        }
        else
        {
            setValues({...allValues,empType:allValues.empType.filter(each=> each!==value)});
        }
     
    }

    return (
        <div>
            <Header></Header>
           <div className="filter-alljobs-cont">

            <div className="filter-cont">
                <Filter empTypeChange = {onChangeEmpType}/>
            </div>

            <div className="display-all-jobs-cont">
                  <IoSearchOutline className="me-3"></IoSearchOutline>
                <input onKeyDown={onChangeSerachInput} type="Serach" className="from-control w-75" />
              <br/>
               <ul>
                {allValues.jobsList.map(each=>
                 <DisplayAllJobs key={each.id} jobsData = {each}/>
                )}
               </ul>
               
            </div>

           </div>

        </div>
    )
}

export default AllJobs;