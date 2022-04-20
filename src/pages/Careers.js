import React from 'react'
import Footer from '../components/Footer'
import StartWithUs from '../components/careers/StartWithUs'
import CBanner from '../components/global/CBanner'
import Promise from '../components/careers/Promise'
import Values from '../components/careers/Values'
import HeaderWhite from '../components/HeaderWhite'

const Careers = () => {
        return (
                <>
                     <HeaderWhite active="careers" />   
                     <CBanner page = 'careers' />
                     <StartWithUs />
                     <Promise page={'careers'} />
                     <Values />
                     <Footer />
                </>
        )
}

export default Careers
