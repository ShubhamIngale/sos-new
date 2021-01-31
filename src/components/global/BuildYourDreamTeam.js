import React from 'react'
import {Container, Grid, Button} from '@material-ui/core'
import {BYDTDiv, AboutCtaDiv, BgOverlay, Title} from '../../styles/global/buildYourDreamTeam'
import { Link } from 'react-router-dom'
import {sosBlue, white} from '../../styles/global'

const BuildYourDreamTeam = ({p}) => {

        const employerForm = () => {
                const link = 'https://docs.google.com/forms/d/e/1FAIpQLSe2Qud6WxHfR3D6NnmJfUMbMwAyW8DMqYRtTmo8sfXgYLX3dw/viewform'
                window.open(link, '_blank')
              }


        return (
                p ? (
                        <BYDTDiv>
                               <Container style={{height: '100%'}}>
                                       <Grid container spacing={2} style={{height: '100%'}}>
                                                <Grid item xs={12} md={12} style={{textAlign: 'center', paddingTop: 140}}>
                                                       <Title>Your search end here</Title>
                                                       <Link to='/jobs'>
                                                        <Button style={{background: `${sosBlue}`, color: `${white}`, marginRight: 16}}>Find a Job</Button>
                                                       </Link>
                                                       <Button style={{background: `${sosBlue}`, color: `${white}`}} onClick={employerForm}>Hire Talent</Button>
                                               </Grid>
                                       </Grid>
                                </Container>      
                        </BYDTDiv>
                ) : (
                        <AboutCtaDiv>
                               <Container style={{height: '100%'}}>
                                       <Grid container spacing={2} style={{height: '100%'}}>
                                                <Grid item xs={12} md={12} style={{textAlign: 'center', paddingTop: 140}}>
                                                       <Title>Your search end here</Title>
                                                       <Link to='/jobs'>
                                                        <Button style={{background: `${sosBlue}`, color: `${white}`, marginRight: 16}}>Find a Job</Button>
                                                       </Link>
                                                       <Button style={{background: `${sosBlue}`, color: `${white}`}} onClick={employerForm}>Hire Talent</Button>
                                               </Grid>
                                       </Grid>
                                </Container>      
                        </AboutCtaDiv>
                )
        )
}

export default BuildYourDreamTeam
