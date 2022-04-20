import React from 'react'
import { Link } from 'react-router-dom';
import {Container, Grid, Button} from '@material-ui/core'
import {PDiv, Title} from '../../styles/home-page/programs'
import {sosBlue, white} from '../../styles/global'
import smartAchiversImg from '../../assets/smart-achivers/one-year-prog.svg'
import PGPLIImg from '../../assets/PGPLI/one-of-kind.svg'

function Programs() {
        return (
                <PDiv>
                        <Container>
                                <Grid container spacing={1}>
                                        <Grid item xs={12} md={6} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                                <Title>
                                                        Smart Achiever's Program
                                                </Title>
                                                <p style={(window.innerWidth > 768) ? {marginBottom: 32, paddingRight: 50}: {marginBottom: 28}}>
                                                        Launch your insurance career with this year-long program designed by industry experts. Build key skills, develop core competencies, and have access to senior leaders. What’s more, secure an internship that prepares you for your dream job when you graduate.
                                                </p>
                                                <Link to='/smart-achivers'>
                                                        <Button style={{background: `${sosBlue}`, color: `${white}`}}>Know More</Button>
                                                </Link>
                                        </Grid>
                                        <Grid item xs={12} md={6} style={{textAlign: 'right'}}>
                                                <img src={smartAchiversImg} alt="Smart Achivers Program" width= {window.innerWidth < 768 ? "100%" : 'auto'} />
                                        </Grid>
                                </Grid>
                                <Grid container spacing={1} style={{marginTop: 116}}>
                                        <Grid item xs={12} md={6}>
                                                <img src={PGPLIImg} alt="Postgraduate Program in Life Insurance" width= {window.innerWidth < 768 ? "100%" : 'auto'} />
                                        </Grid>
                                        <Grid item xs={12} md={6} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                                <Title>
                                                        Postgraduate Program in Life Insurance
                                                </Title>
                                                <p style={(window.innerWidth > 768) ? {marginBottom: 32, paddingRight: 100}: {marginBottom: 28}}>
                                                        Build your key skills, develop core competencies and technical know-how through on-the-job training, and get mentored by senior professionals.
                                                </p>
                                                <Link to='/PGPLI'>
                                                        <Button style={{background: `${sosBlue}`, color: `${white}`}}>Know More</Button>
                                                </Link>
                                        </Grid>
                                </Grid>
                        </Container> 
                </PDiv>
        )
}

export default Programs
