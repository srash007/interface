import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


import "./signUp.css"

const SignUp = ({setAuth}) => {
  
  const [inputs, setInputs] = useState({
    CustomerID: "",
    password: ""
  });

  const { CustomerID, password } = inputs;
  const [passwordVisible, setPasswordVisible] = useState(false)
  const onChange = e => setInputs({ ...inputs, [e.target.name]: e.target.value });
  const handleConnexion = async e  =>{
    e.preventDefaults()
    try {
      const body = { CustomerID, password };
      const response = await fetch(
        "http://localhost:4000/authentication/connexion",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
        
    
  return (
    <Fragment>
    <div className="signUp">
      <div className="SignUpContainer">
      <form onSubmit={handleConnexion}>
      <div className="signUpTitle">
        Nom d'utilisateur
        <input
        type="text"
        placeholder="Saisir votre nom d'utilisateur"
        className="signUpInput"
        name="CustomerID"
        value={CustomerID}
        onChange={e => onChange(e)}
        /> 
      </div>
      <div className="signInTitle">
            Mot de Passe
            <input
            type ={ passwordVisible ? 'text' : 'password'}
            placeholder="Veuillez entrer un mot de passe"
            value={password}
            className="signInInput"
            name="password"
            onChange={e => onChange(e)}
            />
            <button onClick={() => setPasswordVisible((prevState) => !prevState)}>
                {passwordVisible? 'Hide' : 'Show'}
            </button>
            <button className="signInBttn" >
            <Link to="/profile">Se connecter</Link>
            </button>
          </div>
          </form>
          </div>
    </div>
    
    </Fragment>
  )
}

export default SignUp






