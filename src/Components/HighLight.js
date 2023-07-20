import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardStack.css'; // Fichier CSS personnalisé pour définir la couleur des cartes

const HighLight = () => {
  return (
    <div className="container color-light">
        <p className="card-text ">  HighLight</p>
      <div className="row">
        <div className="col-md-3">
          <div className="card rounded-200 custom-card-color">
            <div className="card-body">
              <p className="card-title">Card 1</p>
              <div className='row card-text'> <p  className='col-md-3'>56 </p>     <p className='temp'> Temperature special </p></div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card rounded-200 custom-card-color">
            <div className="card-body">
            <p className="card-title">Card 1</p>
              <div className='row card-text'> <p  className='col-md-3'>56 </p>     <p className='temp'> Temperature special </p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-3">
          <div className="card rounded-200 custom-card-color">
            <div className="card-body">
            <p className="card-title">Card 1</p>
              <div className='row card-text'> <p  className='col-md-3'>56 </p>     <p className='temp'> Temperature special </p></div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card rounded-200 custom-card-color">
            <div className="card-body">
            <p className="card-title">Card 1</p>
              <div className='row card-text'> <p  className='col-md-3'>56 </p>     <p className='temp'> Temperature special </p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighLight;
