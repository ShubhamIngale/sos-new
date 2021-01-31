import React from 'react'
import {Container, Grid, Paper, Button} from '@material-ui/core'
import {sosBlue, orange, white} from '../../styles/global'
import {BSDiv, gridPaper, MainTitle, Title} from '../../styles/home-page/businessSolutions'
import permanentStaffing from '../../assets/home-page/Solutions/Permanant-Staffing.jpg'
import talentMapping from '../../assets/home-page/Solutions/Talent-Mapping.jpg'
import projectBased from '../../assets/home-page/Solutions/Project-Based-Hiring.jpg'
import globalSourcing from '../../assets/home-page/Solutions/Global-Sourcing.jpg'
import trainingProgram from '../../assets/home-page/Solutions/Recruiter-Training-Program.jpg'

export const BusinessSolutions = () => {

        const solutions = [
                {
                        img: permanentStaffing,
                        t1: 'Permanent',
                        t2: 'Staffing'
                },
                {
                        img: talentMapping,
                        t1: 'Talent',
                        t2: 'Mapping'
                },
                {
                        img: projectBased,
                        t1: 'Project Based',
                        t2: 'Hiring'
                },
                {
                        img: globalSourcing,
                        t1: 'Global',
                        t2: 'Hiring'
                },
                {
                        img: trainingProgram,
                        t1: 'Recruiter Training',
                        t2: 'Program'
                }
        ]

        const employerForm = () => {
                const link = 'https://docs.google.com/forms/d/e/1FAIpQLSe2Qud6WxHfR3D6NnmJfUMbMwAyW8DMqYRtTmo8sfXgYLX3dw/viewform'
                window.open(link, '_blank')
              }

        return (
          <BSDiv>
            <Container>
              <Grid container spacing={6}>
                <Grid item xs={12} md={4}>
                  <Paper elevation={0}>
                    <MainTitle>Business Solutions</MainTitle>
                    <p style={{marginBottom: 32, paddingRight: 10}}>
                      With a shared focus on organizational effectiveness,
                      individual development and career management, we provide
                      tailored solutions that help companies and individuals
                      succeed.  
                    </p>
                    <Button style={{background: `${sosBlue}`, color: `${white}`}} onClick={employerForm}>For Employers</Button>
                  </Paper>
                </Grid>
                {
                        solutions.map((solution, i) => {
                                return (
                                        <Grid item xs={12} md={4} key={i}>
                                                <Paper elevation={0} square style={{...gridPaper, background: `url(${solution.img}) no-repeat`, backgroundSize: 'cover'}}>
                                                        <hr style={{height: 4, width: '24%', background: `${orange}`, border: 'none'}} />
                                                        <Title>{solution.t1} <br/>{solution.t2}</Title>
                                                </Paper>
                                        </Grid>
                                )
                        })
                }
              </Grid>
            </Container>
          </BSDiv>
        );
}

export default BusinessSolutions
