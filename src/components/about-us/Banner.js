import React from 'react'
import {Container, Grid} from '@material-ui/core'
import {BannerDiv, Title, BgOverlay} from '../../styles/about-us/banner'

const Banner = () => {
        return (
                <BannerDiv>
                        <Container>
                                <Grid container spacing={0}>
                                        <Grid item xs={12} sm={8}>
                                                <Title>
                                                        Connecting Talent with right opportunity
                                                </Title>
                                        </Grid>
                                </Grid>
                        </Container>   
                </BannerDiv>
        )
}

export default Banner
