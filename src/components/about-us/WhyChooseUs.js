import React from 'react'
import {Container, Grid, Paper} from '@material-ui/core'
import {WCUDiv, Title} from '../../styles/about-us/whyChooseUs'
import costImg from '../../assets/about-us/why-choose-us/Cost-Effective.svg'
import diversityImg from '../../assets/about-us/why-choose-us/Diversity.svg'
import ethicsImg from '../../assets/about-us/why-choose-us/Ethics.svg'
import qualityResultImg from '../../assets/about-us/why-choose-us/Quality-Results.svg'

const WhyChooseUs = () => {

        const GridListItems = [
                {
                        img: diversityImg,
                        title: 'DIVERSITY & EVOLVING',
                        description: 'We firmly believe, talent does not ride on gender, ethnicity or geography, the only marker it has is excellence.'
                },
                {
                        img: qualityResultImg,
                        title: 'QUALITY RESULTS',
                        description: 'Providing quality results with specialized resources of virtual network in place.'
                },
                {
                        img: costImg,
                        title: 'COST EFFECTIVE',
                        description: 'We negotiate on behalf of company (if requested to do so) to keep the resources within HR budgets, so that closure are fast and cost effective for the company.'
                },
                {
                        img: ethicsImg,
                        title: 'ETHICS',
                        description: 'The highest standards of ethical practices and transparency.'
                }
        ]

        return (
                <WCUDiv>
                        <Container>
                                <Title>Why Choose Us</Title>
                                <Grid container spacing={2}>
                                        {
                                                GridListItems.map((item, i) => (
                                                        <Grid item xs={12} md={3} key={i} style={(window.innerWidth <768) ? {textAlign: 'center'}: null}>
                                                                <Paper elevation={0} style={{border: `1px solid #E2E4E8`, padding: `28px 20px`, background: '#EBF6FD', minHeight: 336}}>
                                                                        <img src={item.img} alt={item.title} style={{marginBottom: 10}} />
                                                                        <p style={{marginBottom: 6}}><b>{item.title}</b></p>
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
