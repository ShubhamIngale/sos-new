import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {Container, Grid, Button, Menu, MenuItem} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../assets/logo/logo.svg'
import {HeaderDiv, LinkButton, LinkUl, LinkUlList, MobileDiv, MobileList, HeaderDivWhite, dropdownList} from '../styles/header'
import twitterIcon from '../assets/global/Twitter.svg'
import facebookIcon from '../assets/global/Facebook.svg'
import linkedinIcon from '../assets/global/LinkedIn.svg'
import instaIcon from '../assets/global/Instagram.svg'
import {lightBlue} from '../styles/global'

const Header = ({active}) => {

        const [menuOpen, setMenuOpen] = useState(false)
        const [anchorEl, setAnchorEl] = useState(null)
        const [isDropdownOpen, setIsDropdownOpen] = useState(false)

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

        const handleClick = (event) => {
                setAnchorEl(event.currentTarget);
        };
        
        const handleClose = () => {
                setAnchorEl(null);
        };

        return (
                <HeaderDiv className="navbar" page={active}>
                        <Container>
                                <Grid container spacing={2}>
                                        <Grid item xs={6} md={3} style={{display: 'flex', alignItems: 'center'}}>
                                                <Link to='/'>
                                                        <img src={logo} alt="careerbest consultant" />
                                                </Link>
                                        </Grid>

                                        {
                                                !(window.innerWidth <= 768) ? (
                                                        <Grid item xs={6} md={9}>
                                                                <LinkUl>
                                                                        <LinkUlList><Link to='/jobs' className={active === "jobs" ? "headerLink active" : "headerLink"}>Job seekers</Link></LinkUlList>
                                                                        <LinkUlList><Link to='#' onClick={handleClick} aria-haspopup="true" className="headerLink">Programs</Link></LinkUlList>
                                                                        <Menu
                                                                                id="programs-menu"
                                                                                anchorEl={anchorEl}
                                                                                keepMounted
                                                                                open={Boolean(anchorEl)}
                                                                                onClose={handleClose}
                                                                                elevation={0}
                                                                        >
                                                                                <MenuItem onClick={handleClose}>
                                                                                        <Link to='/smart-achivers' style={{...dropdownList}}>Smart Achivers</Link>
                                                                                </MenuItem>
                                                                                <MenuItem onClick={handleClose}>
                                                                                        <Link to='/PGPLI' style={{...dropdownList}}>PGPLI</Link>
                                                                                </MenuItem>
                                                                        </Menu>
                                                                        <LinkUlList><Link to='' onClick={() => employerForm()} className={active === "employers" ? "headerLink active" : "headerLink"}>Employers</Link></LinkUlList>
                                                                        <LinkUlList><Link to='/about-us' className={active === "about-us" ? "headerLink active" : "headerLink"}>About us</Link></LinkUlList>
                                                                        <LinkUlList><Link to='/careers' className={active === "careers" ? "headerLink active" : "headerLink"}>Join our team</Link></LinkUlList>
                                                                        <LinkUlList><Link to='/contact' className={active === "contact" ? "headerLink active" : "headerLink"}>Contact us</Link></LinkUlList>
                                                                        <LinkUlList>
                                                                        {
                                                                                (active === 'jobs') ? 
                                                                                <Link to="#"><Button style={LinkButton}>Login</Button></Link> :
                                                                                <Link to="/jobs"><Button style={LinkButton}>View all job</Button></Link>
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
                                                                <MobileList><Link to='#' onClick={() => setIsDropdownOpen(!isDropdownOpen)} aria-haspopup="true" className="headerLink">Programs</Link></MobileList>
                                                                <MobileList style={isDropdownOpen ? {background: `${lightBlue}`, marginTop: -20, padding: '0 15px', height: '70px', overflow: 'hidden' } : {background: `${lightBlue}`, marginTop: -20, padding: '0 15px', height: 0, overflow: 'hidden'}}>
                                                                        <ul>
                                                                                <li>
                                                                                        <Link to='/smart-achivers' style={{...dropdownList}}>Smart Achivers</Link>
                                                                                </li>
                                                                                <li>
                                                                                        <Link to='/PGPLI' style={{...dropdownList}}>PGPLI</Link>
                                                                                </li>
                                                                        </ul>
                                                                </MobileList>
                                                                {/* <MobileList><Link to='#' onClick={handleClick} aria-haspopup="true" className="headerLink">Programs</Link></MobileList>
                                                                <Menu
                                                                        id="programs-menu-mobile"
                                                                        anchorEl={anchorEl}
                                                                        keepMounted
                                                                        open={Boolean(anchorEl)}
                                                                        onClose={handleClose}
                                                                >
                                                                        <MenuItem onClick={handleClose}>
                                                                                <Link to='/smart-achivers' style={{...dropdownList}}>Smart Achivers</Link>
                                                                        </MenuItem>
                                                                        <MenuItem onClick={handleClose}>
                                                                                <Link to='/PGPLI' style={{...dropdownList}}>PGPLI</Link>
                                                                        </MenuItem>
                                                                </Menu> */}
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
                                                                        <a href="https://www.linkedin.com/company/switchonsuccess-india/" target="_blank"><img src={linkedinIcon} width='32px' style={{marginRight: 8}} /></a>
                                                                </Grid>
                                                                <Grid item xs="3">
                                                                        <a href="https://www.facebook.com/switchOnSuccessIndia" target="_blank"><img src={facebookIcon} width='32px' style={{marginRight: 8}} /></a>
                                                                </Grid>
                                                                <Grid item xs="3">
                                                                        <a href="https://www.instagram.com/switchonsuccessindia/" target="_blank"><img src={instaIcon} width='32px' style={{marginRight: 8}} /></a>
                                                                </Grid>
                                                                <Grid item xs="3">
                                                                        <a href="https://twitter.com/switch_success" target="_blank"><img src={twitterIcon} width='32px' /></a>     
                                                                </Grid>
                                                        </Grid>   
                                                </Container>     
                                        </MobileDiv>
                                )
                        }
                </HeaderDiv>
        )
}

export default Header
