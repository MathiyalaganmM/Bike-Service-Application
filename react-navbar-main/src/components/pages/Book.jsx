import {useState,React} from "react";
import './Login.css'
import './Book.css'
import {email} from './Login'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


export const Book = () => {
    
    const finalBooking=(name)=>{
        toast.success(`Your service for ${name} has been succesfully booked.`)
      }
      const bData = async (data) => {
        try {
           await axios.post('http://localhost:3000/book', data);
        } catch (error) {
           console.error(error);
        }
       };
    
    const [selectedOption, setSelectedOption] = useState('Select an option');
    const [number,setNumber]=useState('')
    const [date,setDate]=useState('')

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSubmit=(e)=>{
      e.preventDefault()
      const book1={number,date,selectedOption,email}
      console.log(book1)
      finalBooking(selectedOption)
      setDate('')
      setNumber('')
      setSelectedOption('')
      bData(book1)
  }
  return (
  <div>
    <ToastContainer/>
    <div className="form-modal">
        <h1>BOOK</h1>
        <form onSubmit={handleSubmit}>

            <input placeholder="Bike Number" type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <input placeholder="Enter Date" type="Date" value={date} onChange={(e)=>setDate(e.target.value)}/>
            {/* <label htmlFor="dropdown">Select an option:</label> */}
            <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
            <option value="Wheel Adjustment">Wheel Adjustment</option>
            <option value="Engine Servicing">Engine Servicing</option>
            <option value="Cooling Service">Cooling Service</option>
            <option value="Brake Service">Brake Service</option>
            <option value="Washing Service">Washing Service</option>
            <option value="Tyre Service">Tyre Service</option>
      </select><br/>
            <button type="submit" id="submit" className="btn signup">Submit</button>
        </form>
    </div>
  </div>  
  
  );
};