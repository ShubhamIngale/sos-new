import React from 'react'
import {Container, Grid, Paper, Button} from '@material-ui/core'
import {sosBlue, orange, white} from '../../styles/global'
import {BSDiv, gridPaper, gridPaperMobile, MainTitle, Title, Desc} from '../../styles/home-page/businessSolutions'
import permanentStaffing from '../../assets/home-page/Solutions/Permanant-Staffing.jpg'
import talentMapping from '../../assets/home-page/Solutions/Talent-Mapping.jpg'
import projectBased from '../../assets/home-page/Solutions/Project-Based-Hiring.jpg'
import globalSourcing from '../../assets/home-page/Solutions/Global-Sourcing.jpg'
import trainingProgram from '../../assets/home-page/Solutions/Recruiter-Training-Program.jpg'

import consulting from '../../assets/home-page/Solutions/Consulting.jpg'
import permanentPlacement from '../../assets/home-page/Solutions/Permanent-Placement.jpg'
import InterimManagement from '../../assets/home-page/Solutions/Interim-Management.jpg'
import managedServices from '../../assets/home-page/Solutions/Managed-Services.jpg'
import strategicStaffing from '../../assets/home-page/Solutions/Strategic-Staffing.jpg'
import executiveSearch from '../../assets/home-page/Solutions/Executive-Search.jpg'

export const BusinessSolutions = () => {

        const solutions = [
                {
                        img: consulting,
                        t1: 'Consulting',
                        desc: 'Customized. On-time. On budget.'
                },
                {
                        img: permanentPlacement,
                        t1: 'Permanent',
                        t2: 'Placement',
                        desc: 'Finding the right personality in a new hire is just as important as finding.'
                },
                {
                        img: InterimManagement,
                        t1: 'Interim',
                        t2: 'Management',
                        desc: 'Interim Management is the provision of senior executives to manage.'
                },
                {
                        img: managedServices,
                        t1: 'Managed',
                        t2: 'Services',
                        desc: 'Free your staff to focus on what they do best: grow your business.'
                },
                {
                        img: strategicStaffing,
                        t1: 'Strategic',
                        t2: 'Staffings',
                        desc: 'Find the right talent, at the right time.'
                },
                {
                        img: executiveSearch,
                        t1: 'Executive',
                        t2: 'Search',
                        desc: 'Building teams that grow organizations.'
                }
        ]

        const employerForm = () => {
                const link = 'https://docs.google.com/forms/d/e/1FAIpQLSe2Qud6WxHfR3D6NnmJfUMbMwAyW8DMqYRtTmo8sfXgYLX3dw/viewform'
                window.open(link, '_blank')
              }

        return (
          <BSDiv>
            <Container>
              <Grid container spacing={5}>
                <Grid item xs={12} md={12}>
                  <Paper elevation={0}>
                    <MainTitle>Scope of Services</MainTitle>
                    <p style={{paddingRight: 10, marginBottom: -10}}>
                        Switch On Success connects people to their dream jobs and helps leading companies find talent to grow their businesses.
                    </p>
                    {/* <Button style={{background: `${sosBlue}`, color: `${white}`}} onClick={employerForm}>For Employers</Button> */}
                  </Paper>
                </Grid>
                {
                        solutions.map((solution, i) => {
                                return (
                                        <Grid item xs={12} md={4} key={i}>
                                                <Paper elevation={0} square style={(window.innerWidth > 768) ? {...gridPaper, background: `url(${solution.img}) no-repeat`, backgroundSize: 'cover'}: {...gridPaperMobile, background: `url(${solution.img}) no-repeat`, backgroundSize: 'cover'}}>
                                                        <Title>{solution.t1} <br/>{solution.t2}</Title>
                                                        <hr style={{height: 4, width: '24%', background: `${orange}`, border: 'none'}} />
                                                        <Desc>{solution.desc}</Desc>
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
