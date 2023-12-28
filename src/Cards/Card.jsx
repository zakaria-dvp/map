import React from "react";
import './Card.css'
export const Card = ({Data}) =>{
    
    return(
        <>
    {Data.map(item => ( 
   <div className="card" key = {item.name}>
  <img src={item.image}/>
  <div className="card-body">
    <h5 className="card-title">{item.image}</h5>
    <p className="card-text">{item.job}</p>
    <a href="#" className="btn btn-primary">{item.city}</a>
  </div>
</div>
))
}
</>
)}