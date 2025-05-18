import "./signIn.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";





const SignIn = ({setAuth}) => {
    const [inputs, setInputs] = useState(
        {
          CustomerID : "",
          FirstName : "",
          LastName : "",
          DOB : "",
          aE : "",
          NAS : "",
          password : ""
  
        }
      )
    const { CustomerID, FirstName,LastName,DOB, aE,NAS, password} = inputs
    const today = new Date()
    const yyyy = today.getFullYear()
    let mm = today.getMonth()
    let dd = today
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const DOR = yyyy + '-' + mm + '-' + dd;
    const onChange = e => setInputs({...inputs,[e.target.name] : e.target.value })

    const handleRegister = async e  =>{
        e.preventDefaults()
        try {
          const body = { CustomerID, FirstName,LastName,DOB, aE,NAS,DOR, password };
          const response = await fetch(
            "http://localhost:4000/authentication/register",
            {
              method: "POST",
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify(body)
            }
          );
          const parseRes = await response.json()
    
          if (parseRes.jwtToken) {
            localStorage.setItem("token", parseRes.jwtToken)
            setAuth(true);
            toast.success("Register Successfully");
          } else {
            setAuth(false);
            toast.error(parseRes);
          }
        } catch (err) {
          console.error(err.message);
        }
    }
    
      

  return (
    
    
      <div className="SignIn">
        <div className="sighUpContainer">
        <form onSubmit={handleRegister}>
        <div className="signUpTitle">
          Nom d'utilisateur
          <input
          type="text"
          name="CustomerID"
          placeholder="Saisir votre nom d'utilisateur"
          className="signUpInput"
          value={CustomerID}
          onChange={e => onChange(e) }
          /> 
        </div>
        <div className="signUpTitle">
          Nom
          <input
          type="text"
          name = "LastName"
          placeholder="Saisir votre nom "
          className="signUpInput"
          value={LastName}
          onChange={(e) => onChange(e)}
          /> 
        </div><div className="signUpTitle">
          Prénom
          <input
          type="text"
          name = "FirstName"
          placeholder="Saisir votre nom d'utilisateur"
          className="signUpInput"
          value={FirstName}
          onChange={(e) => onChange(e)}
          /> 
        </div><div className="signUpTitle">
          Date de Naissance
          <input
          type="date"
          name = "DOB"
          placeholder="Saisir votre date de naissance"
          className="signUpInput"
          value={DOB}
          onChange={(e) => onChange(e)}
          /> 
        </div><div className="signUpTitle">
          Adresse Email
          <input
          type="email"
          name = "aE"
          placeholder="Saisir votre E-Mail"
          className="signUpInput"
          value={aE}
          onChange={(e) => onChange(e)}
          /> 
        </div>
        <div className="signUpTitle">
          Mot de passe
          <input
          type ={'password'}
          name = "password"
          placeholder="Saisir votre mot de passe"
          className="signInInput"
          value={password}
          onChange={(e) => onChange(e)}
          />
        
        </div>
        
        <div />
        
            </form>
        <Link to="/connexion">S'enregistrer</Link>
        </div>
      </div>
      
    
  )
}

export default SignIn