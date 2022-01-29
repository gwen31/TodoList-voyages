import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CardLocation from './CardLocations';

import Navigation from './Navigation';
import Footer from './Footer';
import Mapping from './Mapping';




const Locations = () => {
  let { id ,} = useParams();
  const [locationData, setLocationData] = useState([]);
  
 
  useEffect(() => {
    axios
        .get(`http://localhost:4000/departments/${id}/locations`)
        .then((res) => setLocationData(res.data));
        
}, [id]);

    return (
        <>
        <Navigation />
        <div className="location">
            </div>
          <div className="container-location">
                {locationData.map((location) => (
                    <CardLocation key={location.id} id={location.id} location={location}/>
                ))}
            </div>
            <div>
                <Mapping />
        </div>
        <Footer />
        </>
    )
}
export default Locations
