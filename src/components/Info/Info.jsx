import "./info.css"
import React, { useEffect, useState } from "react";
import {Container} from 'react-bootstrap'
import { toast } from "react-toastify";
import axios from "axios";
const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [rentings, setRentings] = useState([])


 
  

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    async function fetchRentings() {
      const response = await axios.get("/profile");
      setRentings(response.data);
    }

    fetchRentings();
  }, []);

  
          
  

  return (
    <React.Fragment>
      <Container>
      <h1 className="mt-5">Profil</h1>
      <h2>Bienvenue sur votre profil {name}</h2>
      <div className="row">
          <div className="col-sm-8 text-success">
            <h5 className="p-3 fw-bold text-white">
              Votre historique de reservation
            </h5>
              <table className="table table-bordered text-white">
                <thead>
                  <tr>
                  <th>Hotel</th>
                  <th>Durée du Sejour</th>
                  </tr>
                </thead>
                <tbody>
                {rentings.map((renting) => (
            <tr key={renting.rent_id}>
              <td>{renting.rent_id}</td>
              <td>{renting.check_in}</td>
              <td>{renting.check_out}</td>
            </tr>
          ))}
                </tbody>

              </table>

      
      
      <button onClick={e => logout(e)} className="btn btn-primary">
        Logout
      </button>
      </div>
      </div>
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;