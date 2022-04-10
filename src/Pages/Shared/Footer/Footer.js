import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='container text-center mt-5'>
            <h4>copy right @ {year}</h4>
        </footer>
    );
};

export default Footer;