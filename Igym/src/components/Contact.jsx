import axios from 'axios';
import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const Contact = () => {
 const [name, setname] = useState("");
 const [email, setemail] = useState("");
 const [message, setmessage] = useState("");
 const [loading, setloading] = useState(false);

 const sendMaile = async (e)=>{
  e.preventDefault();
  setloading(true);
  try {
    const {data} = await axios.post("http://localhost:4000/send/mail",{
      name,
      email,
      message,
    },
    {
      withCredentials:true,
      headers:{"Content-Type":"application/json"}
    });
    setname(""),
    setemail(""),
    setmessage(""),
    toast.success(data.message),
    setloading(false)
  } catch (error) {
    toast.error(error.response.data.message),
    setloading(false)
  }
 }

  return (
   <section className='contact'>
    <form onSubmit={sendMaile}>
      <h1>Contact Us</h1>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e)=>{
          setname(e.target.value);
        }}/>
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e)=>{
          setemail(e.target.value);
        }}/>
      </div>
      <div>
        <label>Message</label>
        <input type="text" value={message} onChange={(e)=>{
          setmessage(e.target.value);
        }} />
      </div>
      <button type='submit' style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px"}} disabled={loading}>
       {loading && <ClipLoader size={20} color='white'/>} Send Mesaage
      </button>
    </form>
   </section>
  )
}

export default Contact