import { useNavigate } from "react-router-dom";
import "./NaviBar.css"


const NaviBar = ({type})=> {

  const navigate = useNavigate();
  const handleConnexion = () => {
    navigate("/connexion");
  };
  const handleRegister = () => {
    navigate("/register");
  };
    return(
        <div className="navibar">
        <div className="naviContainer">
          <span className="logo">RAWBooking</span>
          <div className="navItems">
            {type !== "co" && (
              <>
            <button className="naviButton" onClick={handleRegister}>
              <span>S'enregistrer</span> 
              </button>
            <button className="naviButton" onClick={handleConnexion}>
              <span>Se Connecter</span>
            </button>
</>)}</div>
        </div>
        </div>
      
    )
}
export default NaviBar;