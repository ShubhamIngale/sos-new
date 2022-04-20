import React from 'react'
import {useRecoilState} from 'recoil'
import {Container, Button} from '@material-ui/core'
import {Banner, Title} from '../../styles/global/cBanner'
import {sosBlue, white} from '../../styles/global'
import EnrolModal from '../smart-achivers/EnrolModal'
import smartAchiversBanner from '../../assets/smart-achivers/First-Fold.jpg'
import pgpliBanner from '../../assets/PGPLI/First-Fold.jpg'
import {enrollPanel} from '../../recoil/atoms'

const CBanner = ({page}) => {

        const [isLoginPanelOpen, setIsLoginPanelOpen] = useRecoilState(enrollPanel);

        const jobLink = () => {
                const link = 'mailto:job@careerbest.in'
                window.open(link, '_blank')
              }

        const togglePanel = () => {
                setIsLoginPanelOpen(true);
                // const x = window.scrollX;
                // const y = window.scrollY;
                // window.onscroll = () => window.scrollTo(x, y)
        }

        return (
                <Banner 
                        style={(page === 'smart achivers') ?
                                {
                                        background: `url(${smartAchiversBanner}) center right / cover no-repeat`
                                } :
                                (page === 'pgpli') ? 
                                {
                                        background: `url(${pgpliBanner}) center right / cover no-repeat`
                                } : null
                                
                        }
                
                >
                        <Container>
                                <Title>
                                        {
                                                (page === 'careers') ? (<>Let’s learn and work<br/> in a transparent culture</>) : (page === 'smart achivers') ? (<>Smart Achievers’ Program</>) : (page === 'pgpli') ? (<>Postgraduate Program <br/>in Life Insurance</>) : (<>Get in touch. <br/>We love to hear from you!</>)
                                        }
                                </Title>
                                {
                                        (page === 'smart achivers') && (<p style={{color: `${white}`, marginTop: -24, marginBottom: 20}}>By industry experts. For future industry experts. </p>)
                                }
                                {
                                        (page === 'pgpli') && (<p style={{color: `${white}`, marginTop: -24, marginBottom: 20}}>Industry-endorsed. Career-focused. </p>)
                                }
                                {
                                        (page === 'smart achivers') ? 
                                        <Button onClick={togglePanel} style={{background: `${white}`, color: `${sosBlue}`}}>Enroll Now</Button> : 
                                        (page === 'pgpli') ? 
                                        <Button onClick={togglePanel} style={{background: `${white}`, color: `${sosBlue}`}}>Enroll Now</Button> : 
                                        <Button onClick={jobLink} style={{background: `${white}`, color: `${sosBlue}`}}>Apply</Button>
                                }
                        </Container>
                        {/* {
                                (page === 'smart achivers') && <EnrolModal isLoginPanelOpen={isLoginPanelOpen} setIsLoginPanelOpen={setIsLoginPanelOpen} />
                        } */}
                </Banner>
        )
}

export default CBanner
