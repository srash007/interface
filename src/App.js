import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Connexion from "./pages/connexion/Connexion";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route/>
        <Route path="/connexion" element={<Connexion/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element = {<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

