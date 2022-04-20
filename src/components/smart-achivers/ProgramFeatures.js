import React from 'react'
import {Container, Grid} from '@material-ui/core'
import {PFDiv, Title} from '../../styles/smart-achivers/programFeatures'
import featuresIllustration from '../../assets/smart-achivers/Program-Features-Icons/program-features-illustration.svg'
import onSiteTraining from '../../assets/smart-achivers/Program-Features-Icons/on-site-training.svg'
import residentialProgram from '../../assets/smart-achivers/Program-Features-Icons/residential-program.svg'
import sixMonthInternship from '../../assets/smart-achivers/Program-Features-Icons/six-month-internship.svg'
import VLC from '../../assets/smart-achivers/Program-Features-Icons/VLC.svg'

function ProgramFeatures({page}) {

        const featuresList = [
                {
                        icon: VLC,
                        alt: 'VLC',
                        desc: 'Two-month Virtual Learning Classroom (VLC)'
                },
                {
                        icon: residentialProgram,
                        alt: 'Residential program',
                        desc: 'Two-month residential program  with a monthly stipend of INR 2,500.*'
                },
                {
                        icon: onSiteTraining,
                        alt: 'on site training',
                        desc: 'Two-month on-site training with a monthly stipend of INR 2,500.*'
                },
                {
                        icon: sixMonthInternship,
                        alt: 'internship',
                        desc: 'Six-month internship with a monthly stipend of INR 16,000.*'
                }
        ]
        const pgpliFeaturesList = [
                {
                        icon: VLC,
                        alt: 'VLC',
                        desc: 'Two-month online program from the comfort of your home.'
                },
                {
                        icon: residentialProgram,
                        alt: 'Residential program',
                        desc: 'Two-month on-the-job training (OJT) with a INR 2,500* monthly stipend.'
                },
                {
                        icon: sixMonthInternship,
                        alt: 'internship',
                        desc: 'Seven month internship with a monthly stipend of INR 15,100.* You are eligible for performance-based sales incentives too.'
                }
        ]

        return (
                <PFDiv>
                        <Container>
                                <Grid container spacing={2}>
                                        <Grid item xs={12} md={6}>
                                                <Title>Program features</Title>
                                                <ul>
                                                        {
                                                                (page === 'pgpli') ?
                                                                pgpliFeaturesList.map((item, i) => (
                                                                        <li style={{display: 'flex', alignItems: 'center', marginBottom: 32}} key={i}>
                                                                                <div>
                                                                                        <img src={item.icon} alt={item.alt} />
                                                                                </div>
                                                                                <div style={{paddingLeft: 16, paddingRight: 50}}>
                                                                                        <p>{item.desc}</p>
                                                                                </div>
                                                                        </li>
                                                                )) :
                                                                featuresList.map((item, i) => (
                                                                        <li style={{display: 'flex', alignItems: 'center', marginBottom: 32}} key={i}>
                                                                                <div>
                                                                                        <img src={item.icon} alt={item.alt} />
                                                                                </div>
                                                                                <div style={{paddingLeft: 16, paddingRight: 50}}>
                                                                                        <p>{item.desc}</p>
                                                                                </div>
                                                                        </li>
                                                                ))
                                                        }
                                                </ul>
                                        </Grid>
                                        <Grid item xs={12} md={6} style={{display: 'flex', alignItems: 'center'}}>
                                                <img src={featuresIllustration} alt="program features" width="100%" />
                                        </Grid>
                                </Grid>
                        </Container>
                </PFDiv>
        )
}

export default ProgramFeatures
