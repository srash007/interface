import Head from "../../components/Head/Head"
import Info from "../../components/Info/Info"
import NaviBar from "../../components/NaviBar/NaviBar"
import Footer from "../../components/footer/Footer"
import TabbedContent from "../../components/tabbedContent/TabbedContent"
import "./profile.css"

const Profile = () => {
  return (
    <div>
        <NaviBar type="co" />
        <Head type="list"/>
        <TabbedContent/>
        <Footer/>
    </div>
  )
}

export default Profile