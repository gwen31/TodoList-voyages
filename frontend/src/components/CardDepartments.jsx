import React from 'react';
import { Link } from 'react-router-dom'

const CardDepartement = (props) => {
    const { departement } = props;
    return (

        <div className="card">
         
              <img className="card__img" src={departement.image} alt="department"  />
              <div className="description">
                <h4>{departement.name}</h4>
                  {/*<p>{departement.region}</p>*/}
              </div>
                    <div className="button">
                    <Link id="RouterNavLink" to={`departments/${departement.id}/locations`}>
                     <button className="list">Liste des lieux</button>
                    </Link>
                    </div>
                    
       </div>
    );
};
export default CardDepartement;