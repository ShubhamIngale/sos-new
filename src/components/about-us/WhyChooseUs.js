import React from 'react'
import {Container, Grid, Paper} from '@material-ui/core'
import {WCUDiv, Title} from '../../styles/about-us/whyChooseUs'

import objective from '../../assets/about-us/why-choose-us/Objective.svg'
import innovation from '../../assets/about-us/why-choose-us/Innovation.svg'
import diversity from '../../assets/about-us/why-choose-us/Diversity.svg'
import empowerment from '../../assets/about-us/why-choose-us/Empowerment.svg'
import qualityResults from '../../assets/about-us/why-choose-us/Quality-Results.svg'
import costEffective from '../../assets/about-us/why-choose-us/Cost-Effective.svg'
import ethics from '../../assets/about-us/why-choose-us/Ethics.svg'

const WhyChooseUs = () => {

        const GridListItems = [
                {
                        img: objective,
                        title: 'Objective',
                        description: `To support the organization's ability to acquire the best resource compatible with the job opening. Helping clients to retain and harvest the same over the period and develop the best talent and skills. These are achieved by following up with the companies and the candidate periodically after joining.`
                },
                {
                        img: innovation,
                        title: 'Innovation',
                        description: 'We are dedicated to a spirit of resources within HR budgets, so that closure is done within the time frame given by the client through our talent search which is connected to World digitally through our new Virtual network .... unlimited resources - unmatched reach and talent search.'
                },
                {
                        img: diversity,
                        title: 'Diversity & Evolving',
                        description: 'We firmly believe, talent does not ride on gender, ethnicity, or geography, the only marker it has is excellence.'
                },
                {
                        img: empowerment,
                        title: 'Empowerment',
                        description: 'Every individual within our ecosystem must be empowered to fulfill their potential. Given the right chance can prove its full potential.'
                },
                {
                        img: qualityResults,
                        title: 'Quality Results',
                        description: 'Every individual within our ecosystem must be empowered to fulfill their potential. Given the right chance can prove its full potential.'
                },
                {
                        img: costEffective,
                        title: 'Reliable & Cost Effective',
                        description: 'Every individual within our ecosystem must be empowered to fulfill their potential. Given the right chance can prove its full potential.'
                },
                {
                        img: ethics,
                        title: 'Ethics',
                        description: 'Every individual within our ecosystem must be empowered to fulfill their potential. Given the right chance can prove its full potential.'
                }
        ]

        return (
                <WCUDiv>
                        <Container>
                                <Title>Why Choose Us</Title>
                                <Grid container spacing={3}>
                                        {
                                                GridListItems.map((item, i) => (
                                                        <Grid item xs={12} md={4} key={i} style={(window.innerWidth <768) ? {textAlign: 'center'}: null}>
                                                                <Paper elevation={0} style={{border: `1px solid #E2E4E8`, padding: `28px 20px`, background: 'white', minHeight: 395}}>
                                                                        <img src={item.img} alt={item.title} style={{marginBottom: 10}} />
                                                                        <p style={{marginBottom: 6, textTransform: 'Capitalize'}}><b>{item.title}</b></p>
                                                                        <p>{item.description}</p>
                                                                </Paper>
                                                        </Grid>
                                                ))
                                        }
                                </Grid>
                        </Container>
                </WCUDiv>
        )
}

export default WhyChooseUs
