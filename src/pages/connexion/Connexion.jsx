import "./connexion.css"
import NaviBar from "../../components/NaviBar/NaviBar"
import Head from "../../components/Head/Head"
import SignUp from "../../components/signUp/SignUp"
import Footer from "../../components/footer/Footer"

const Connexion = () => {
  return (
    <div>
      <NaviBar type = "co"/>
      <Head type="list"/>
      <SignUp/>
      <Footer/>
    </div>
  )
}

export default Connexion