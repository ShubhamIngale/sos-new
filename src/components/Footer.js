import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Grid} from '@material-ui/core'
import {FooterDiv, FooterList, FooterTitle, Para, ParaRight} from '../styles/footer'
import twitterIcon from '../assets/global/Twitter.svg'
import facebookIcon from '../assets/global/Facebook.svg'
import linkedinIcon from '../assets/global/LinkedIn.svg'
import instaIcon from '../assets/global/Instagram.svg'

const Footer = () => {
        return (
                <FooterDiv>
                        <Container>
                                <Grid container spacing={2}>
                                        <Grid item xs={12} sm={3}>
                                                <FooterTitle>Solutions</FooterTitle>
                                                <ul>
                                                        <FooterList><Link to="/">Permanent Staffing</Link></FooterList>
                                                        <FooterList><Link to="/">Talent Mapping</Link></FooterList>
                                                        <FooterList><Link to="/">Project Based Hiring</Link></FooterList>
                                                        <FooterList><Link to="/">Global Sourcing</Link></FooterList>
                                                        <FooterList><Link to="/">Recruiter Training Program</Link></FooterList>
                                                </ul>
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                                <FooterTitle>Programs</FooterTitle>
                                                <ul>
                                                        <FooterList><Link to="/smart-achivers">Smart Achivers</Link></FooterList>
                                                        <FooterList><Link to="/PGPLI">PGPLI</Link></FooterList>
                                                </ul>
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                                <FooterTitle>Company</FooterTitle>
                                                <ul>
                                                        <FooterList><Link to="/about-us">About Us</Link></FooterList>
                                                        <FooterList><Link to="/careers">Join the Team</Link></FooterList>
                                                </ul>
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                                <FooterTitle>Contacts</FooterTitle>
                                                <ul>
                                                        <FooterList>
                                                                252F Ground Floor, Iskcon Mandir Road,
                                                                Sant Nagar ,East of Kailash,<br/>
                                                                New Delhi -110065 (India)
                                                        </FooterList>
                                                        <FooterList>
                                                                <b>General Enquiry:</b><br/>
                                                                <a href="mailto:info@switchonsuccess.in">hr@switchonsuccess.in</a><br/>
                                                                <a href="tel:+919810693347">+91 9999333901</a>
                                                        </FooterList>
                                                        <FooterList>
                                                                <b>Business Enquiry:</b><br/>
                                                                <a href="mailto:info@switchonsuccess.in">info@switchonsuccess.in</a><br/>
                                                                <a href="tel:+919810693347">+91 9810693347</a>
                                                        </FooterList>
                                                        {/* <FooterList>
                                                                <b>Email:</b><br/>
                                                                <a href="mailto:info@switchonsuccess.in">info@switchonsuccess.in</a>
                                                        </FooterList>
                                                        <FooterList>
                                                                <b>Phone:</b><br/>
                                                                <a href="tel:+919810693347">+919810693347</a>
                                                        </FooterList> */}
                                                        <div style={{marginTop: 20}}>
                                                                <a href="https://www.linkedin.com/company/switchonsuccess-india/" target="_blank"><img src={linkedinIcon} width='32px' style={{marginRight: 8}} /></a>
                                                                <a href="https://www.facebook.com/switchOnSuccessIndia" target="_blank"><img src={facebookIcon} width='32px' style={{marginRight: 8}} /></a>
                                                                <a href="https://www.instagram.com/switchonsuccessindia/" target="_blank"><img src={instaIcon} width='32px' style={{marginRight: 8}} /></a>
                                                                <a href="https://twitter.com/switch_success" target="_blank"><img src={twitterIcon} width='32px' /></a>
                                                        </div>
                                                </ul>
                                        </Grid>
                                        {/* <Grid item xs={12} sm={3}>
                                                <FooterTitle>Follow us on</FooterTitle>
                                                <div style={{marginTop: 20}}>
                                                        <a href="https://www.linkedin.com/company/careerbest-consultant/" target="_blank"><img src={linkedinIcon} width='32px' style={{marginRight: 8}} /></a>
                                                        <a href="https://www.facebook.com/CareerbestConsultant" target="_blank"><img src={facebookIcon} width='32px' style={{marginRight: 8}} /></a>
                                                        <a href="https://www.instagram.com/careerbest.consultant/" target="_blank"><img src={instaIcon} width='32px' style={{marginRight: 8}} /></a>
                                                        <a href="#"><img src={twitterIcon} width='32px' /></a>
                                                </div>
                                        </Grid> */}
                                        <hr width="100%" style={{marginTop: 62, marginBottom: 50}} />
                                        <Grid item xs={12} sm={6}>
                                                <Para>© 2020 Switch On Success. All Rights Reserved</Para>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                                <ParaRight>Website designed & developed by <a href="https://fistbumpdigital.com" target="_blank" style={{textDecoration: 'underline'}}>Fistbump Digital</a></ParaRight>
                                        </Grid>
                                </Grid>
                        </Container> 
                </FooterDiv>
        )
}

export default Footer