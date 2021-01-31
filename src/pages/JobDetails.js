import React from 'react'
import Banner from '../components/about-us/Banner'
import Footer from '../components/Footer'
import HeaderWhite from '../components/HeaderWhite'
import JobInfo from '../components/job-details/JobInfo'

const JobDetails = (props) => {

        const paramInfo = props.match.params;

        return (
                <div>
                        <HeaderWhite active="jobs" />
                        <JobInfo paramInfo={paramInfo} />  
                        <Footer />  
                </div>
        )
}

export default JobDetails
