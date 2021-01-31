import React from 'react'
import BuildYourDreamTeam from '../components/global/BuildYourDreamTeam'
import Banner from '../components/home-page/Banner'
import BusinessSolutions from '../components/home-page/BusinessSolutions'
import Expertise from '../components/home-page/Expertise'
import RightAgency from '../components/home-page/RightAgency'
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
        return (
                <> 
                        <Header />
                       <Banner />
                       <BusinessSolutions />
                       <RightAgency />
                       <Expertise />
                       <BuildYourDreamTeam p="home" />
                       <Footer />
                </>
        )
}

export default Home
