import React from 'react';
import './Service.css';

const Service = ({Service}) => {
    const {name,img, price,description} = Service;
    return (
        <div className='service'>
            <img src={img} alt='' />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button>book:{name}</button>
        </div>
    );
};

export default Service;