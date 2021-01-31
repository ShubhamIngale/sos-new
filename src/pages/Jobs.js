import React from 'react'
import Footer from '../components/Footer'
import HeaderWhite from '../components/HeaderWhite'
import Banner from '../components/jobs/Banner'
import JobsList from '../components/jobs/JobsList'

const Jobs = () => {

        return (
                <div>
                        <HeaderWhite active="jobs" />
                        <Banner />
                        <JobsList />
                        <Footer />  
                </div>
        )
}

export default Jobs
