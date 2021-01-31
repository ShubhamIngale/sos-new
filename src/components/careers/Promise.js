import React from 'react'
import {Container, Grid, Paper} from '@material-ui/core'
import {PDiv, Title, paper} from '../../styles/careers/promise'
import imgOne from '../../assets/join-us/We-Promise/1.svg' 
import imgTwo from '../../assets/join-us/We-Promise/2.svg' 
import imgThree from '../../assets/join-us/We-Promise/3.svg' 
import imgFour from '../../assets/join-us/We-Promise/4.svg' 
import imgFive from '../../assets/join-us/We-Promise/5.svg' 
import imgSix from '../../assets/join-us/We-Promise/6.svg' 
import imgSeven from '../../assets/join-us/We-Promise/7.svg' 

const Promise = () => {

        const gridItems = [
                {
                        img: imgOne,
                        alt: 'Co-ordination with client',
                        text: 'To work in close coordination with our clients for their global executive search requirements'
                },
                {
                        img: imgTwo,
                        alt: 'expertise',
                        text: 'To provide value-added expertise during and after every assignment'
                },
                {
                        img: imgThree,
                        alt: 'integrity',
                        text: 'To execute each and every assignment diligently and with integrity'
                },
                {
                        img: imgFour,
                        alt: 'work culture and code of ethics',
                        text: `To adhere to the strict norms of the client's work culture and their code of ethics`
                },
                {
                        img: imgFive,
                        alt: 'diligence',
                        text: `To thoroughly check short-listed candidates' diligence`
                },
                {
                        img: imgSix,
                        alt: 'level of respect',
                        text: 'To treat each and every candidate with high level of respect'
                },
                {
                        img: imgSeven,
                        alt: 'recruitment and selection',
                        text: 'To provide guarantee period for each and every recruitment and selection'
                }
        ]

        return (
                <PDiv>
                        <Container>
                                <Title>We Promise</Title>
                                <Grid container spacing={3}>
                                        {
                                                gridItems.map((item, i) => (
                                                        <Grid item xs={6} md={3} key={i}>
                                                                <Paper elevation={false} style={paper}>
                                                                        <img src={item.img} alt={item.alt} style={{marginBottom: 17}} />
                                                                        <p>{item.text}</p>
                                                                </Paper>
                                                        </Grid>
                                                ))
                                        }
                                </Grid>
                        </Container>
                </PDiv>
        )
}

export default Promise
