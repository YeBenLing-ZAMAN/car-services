import React from 'react';
import './Service.css';

const Service = ({Service}) => {
    const {name,img, price,description} = Service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt='' />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>{name}</button>
        </div>
    );
};

export default Service;