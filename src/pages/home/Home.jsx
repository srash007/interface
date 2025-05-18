/*Home Page*/

import "./home.css"
import NaviBar from "../../components/NaviBar/NaviBar";
import React from "react";
import Head from "../../components/Head/Head";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/PropertityList/PropertyList";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";


const Home = ()=> {
    return(
        <div>
            <NaviBar/>
            <Head/>
            <div className="HomeContainer">
                <Featured/>
                <h1 className="homeTitle">Rechercher par ville</h1>
                <PropertyList/>
                <h1 className="homeTitle">Les plus appréciés</h1>
                <FeaturedProperties/>
                <Footer/>
            </div>

            </div>
    )
}
export default Home;