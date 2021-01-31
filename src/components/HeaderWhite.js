import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {Container, Grid, Button} from '@material-ui/core'
import {black} from '../styles/global'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../assets/logo/logo.svg'
import {HeaderDivWhite, LinkButton, LinkUl, LinkUlList, MobileDiv, MobileList} from '../styles/header'
import twitterIcon from '../assets/global/Twitter.svg'
import facebookIcon from '../assets/global/Facebook.svg'
import linkedinIcon from '../assets/global/LinkedIn.svg'
import instaIcon from '../assets/global/Instagram.svg'

const HeaderWhite = ({active}) => {

        const [menuOpen, setMenuOpen] = useState(false);

        const handleScroll = () => {
                if (window.scrollY > 100) {
                  document.querySelector(".navbar").id = "scroll";
                } else {
                  document.querySelector(".navbar").id = "navbar";
                }
              };

        useState(() => {
                window.addEventListener("scroll", handleScroll);
        }, []);

        const toggleMenu = () => {
                setMenuOpen(!menuOpen)
        }

        const employerForm = () => {
                const link = 'https://docs.google.com/forms/d/e/1FAIpQLSe2Qud6WxHfR3D6NnmJfUMbMwAyW8DMqYRtTmo8sfXgYLX3dw/viewform'
                window.open(link, '_blank')
              }

        return (
                <HeaderDivWhite className="navbar" page={active}>
                        <Container>
                                <Grid container spacing={2}>
                                        <Grid item xs={6} md={3}>
                                                <Link to='/'>
                                                        <img src={logo} width="150px" alt="careerbest consultant" />
                                                </Link>
                                        </Grid>

                                        {
                                                !(window.innerWidth <= 768) ? (
                                                        <Grid item xs={6} md={9}>
                                                                <LinkUl>
                                                                        <LinkUlList><Link to='/jobs' className={active === "jobs" ? "headerLink active" : "headerLink"} style={{color: `${black}`}}>Job seekers</Link></LinkUlList>
                                                                        <LinkUlList><Link to='' onClick={() => employerForm()} className={active === "employers" ? "headerLink active" : "headerLink"} style={{color: `${black}`}}>Employers</Link></LinkUlList>
                                                                        <LinkUlList><Link to='/about-us' className={active === "about-us" ? "headerLink active" : "headerLink"} style={{color: `${black}`}}>About us</Link></LinkUlList>
                                                                        <LinkUlList><Link to='/careers' className={active === "careers" ? "headerLink active" : "headerLink"} style={{color: `${black}`}}>Join our team</Link></LinkUlList>
                                                                        <LinkUlList><Link to='/contact' className={active === "contact" ? "headerLink active" : "headerLink"} style={{color: `${black}`}}>Contact us</Link></LinkUlList>
                                                                        <LinkUlList>
                                                                        {
                                                                                (active === 'jobs') ? 
                                                                                <Link to="#"><Button style={LinkButton}>Login</Button></Link> :
                                                                                <Link to="/jobs"><Button style={LinkButton}>Find a job</Button></Link>
                                                                        }
                                                                        </LinkUlList>
                                                                </LinkUl>
                                                        </Grid>
                                                ) : 
                                                (
                                                        <Grid item xs={6} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                                                <MenuIcon fontSize='large' onClick={() => toggleMenu()} />
                                                        </Grid>
                                                )
                                        }

                                </Grid>
                        </Container>
                        {
                                !(window.innerWidth <= 768) ? null : (
                                        <MobileDiv style={menuOpen ? {width: '100%'}: {width: '0%'}}>
                                                <Container>
                                                        <Grid container spacing={1}>
                                                                <Grid item xs={6}>
                                                                        <img src={logo} width='150px' alt="Careerbest Consultant" />
                                                                </Grid>
                                                                <Grid item xs={6} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                                                        <CloseIcon fontSize='large' onClick={() => toggleMenu()} />
                                                                </Grid>
                                                        </Grid>
                                                        <ul style={{marginTop: 54}}>
                                                                <MobileList><Link to='/jobs' className={active === "jobs" ? "headerLink active" : "headerLink"}>Job seekers</Link></MobileList>
                                                                <MobileList><Link to='' onClick={() => employerForm()} className={active === "employers" ? "headerLink active" : "headerLink"}>Employers</Link></MobileList>
                                                                <MobileList><Link to='/about-us' className={active === "about-us" ? "headerLink active" : "headerLink"}>About us</Link></MobileList>
                                                                <MobileList><Link to='/careers' className={active === "careers" ? "headerLink active" : "headerLink"}>Join our team</Link></MobileList>
                                                                <MobileList><Link to='/contact' className={active === "contact" ? "headerLink active" : "headerLink"}>Contact us</Link></MobileList>
                                                                <MobileList>
                                                                        {
                                                                                (active === 'jobs') ? 
                                                                                <Link to="#"><Button style={LinkButton}>Login</Button></Link> :
                                                                                <Link to="/jobs"><Button style={LinkButton}>Find a job</Button></Link>
                                                                        }
                                                                </MobileList>
                                                        </ul>

                                                        <Grid container spacing={0} style={{width: '50%', position: 'absolute', bottom: 15, left: '51.5%', transform:'translateX(-50%)'}}>
                                                                <Grid item xs="3">
                                                                        <a href="https://www.linkedin.com/company/careerbest-consultant/" target="_blank"><img src={linkedinIcon} width='32px' style={{marginRight: 8}} /></a>
                                                                </Grid>
                                                                <Grid item xs="3">
                                                                        <a href="https://www.facebook.com/CareerbestConsultant" target="_blank"><img src={facebookIcon} width='32px' style={{marginRight: 8}} /></a>
                                                                </Grid>
                                                                <Grid item xs="3">
                                                                        <a href="https://www.instagram.com/careerbest.consultant/" target="_blank"><img src={instaIcon} width='32px' style={{marginRight: 8}} /></a>
                                                                </Grid>
                                                                <Grid item xs="3">
                                                                        <a href="#"><img src={twitterIcon} width='32px' /></a>     
                                                                </Grid>
                                                        </Grid>   
                                                </Container>     
                                        </MobileDiv>
                                )
                        }
                </HeaderDivWhite>
        )
}

export default HeaderWhite
