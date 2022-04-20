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

import applyIcon from '../../assets/smart-achivers/Benefits-Icons/apply.svg'
import opportunityIcon from '../../assets/smart-achivers/Benefits-Icons/opportunity.svg'
import rewardsIcon from '../../assets/smart-achivers/Benefits-Icons/rewards.svg'
import ranksIcon from '../../assets/smart-achivers/Benefits-Icons/rise-through-ranks.svg'

import educationIcon from '../../assets/PGPLI/Benefits-Icon/best-in-class-education.svg'
import industryExpertIcon from '../../assets/PGPLI/Benefits-Icon/industry-experts.svg'
import industryRecognizedIcon from '../../assets/PGPLI/Benefits-Icon/industry-recognized.svg'
import learnIcon from '../../assets/PGPLI/Benefits-Icon/learn-from-experts.svg'

import {sosBlue, white} from '../../styles/global'

const Promise = ({page}) => {

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

        const smartAchiversGridItems = [
                {
                        img: opportunityIcon,
                        alt: 'Opportunity',
                        text: 'Opportunity to grow at a  higher level'
                },
                {
                        img: ranksIcon,
                        alt: 'Rise throught ranks',
                        text: 'Rise through the ranks to take on Managerial and Leadership roles within the Sales hierarchy'
                },
                {
                        img: applyIcon,
                        alt: 'apply',
                        text: 'Apply for jobs in other functions within HDFC Life, as per the defined policy'
                },
                {
                        img: rewardsIcon,
                        alt: 'rewards',
                        text: 'Earn Rewards and recognition that are directly linked to your performance'
                },
        ]

        const pgpliGridItems = [
                {
                        img: educationIcon,
                        alt: 'Best in class education',
                        text: 'Get best-in-class education supported by on-the-job training.'
                },
                {
                        img: industryExpertIcon,
                        alt: 'Industry Experts',
                        text: 'Content is developed by industry experts'
                },
                {
                        img: industryRecognizedIcon,
                        alt: 'Industry Recognized',
                        text: 'Earn the industry recognized Postgraduate Diploma Certificate in Life Insurance and launch your career'
                },
                {
                        img: learnIcon,
                        alt: 'learn from experts',
                        text: 'Learn from the experts in the Life Insurance industry and get mentored by senior leadership.'
                },
        ]

        return (
                <>
                        {
                                (page === 'careers') &&
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
                        }
                        {
                                (page === 'smart achivers') &&
                                <PDiv style={{background: `${sosBlue}`}}>
                                        <Container>
                                                <Title style={{color: `${white}`}}>Benefits</Title>
                                                <Grid container spacing={3}>
                                                        {
                                                                smartAchiversGridItems.map((item, i) => (
                                                                        <Grid item xs={6} md={3} key={i}>
                                                                                <Paper elevation={false} style={{...paper, textAlign: 'center'}}>
                                                                                        <img src={item.img} alt={item.alt} style={{marginBottom: 17}} />
                                                                                        <p>{item.text}</p>
                                                                                </Paper>
                                                                        </Grid>
                                                                ))
                                                        }
                                                </Grid>
                                        </Container>
                                </PDiv>
                        }
                        {
                                (page === 'pgpli') &&
                                <PDiv style={{background: `${sosBlue}`}}>
                                        <Container>
                                                <Title style={{color: `${white}`}}>Benefits</Title>
                                                <Grid container spacing={3}>
                                                        {
                                                                pgpliGridItems.map((item, i) => (
                                                                        <Grid item xs={6} md={3} key={i}>
                                                                                <Paper elevation={false} style={{...paper, textAlign: 'center'}}>
                                                                                        <img src={item.img} alt={item.alt} style={{marginBottom: 17}} />
                                                                                        <p>{item.text}</p>
                                                                                </Paper>
                                                                        </Grid>
                                                                ))
                                                        }
                                                </Grid>
                                        </Container>
                                </PDiv>
                        }
                </>
        )
}

export default Promise
