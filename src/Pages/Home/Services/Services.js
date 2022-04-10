import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    
/* load data from json file  */
const [services,setservices] = useState([]);
useEffect(()=>{
    fetch('services.json')
    .then(res=>res.json())
    .then(data=>setservices(data)); // data loaded
},[services])
    return (
        <div>
        <h2 className='services-tilte'>our services : {services.length}</h2>
        <div className='services-container'>
        {
            services.map(service => <Service key={service.id} Service={service}></Service>)
        }
        </div>
        </div>
    );
};

export default Services;