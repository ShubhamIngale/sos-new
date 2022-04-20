import React from 'react'
import {Container, Grid, Paper } from '@material-ui/core'
import {PDiv, Title, TableHeadDiv, TableHeadCircle, TableMainDiv} from '../../styles/smart-achivers/phases'

function Phases({page}) {

        const phasesList = [
                {
                        duration: '2 + 2',
                        title: '2 months virtual + 2 months of residential classroom training',
                        subTitleOne: 'Virtual training at home and Residential Classroom training',
                        points: [
                                'Classroom learning which focuses on building Finance and Insurance knowledge, develop inter-personal & selling skills',
                                'Assignments & Presentations',
                                'Written examination at the end of every term (2 terms spread over 4 months)',
                                'Interaction with Peer Students & Industry Experts',
                                'Feedback'
                        ]
                },
                {
                        duration: '2',
                        title: 'Job Training',
                        subTitleOne: 'On Job Training',
                        points: [
                                'Real-Life Exposure to a Corporate Work Environment',
                                'Interaction with Mentors',
                                'Opportunities to Practice and Develop Selling and Customer Interaction Skills in Safe, Simulated Scenarios',
                        ],
                        subTitleTwo: 'New batch is started on a monthly basis. First Monday of each month is new batch start date.'
                },
                {
                        duration: '6',
                        title: 'Internship',
                        subTitleOne: 'Entry into the Real World of Selling',
                        points: [
                                'Work as part of Distribution Channel',
                                'Experience the Real World of Sales: Targets, Customers, Pitching, Negotiation, and Deal Closure',
                        ]
                }
        ]

        const pgpliPhasesList = [
                {
                        duration: '2',
                        title: 'Online',
                        subTitleOne: 'Fully online training where you can learn at your own pace and place',
                        points: [
                                'Web Based Modules',
                                'Practice Quiz',
                                'Case Studies and Assignments',
                                'Interaction with Peer Students & Industry Experts',
                                'Feedback'
                        ]
                },
                {
                        duration: '2',
                        title: 'Job Training',
                        subTitleOne: 'On Job Training',
                        points: [
                                'Real-Life Exposure to a Corporate Work Environment',
                                'Interaction with Mentors',
                                'Opportunities to Practice and Develop Selling and Customer Interaction Skills in Safe, Simulated Scenarios',
                        ],
                        subTitleTwo: 'New batch is started on a monthly basis. First Monday of each month is new batch start date.'
                },
                {
                        duration: '7',
                        title: 'Internship',
                        subTitleOne: 'Entry into the Real World of Selling',
                        points: [
                                'Work as part of Distribution Channel',
                                'Experience the Real World of Sales: Targets, Customers, Pitching, Negotiation, and Deal Closure',
                        ]
                }
        ]

        return (
                <PDiv>
                        <Container>
                                <Title>
                                        {
                                                (page === 'pgpli') ? 'Phases of PGPLI' : 'Phases of Smart Achievers’ Program'
                                        }
                                </Title>
                                <Grid container>
                                        {
                                                (page === 'pgpli') ?
                                                pgpliPhasesList.map((phase, i) => (
                                                        <Grid item xs={12} md={4} key={i}>
                                                                <Paper elevation={0} square style={(window.innerWidth < 768) ? {marginTop: 80} : null}>
                                                                       <TableHeadDiv>
                                                                               <TableHeadCircle>
                                                                                       <p style={{lineHeight: 1.2}}>{phase.duration} months</p>
                                                                               </TableHeadCircle>
                                                                               <p>{phase.title}</p>
                                                                        </TableHeadDiv> 
                                                                        <TableMainDiv>
                                                                                <p>{phase.subTitleOne}</p>
                                                                                <ul>
                                                                                        {
                                                                                                phase.points.map((item, i) => (
                                                                                                        <li key={i}>
                                                                                                                {item}
                                                                                                        </li>
                                                                                                ))
                                                                                        }
                                                                                </ul>
                                                                                {
                                                                                        phase.subTitleTwo && <p><small>{phase.subTitleTwo}</small></p>
                                                                                }
                                                                        </TableMainDiv>
                                                                </Paper>
                                                        </Grid>
                                                )) :
                                                phasesList.map((phase, i) => (
                                                        <Grid item xs={12} md={4} key={i}>
                                                                <Paper elevation={0} square style={(window.innerWidth < 768) ? {marginTop: 80} : null}>
                                                                       <TableHeadDiv>
                                                                               <TableHeadCircle>
                                                                                       <p style={{lineHeight: 1.2}}>{phase.duration} months</p>
                                                                               </TableHeadCircle>
                                                                               <p>{phase.title}</p>
                                                                        </TableHeadDiv> 
                                                                        <TableMainDiv>
                                                                                <p>{phase.subTitleOne}</p>
                                                                                <ul>
                                                                                        {
                                                                                                phase.points.map((item, i) => (
                                                                                                        <li key={i}>
                                                                                                                {item}
                                                                                                        </li>
                                                                                                ))
                                                                                        }
                                                                                </ul>
                                                                                {
                                                                                        phase.subTitleTwo && <p><small>{phase.subTitleTwo}</small></p>
                                                                                }
                                                                        </TableMainDiv>
                                                                </Paper>
                                                        </Grid>
                                                ))
                                        }
                                </Grid>
                        </Container>
                </PDiv>
        )
}

export default Phases
