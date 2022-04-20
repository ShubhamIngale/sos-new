import React from 'react'
import {useRecoilState} from 'recoil'
import {Container, Grid, Button} from '@material-ui/core'
import {BYDTDiv, AboutCtaDiv, BgOverlay, Title} from '../../styles/global/buildYourDreamTeam'
import { Link } from 'react-router-dom'
import {sosBlue, white} from '../../styles/global'
import {enrollPanel} from '../../recoil/atoms'

const BuildYourDreamTeam = ({page}) => {

        const [isLoginPanelOpen, setIsLoginPanelOpen] = useRecoilState(enrollPanel);

        const employerForm = () => {
                const link = 'https://docs.google.com/forms/d/e/1FAIpQLSe2Qud6WxHfR3D6NnmJfUMbMwAyW8DMqYRtTmo8sfXgYLX3dw/viewform'
                window.open(link, '_blank')
              }

        const togglePanel = () => {
                setIsLoginPanelOpen(true);
                const x = window.scrollX;
                const y = window.scrollY;
                window.onscroll = () => window.scrollTo(x, y)
        }


        return (
                <>
                        {
                                (page === 'home') && (
                                        <BYDTDiv>
                                        <Container style={{height: '100%'}}>
                                                <Grid container spacing={2} style={{height: '100%'}}>
                                                                <Grid item xs={12} md={12} style={window.innerWidth > 768 ? {textAlign: 'center', paddingTop: 140} : {textAlign: 'center'}}>
                                                                <Title>Your search end here</Title>
                                                                <Link to='/jobs'>
                                                                        <Button style={{background: `${sosBlue}`, color: `${white}`, marginRight: 16}}>Find a Job</Button>
                                                                </Link>
                                                                <Button style={{background: `${sosBlue}`, color: `${white}`}} onClick={employerForm}>Hire Talent</Button>
                                                        </Grid>
                                                </Grid>
                                                </Container>      
                                        </BYDTDiv>
                                )
                        }
                        {
                                (page === 'about us') && (
                                        <AboutCtaDiv>
                                        <Container style={{height: '100%'}}>
                                                <Grid container spacing={2} style={{height: '100%'}}>
                                                                <Grid item xs={12} md={12} style={window.innerWidth > 768 ? {textAlign: 'center', paddingTop: 140} : {textAlign: 'center'}}>
                                                                <Title>Build your dream team</Title>
                                                                <Link to='/contact'>
                                                                        <Button style={{background: `${sosBlue}`, color: `${white}`, marginRight: 16}}>Contact Us</Button>
                                                                </Link>
                                                                {/* <Button style={{background: `${sosBlue}`, color: `${white}`}} onClick={employerForm}>Hire Talent</Button> */}
                                                        </Grid>
                                                </Grid>
                                                </Container>      
                                        </AboutCtaDiv>
                                )
                        }
                        {
                                (page === 'smart achivers') && (
                                        <AboutCtaDiv>
                                        <Container style={{height: '100%'}}>
                                                <Grid container spacing={2} style={{height: '100%'}}>
                                                                <Grid item xs={12} md={12} style={window.innerWidth > 768 ? {textAlign: 'center', paddingTop: 140} : {textAlign: 'center'}}>
                                                                <Title>Get certified. Get ahead.</Title>
                                                                {/* <Link to='/contact'> */}
                                                                        <Button onClick={togglePanel} style={{background: `${sosBlue}`, color: `${white}`, marginRight: 16}}>Enroll Now</Button>
                                                                {/* </Link> */}
                                                                {/* <Button style={{background: `${sosBlue}`, color: `${white}`}} onClick={employerForm}>Hire Talent</Button> */}
                                                        </Grid>
                                                </Grid>
                                                </Container>   
                                        </AboutCtaDiv>
                                )
                        }
                </>
        )
}

export default BuildYourDreamTeam
