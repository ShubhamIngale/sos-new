import React from 'react'
import BuildYourDreamTeam from '../components/global/BuildYourDreamTeam'
import Banner from '../components/home-page/Banner'
import BusinessSolutions from '../components/home-page/BusinessSolutions'
import Expertise from '../components/home-page/Expertise'
import RightAgency from '../components/home-page/RightAgency'
import Footer from "../components/Footer";
import Header from "../components/Header";
import SolutionsTwo from '../components/home-page/SolutionsTwo'
import Programs from '../components/home-page/Programs'

const Home = () => {
        return (
                <> 
                        <Header />
                       <Banner />
                       <BusinessSolutions />
                       <RightAgency />
                       <SolutionsTwo />
                       <Expertise />
                       <Programs />
                       <BuildYourDreamTeam page="home" />
                       <Footer />
                </>
        )
}

export default Home
