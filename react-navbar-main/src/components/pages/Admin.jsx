import {React,useState,useEffect} from "react";
import axios from 'axios';
import './Admin.css'

export const Admin = () => {
    const [id,setId]=useState('')
    const [users, setUsers] = useState([]);

   useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get('http://localhost:3000/get-book');
          setUsers(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      }
  
      fetchData();
   }, []);

   const submitData = async (data) => {
    let obj={"id":data}
    try {
       await axios.post('http://localhost:3000/delete', obj);
    } catch (error) {
       console.error(error);
    }
   };

//    const handlesubmit=(e)=>{
//         setId(e.target.value)
//         console.log(id)
//    }
  return (
    <div>
        <div className="admin-first">
        <p>Hello Mathiyalagan. <box-icon type='solid' name='hand'></box-icon> This dashboard provides a comprehensive overview of key metrics, including total services completed, pending service requests, and today's appointments. Quickly track new service requests, monitor inventory levels, and engage with customer data effortlessly.</p>
        </div>
        {/* <div className="admin-second">
            <div className="admin-sf">
                <div>
                <box-icon type='solid' name='hand'></box-icon>
                </div>
                <div>
                    <h1>1</h1>
                    <p>New Order</p>
                </div>
            </div>
            
            <div className="admin-sf">
                <div>
                <box-icon type='solid' name='hand'></box-icon>
                </div>
                <div>
                    <h1>10</h1>
                    <p>Total visited</p>
                </div>
            </div>

            
            
        </div> */}
        <div className="admin-third">
           <h1>Bookings</h1>
           <div >
            {users.map((item) => (
              <div key={item._id} className="user-details">
                <div>
                <p>Email: {item.email}</p>
                <p>Number: {item.number}</p>
                <p>Service: {item.selectedOption}</p>
                <p>Date: {item.date}</p>
                </div>
                <div>
                    <button onClick={(e)=>{
                        setId(item._id)
                        console.log(item._id)
                        submitData(item._id)
                    }}>Completed</button>
                </div>
              </div>
            ))}
       </div>
       </div>
        

    </div> 
    );
};