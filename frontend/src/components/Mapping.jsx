import {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer} from 'react-leaflet';

function Mapping() {
  let {id} = useParams();
  const [departmentId, setDepartmentId] = useState([])
  
  useEffect(() => {
    axios
        .get(`${process.env.REACT_APP_API_URL}/departments/${id}`)
        .then((res) => setDepartmentId(res.data));
        
}, [id]);
console.log(departmentId)
const position = [43.959949,4.297637]

    return (
      <div  className='leaflet-container'>
        <MapContainer center={position} zoom={12} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    )
}

export default Mapping