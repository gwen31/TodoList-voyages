import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardDepartments from "./CardDepartments";

const DepartmentsList = () => {
    const [ data, setData ] = useState([]);
    const [textSearch, setTextSearch] = useState("");
    const [resultSearch, setResultSearch] = useState([]);
   
    const [selectedRegion, setSelectedRegion] = useState('');
    const regions = ["Occitanie",
                     "Bretagne", 
                     "Pays de la Loire", 
                     "Nouvelle Aquitaine", 
                     "Provence Alpes-Côte d’Azur", 
                     "Haut de France", 
                     "Normandie",
                     "Ile de France", 
                     "Grand Est", 
                     "Centre-Val de Loire", 
                     "Bourgogne-Franche-Comté", 
                     "Auvergne-Rhône-Alpes",
                     "Outre mer"];

    useEffect(() => {
        axios
            .get("http://localhost:4000/departments")
            .then((res) => setData(res.data));
    }, []);
    
    const onChangeHandler = (textSearch) => {
        let matches = [];
        if (textSearch.length>0) {
            matches = data.filter(dataDpt => {
                const regex = new RegExp(`${textSearch}`, "gi");
                return dataDpt.name.match(regex)
            })
        }
        setResultSearch(matches)
        setTextSearch(textSearch)
    }

    return (
        <div className="container-departments">
            <div className="region-list">
                <ul className="checkbox">
                    {regions.map((region) => {
                        return (
                            <li className="region"key={region}>
                                <input type="radio" name="state" className="state" value={region} id={region}
                                    checked={region === selectedRegion}
                                    onChange={(e) => setSelectedRegion(e.target.value)} />
                                   
                                <label className="label" htmlFor={region}>
                                    <div class="indicator"></div>
                                    <span class="text">{region}</span>
                                </label>
                            </li>
                        )
                    })}
                {selectedRegion && <h5 onClick={() => setSelectedRegion("")}><button>Annuler recherche</button></h5>}
                </ul>
            </div>
            
            <div className="card-departments">
                <div className="search">
                    <input 
                       className="input" type="text" 
                       placeholder='Rechercher un département'
                       onChange={e => onChangeHandler(e.target.value)}
                       value={textSearch}
                     
                    />
                    <img className="logo" src="assets/icon-search.png" alt="logo home" height="25" width="25"/>
                </div>
                
                <div className="department">
                {resultSearch.length > 0 ? ( resultSearch.map((departement) =>
                    <CardDepartments key={departement.id} departement={departement} />
                    )
                    ) : data
                        .filter((departement) => departement.region.includes(selectedRegion))
                        .map((departement) => (
                            <CardDepartments key={departement.id} departement={departement} />
                    ))
                    } 
                    </div>
            </div>
        </div>
      
    )
}

export default DepartmentsList