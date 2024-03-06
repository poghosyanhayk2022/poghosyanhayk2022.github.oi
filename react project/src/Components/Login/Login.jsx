import { useNavigate } from "react-router-dom";
import classes from "../Login/Login.module.css"
import React, { useState } from 'react';

const Login = ()=> {
  const naviagte = useNavigate()
  const [userData, setUserData] = useState({
    userName:'',
    password:''
  })
 
  const handleLogin = () => {
    if (userData.userName.trim() !== '' && userData.password.trim() !== '') {
      localStorage.setItem('userData', JSON.stringify(userData));
      naviagte('/')
    } else {
      alert('Please enter both username and password.');
    }
  };

  const handleChangeUserData = (dataKey, value ) => {
    setUserData({...userData, [dataKey]: value})
  }
  return (
    <div className={classes.inputGroup} >
        <div className={classes.formLogin}>

            <h1>Login</h1>
         <label>
            UserName
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => handleChangeUserData('userName',e.target.value)}
          />
            </label>
            <label htmlFor="">
              location
              <input type="text"
              placeholder="location"
              onChange={(e)=>{handleChangeUserData('location',e.target.value)}}
              />
              
            </label>
            <label>
                password
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => handleChangeUserData('password',e.target.value)}
          />
            </label>
            <label htmlFor="">
               MALE
            <input 
            type="radio"
             name="radio"
            onClick={() => handleChangeUserData('gender', 'male')}  
              />
            </label>
            <label>
            Female
            <input
             type="radio" 
             name="radio"
             onClick={() => handleChangeUserData('gender', 'female')}
             />
            </label>
          <button className={classes.btn} onClick={handleLogin}>Login</button>
        
        </div>
    </div>
  );
}

export default Login;