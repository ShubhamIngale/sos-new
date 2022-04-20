import React from 'react'
import {Container, Grid, Paper} from '@material-ui/core'
import {VDiv, Title} from '../../styles/careers/values'
import {lightBlue} from '../../styles/global'

const Values = () => {

        const content = [
                {
                        title: 'Our Commitments',
                        description: 'We provide the appropriate match and solutions for the human resource needs, through long-term client relationships built on experience, insight and teamwork.'
                },
                {
                        title: 'Value Differentiator',
                        description: 'At Switch On success, quality is our top priority. We have adopted international practices and methodologies to ensure timely and successful executive search. We utilize the in-depth market knowledge and do comprehensive research in providing the best solution to our customers. We give prime emphasis to R & D that helps in building a cohesive professional group covering a wide spectrum of industrial practices. '
                },
                {
                        title: 'Our Multifaceted Team',
                        description: 'We have a multifaceted team of consultants who are highly experienced in the industry / sectors they serve. Our ability to attract the best talent has enabled us in achieving great heights, which has made us today - among the top ranked HRD consultants or HR firms. '
                }
        ]

        return (
                <VDiv>
                        <Container>
                                <Title>Core values</Title> 
                                <Grid container spacing={1}>
                                        <Grid item xs={12} md={12}>
                                                {
                                                        content.map((item, i) => (
                                                                <div key={i} style={{marginBottom: 32}}>
                                                                        <Paper elevation={0} style={{background: `${lightBlue}`, padding: '30px 32px', border: '1px solid #E2E4E8'}}>
                                                                                <p style={{marginBottom: 8}}><b>{item.title}</b></p>
                                                                                <p>{item.description}</p>
                                                                        </Paper>
                                                                </div>
                                                        ))
                                                }
                                        </Grid>
                                </Grid>
                        </Container>

                </VDiv>
        )
}

export default Values
