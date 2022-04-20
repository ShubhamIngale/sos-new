import React from 'react'
import BuildYourDreamTeam from '../components/global/BuildYourDreamTeam'
import Banner from '../components/about-us/Banner'
import WhoAreWe from '../components/about-us/WhoAreWe'
import WhyChooseUs from '../components/about-us/WhyChooseUs'
import Vision from '../components/about-us/Vision'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Process from '../components/about-us/Process'

const AboutUs = () =>  {
        return (
                <>
                        <Header active="about-us" />
                        <Banner />
                        <WhoAreWe page={'about us'} />
                        <Vision />
                        <WhyChooseUs />
                        <Process />
                        <BuildYourDreamTeam page="about us" />
                        <Footer />
                </>
        )
}

export default AboutUs
