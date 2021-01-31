import React from 'react'
import ContactUs from '../components/contact/ContactUs'
import CBanner from '../components/global/CBanner'
import HeaderWhite from '../components/HeaderWhite'
import Footer from '../components/Footer'

const Contact = () => {
        return (
                <div>
                        <HeaderWhite active="contact" />
                        <CBanner />
                        <ContactUs />
                        <Footer />
                </div>
        )
}

export default Contact