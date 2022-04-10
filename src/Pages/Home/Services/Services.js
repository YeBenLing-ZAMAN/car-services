import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {

    /* load data from json file  */
    const [services, setservices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setservices(data)); // data loaded
    }, [])
    return (
        <div className='container'>
                <h2 className='text-primary text-center my-5'>our services</h2>
            <div className='row'>
                <div className='services-container'>
                    {
                        services.map(service => <Service key={service.id} Service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;