import Footer from "../../components/footer/Footer"
import Head from "../../components/Head/Head"
import NaviBar from "../../components/NaviBar/NaviBar"
import SignIn from "../../components/signIn/SignIn"
import "./register.css"

const Register = () => {
  return (
    <div>
      <NaviBar type ="co"/>
      <Head type="list"/>
      <SignIn/>
      <Footer/>
    </div>
  )
}

export default Register