import React from 'react';

const Expert = ({Expert}) => {
    const {img, name} = Expert;
    return (
        <div class="card col-12 col-md-6 col-lg-4" style={{width: "18rem"}}>
        <img class="card-img-top" src={img} alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
};

export default Expert;