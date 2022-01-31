import axios from 'axios';
import React from 'react'
import { useState, useEffect } from "react";

function CardLocation(props) {
    const { location, id } = props;
    const [isVisited, setIsVisited] = useState(false)
    const [detailData, setDetailData ] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/locations/${id}/details`)
            .then((res) => setDetailData(res.data));
    },[id]);
   
    const handleDelete = () => {
        axios
            .delete(`${process.env.REACT_APP_API_URL}/locations/${id}`);
    }

    const handleVisitedChange = () => {
        axios
            .put(`${process.env.REACT_APP_API_URL}/locations/${id}`, {
                name: location.name,
                departments_id: location.departments_id,
                visited: isVisited
            })
            .then(() => {
               setIsVisited(!isVisited);
                
              })
              .catch((err) => {
                console.log(err)
              })           
    }
    console.log(location)

    return (
        <>
        <div className='card-location'>
            <h4 style={location.visited ? { color: 'green' }  :  {color: '#010102'}}>{location.name}</h4>
            {detailData?.length && detailData.map((detail) => (
                 <p>{detail.type}</p>
                 ))}  
       
         <div className="container-button">
            <button className="map" 
                  onClick={""}>
                      <img src="/assets/icon-map.png" alt="icon map" height="35" width="35" />
            </button>
            <button className="check" 
                  onClick={()=> handleVisitedChange(setIsVisited)}>
                      <img src="/assets/icon-check.png" alt="icon check" height="35" width="35" />
            </button>
            <button className="delete" 
                  onClick={() => {
                    if (window.confirm("Voulez-vous supprimer ce lieu ?"))
                        handleDelete();
                      
            }}>
                      <img src="/assets/icon-delete.png" alt="icon delete" height="35" width="35" />
            </button>
         </div> 
         </div> 
        </>
       
       
    )
}

export default CardLocation


 //const handleVisitedChange = useCallback(() => setIsVisited((c) => !c) ,[])