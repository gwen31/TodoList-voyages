import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

function AddLocation() {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment]  = useState(null);

  const [details, setDetails] = useState([]);
  const [selectedDetail, setSelectedDetail]  = useState(null);

  const [ newLocation, setNewLocation] =  useState('');

  //recupère la liste des département pour en sélectionner un
  useEffect(() => {
    axios
        .get(`${process.env.REACT_APP_API_URL}/departments`)
        .then((res) => setDepartments(res.data));
  }, []);
  //récupère la liste des details pour en sélectionner un
  useEffect(() => {
    axios
        .get(`${process.env.REACT_APP_API_URL}/details`)
        .then((res) => setDetails(res.data));
  }, [])

  const handleSubmit = () => {
    axios
    .post('http://localhost:4000/locations', {
      name: newLocation,
      departments_id: selectedDepartment,
      details_id: selectedDetail
    })
    .then(() => {
      setNewLocation('');
      setSelectedDepartment(null)
      setSelectedDetail(null)
    })
    .catch((err) => {
      console.log(err)
    }) 
  }
console.log(newLocation)
console.log(selectedDepartment)
console.log(selectedDetail)

return (
    <div className="container-form">
      <Navigation />
        <h2>Ajouter un lieu</h2>

      <div className="formAddDepartment">
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nouveau lieu:</label>
             <input
                placeholder="Ajouter un lieu"
                onChange={(e) => setNewLocation(e.target.value)}
                id="name"
                type="text"    
              />
            <label htmlFor="department">Département:</label>
              <select onChange={(e) => setSelectedDepartment(e.target.value)}>   
                <option className="placeHolder" selected="selected" >
                  Choisissez un département
                </option>
                {departments && departments.length > 0 &&  departments.map((department) => (
                <option  key={department.id} id= {department.id} value={department.id}>{department.name}</option>
                ))}  
              </select>

              <label htmlFor="details">Détails:</label>
              <select onChange={(e) => setSelectedDetail(e.target.value)}>   
                <option className="placeHolder" selected="selected" >
                  Choisissez un détail du lieu
                </option>
                {details && details.length > 0 &&  details.map((detail) => (
                <option  key={detail.id} id= {detail.id} value={detail.id}>{detail.type} </option>
                ))}  
              </select>
            <button className="addForm" type="submit" >Ajouter</button>
        </form>
      </div>
      <Footer />
  </div>   
)
}
export default AddLocation 