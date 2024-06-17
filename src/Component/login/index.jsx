import { useEffect, useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login=()=>{

    const navigate=useNavigate();

    const token = Cookies.get("jwtToken");
    

    const[allValues,setValuse]=useState({
        username:"",
        password:"",
        showErrorMsg:false,
        errorMsg:""
       
    });

    const onSubmitUserDetails =async(e)=>{
      e.preventDefault();
    
    const url="https://apis.ccbp.in/login"

    const userDetails ={
        username : allValues.username,
        password : allValues.password
    }

    const option ={
        method: 'POST',
       body: JSON.stringify(userDetails)

    }
     
    const response = await fetch(url,option)
    const fetchData =await response.json();
    console.log(response);
    console.log(fetchData);
  
    if (response.ok===true) {
        setValuse({...allValues,showErrorMsg:false});
        navigate("/");
        Cookies.set("jwtToken",fetchData.jwt_token);
    } else {
        setValuse({...allValues,showErrorMsg:true,errorMsg:fetchData.error_msg});
    }
 
}

    const onChangeUsername = (e)=>{
     setValuse({...allValues,username:e.target.value})
    }
    
    const onChangePassword = (e)=>{
        setValuse({...allValues,password:e.target.value})
       }

       useEffect(()=>{
        if (token!== undefined) { 
            navigate("/");
        }
       })
    
    return(
  <div className='login-cont'>
    <form className='form-cont' onSubmit={onSubmitUserDetails}>
        <div className='img-cont'>
            <img 
            className='web-logo'
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png" 
            alt="wesite-logo" />
        </div>

        <div className='mb-3' >
            <label htmlFor="exampleInputEmail1" className='form-lable'>
                Username
            </label>

            <input type="text"
            className='form-control'
            id="exampleInputEmail1" 
            aria-describedby='emailHelp'
            onChange={onChangeUsername}/>

            <div id='emailHelp' className='form-text'>
              we'll never share your email with anyone else.
            </div>
        </div>

        <div className='mb-3'>
         <label htmlFor="exampleInputPassword1" className='form-labl'>
            Password
         </label>

         <input type="password"
         className='form-control'
         id='exampleInputPassword1'
         onChange={onChangePassword}/>
        </div>

        <button type='submit' className='btn btn-primary'>
            Submit
            </button>
        {allValues.showErrorMsg?<p className='text-danger'>{allValues.errorMsg}</p>: null}
    </form>

  </div>
    )
}
export default Login;