import React from "react";
import './Login.css'
import { useState,useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export var email='', Login = () => {
  const navigateToAnotherPage = () => {
    // Change the URL to the desired path
    window.location.href = '/Admin';
  };

  const create=()=>{
    toast.success("Your account has been created succesfully. Move to Login page")
  }
  const userlogin=(name)=>{
    toast.success(`Hi ${name}.You have been succesfully logged in.`)
  }
  const [text,setText]=useState(false)
  const [admin,setAdmin]=useState(false)
  const submitData = async (data) => {
    try {
       await axios.post('http://localhost:3000/add-user', data);
    } catch (error) {
       console.error(error);
    }
   };
   const submitLData = async (data) => {
    try {
       await axios.post('http://localhost:3000/send-email', data);
    } catch (error) {
       console.error(error);
    }
   };

   const [users, setUsers] = useState([]);
   const [adminl,setAdminl]=useState()

   useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get('http://localhost:3000/get');
          setUsers(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      }
  
      fetchData();
   }, []);

   useEffect(() => {
    async function fetchData1() {
      try {
        const response = await axios.get('http://localhost:3000/get-admin');
        setAdminl(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchData1();
 }, []);
   
  function toggleSignup(){
    document.getElementById("login-toggle").style.backgroundColor="#fff";
     document.getElementById("login-toggle").style.color="#222";
     document.getElementById("signup-toggle").style.backgroundColor="#57b846";
     document.getElementById("signup-toggle").style.color="#fff";
     document.getElementById("login-form").style.display="none";
     document.getElementById("signup-form").style.display="block";
 }
 
 function toggleLogin(){
     document.getElementById("login-toggle").style.backgroundColor="#57B846";
     document.getElementById("login-toggle").style.color="#fff";
     document.getElementById("signup-toggle").style.backgroundColor="#fff";
     document.getElementById("signup-toggle").style.color="#222";
     document.getElementById("signup-form").style.display="none";
     document.getElementById("login-form").style.display="block";
 }

  
    
  
  //   //sigup
  
  
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  
    // Event handler for form input changes
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    

    };
  
    // Event handler for form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      // Validate form data and perform signup logic
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
  
      // Perform signup logic (e.g., send data to server)
      console.log(formData);
      submitData(formData)
      create()
      // const {cp,email,password,username}=formData;
      // console.log(email,password,username)
  
      // Reset the form after submission
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    };
  
    const [login,setLogin]=useState(false)
    
    const[flemail,setFlemail]=useState('')
    const [lname,setLname]=useState('')
    const [lpassword,setLpassword]=useState('')
    // Event handler for form input changes
    const handleLsubmit=(e)=>{
        e.preventDefault()
        setLname('')
        setLpassword('')
        setLogin(false)
        setText(true)
        
        for(const obj of users){
          if(obj['name']===lname ||obj['email']===lname){
            if(obj['password']===lpassword){
              email=obj['email']
              const ldata={email,lname}
              submitLData(ldata)
              userlogin(lname)
              setFlemail(email)
              // console.log(lname)
              break;
            }
          }
        }
    }
  
    const [adname,setAdname]=useState('')
    const [adpass,setAdpass]=useState('')
    const handleadminLogin=(e)=>{
      e.preventDefault()
      const adata={adname,adpass}
      console.log(adata)
      if(adname===adminl[0]['name'] && adpass===adminl[0]['password']){
        userlogin(adname)
        navigateToAnotherPage()
      }
      
  }


  
  return (
    <div>
      <ToastContainer/>

    <div className="type">  
    {!admin && <button onClick={()=>{
      setLogin(true)
      setText(false)
    }} >User Login</button>}
    {!login && <button onClick={()=>{
     setAdmin(true)
     setText(false)
    }}>Admin Login</button>}
    </div> 
   
    {admin &&
    <div className="form-modal">
    <div id="login-form">
        <form onSubmit={handleadminLogin}>
            <input 
            type="text" 
            placeholder="Enter email or username"
            required
            value={adname}
            onChange={(e)=>setAdname(e.target.value)}
            />
            <input 
            type="password" 
            placeholder="Enter password"
            required
            value={adpass}
            onChange={(e)=>{setAdpass(e.target.value)}}
            />
            <button type="submit" className="btn login" onClick={()=>{
              setText(true)
              }}>login</button>
            
            <hr/>

        </form>
    </div>
    </div>
      }
   

    {login && 
    
    <div className="form-modal">
    
    <div className="form-toggle">
        <button id="login-toggle" onClick={toggleLogin}>log in</button>
        <button id="signup-toggle" onClick={toggleSignup}>sign up</button>
    </div>

    <div id="login-form">
        <form onSubmit={handleLsubmit}>
            <input 
            type="text" 
            placeholder="Enter email or username"
            required
            value={lname}
            onChange={(e)=>setLname(e.target.value)}
            />
            <input 
            type="password" 
            placeholder="Enter password"
            required
            value={lpassword}
            onChange={(e)=>{setLpassword(e.target.value)}}
            />
            <button type="submit" className="btn login">login</button>
            <p>Forgotten account</p>
            <hr/>

        </form>
    </div>

    <div id="signup-form" >
        <form onSubmit={handleSubmit}>
             <input  
              placeholder="Email Address" 
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              />
            <input 
              type="text" 
              placeholder="Name" 
              name="username"
              value={formData.username} 
              required
              onChange={handleInputChange}/>

              <input 
              type="password" 
              placeholder="Password" 
              required
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              />
            <input 
              type="password" 
              placeholder="Confirm password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
             />
            <button type="submit" className="btn signup" >create account</button>
            
           
        </form>
    </div>

</div>}

{text &&
  <div>
    <br/>
    <br/>
    <p>You have succesfully logged in .Move to home page to explore.</p></div>
}



</div>
  )
};

