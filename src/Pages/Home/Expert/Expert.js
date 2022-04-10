import React from 'react';
import { Link } from 'react-router-dom';

const Expert = ({ Expert }) => {
    const { img, name } = Expert;
    return (
        <div className='g-5 col-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img className='card-img-top' src={img} alt="Cardimagecap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>


    );
};

export default Expert;