import React from 'react'
import {BSDiv, Title, Para, CardTitle, CardPara} from '../../styles/home-page/solutionsTwo'
import {Grid, Paper, Container, Button} from '@material-ui/core'
import {sosBlue, white} from '../../styles/global'

function SolutionsTwo() {

        const employerForm = () => {
                const link = 'https://docs.google.com/forms/d/e/1FAIpQLSe2Qud6WxHfR3D6NnmJfUMbMwAyW8DMqYRtTmo8sfXgYLX3dw/viewform'
                window.open(link, '_blank')
              }

        const solutions = [
                {
                        title: 'Talent Resourcing',
                        desc: 'Customized. On-time. On budget.'
                },
                {
                        title: 'Talent Management',
                        desc: 'Finding the right personality in a new hire is just as important as finding.'
                },
                {
                        title: 'Talent Development',
                        desc: 'Interim Management is the provision of senior executives to manage.'
                },
                {
                        title: 'Recruiting Partner Solutions',
                        desc: 'Interim Management is the provision of senior executives to manage.'
                },
        ]

        return (
          <BSDiv>
            <Container>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6} style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
                  <Title>Business Solution</Title>
                  <Para>
                    Switch on Success delivers workforce expertise
                    and talent-related capabilities that companies need to
                    unleash the power of their people. 
                    </Para>
                    <Para>With a shared focus
                    on organizational effectiveness, individual development
                    and career management, we provide tailored solutions
                    that help companies and individuals succeed.
                  </Para>
                  <Button style={{color: `${sosBlue}`, background: `${white}`, marginTop: 30}} onClick={employerForm}>For Employers</Button>
                </Grid>
                <Grid item xs={12} md={6} style={window.innerWidth < 768 ? {marginTop: 30} : null}>
                        <Grid container spacing={3}>
                                {
                                        solutions.map((solution, i) => (
                                                <Grid key={i} item xs={12} md={6}>
                                                        <Paper elevation={0} style={{padding: '18px 24px', minHeight: 200}}>
                                                                <CardTitle>{solution.title}</CardTitle>
                                                                <CardPara>{solution.desc}</CardPara>
                                                        </Paper>
                                                </Grid>
                                        ))
                                }
                        </Grid>
                </Grid>
              </Grid>
            </Container>
          </BSDiv>
        );
}

export default SolutionsTwo
