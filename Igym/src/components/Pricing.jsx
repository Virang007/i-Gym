import { Check } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  const pricing =[{
    imgUrl:"/pricing.jpg",
    title:"Month",
    price:1200,
    length:1
  },
  {
    imgUrl:"/pricing.jpg",
    title:"Heal Yearly",
    price:6200,
    length:6
  },{
    imgUrl:"/pricing.jpg",
    title:"Yearly",
    price:11000,
    length:12
  }]
  return (
   <section className='pricing'> 
   <h1>I-Gym Plans</h1>
   <div className="wrapper">
    {
      pricing.map(element=>{
        return (
          <div className="card" key={element.title}>
            <img src={element.imgUrl} alt={element.title} />
            <div className="title">
              <h1>{element.title}</h1>
              <h1>Package</h1>
              <h3>Rs {element.price}</h3>
              <p>For {element.length} Months</p>
              <h1></h1>
            </div>
            <div className="description">
              <p>
                <Check/> Equipment
              </p>
              <p>
                <Check/> All Day Fee Training
              </p>
              <p>
                <Check/> Free Restroom
              </p>
              <p>
                <Check/> 24/7 Skilled Support
              </p>
              <p>
                <Check/> 20 Days Freering Option
              </p>
              <Link to={"/"} >Join Now</Link>
            </div>
          </div>
        )
      })
    }
   </div>
   </section>
  )
}

export default Pricing