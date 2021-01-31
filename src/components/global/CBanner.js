import React from 'react'
import {Container, Button} from '@material-ui/core'
import {Banner, Title} from '../../styles/global/cBanner'
import {sosBlue, white} from '../../styles/global'

const CBanner = ({page}) => {

        const jobLink = () => {
                const link = 'mailto:job@careerbest.in'
                window.open(link, '_blank')
              }

        return (
                <Banner>
                        <Container>
                                <Title>
                                        {
                                                (page === 'careers') ? (<>Let’s learn and work<br/> in a transparent culture</>) : (<>Get in touch. <br/>We love to hear from you!</>)
                                        }
                                </Title>
                                <Button onClick={jobLink} style={{background: `${white}`, color: `${sosBlue}`}}>Apply</Button>
                        </Container>
                </Banner>
        )
}

export default CBanner
