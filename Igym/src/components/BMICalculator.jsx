import React, { useState } from 'react'
import { toast } from 'react-toastify';

const BMICalculator = () => {
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [gender, setgender] = useState("");
  const [bmi, setbmi] = useState("");

  const calculaterBMI = (e) => {
    e.preventDefault();


    if (height || weight || gender) { 
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters*heightInMeters)).toFixed(2);
    setbmi(bmiValue);
    if (bmiValue < 18.5) {
      toast.warning("You are Under-weight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success("You Have Normal-weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning("You are Over-weight");
    } else {
      toast.error("You are  in the obese range");
    }
    }else{
      toast.error("Please enter valid height ,weight and gender.");
      return;
    }

  }
  return <section className='bmi'>
    <h1>BMI Calculater</h1>
    <div className='container'>
      <div className="wrapper">
        <form onSubmit={calculaterBMI} >
          <div>
            <label>Height (cm)</label>
            <input type="number" value={height} onChange={(e)=>setheight(e.target.value)} required />
          </div>
          <div>
            <label>Weight (kg)</label>
            <input type="number" value={weight} onChange={(e)=>setweight(e.target.value)} required />
          </div>
          <div>
            <label>Gender</label>
            <select value={gender} onChange={(e)=>setgender(e.target.value)}>
              <option value="">select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <button type='submit'>Calculater BMI</button>
        </form>
      </div>
      <div className='wrapper'>
        <img src="/bmi.jpg" alt="BMI" />
      </div>
    </div>
  </section>
}

export default BMICalculator