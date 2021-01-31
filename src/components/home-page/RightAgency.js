import React from 'react'
import {Container, Grid, Paper, Button} from '@material-ui/core'
import {RADiv, Title, Para} from '../../styles/home-page/rightAgency'
import { Link } from 'react-router-dom';
import {sosBlue, white} from '../../styles/global'
import agency from '../../assets/home-page/The-Right-Recruitment-Agency.svg'


const RightAgency = () => {
        return (
          <RADiv>
            <Container>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <img src={agency} alt="The Right Recruitment Agency"/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} style={{backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'}}>
                    <Title>
                      The Right Recruitment Agency For You in BFSI Industry
                    </Title>
                    <Para>
                      Finding and hiring skilled talent is more significant than
                      ever before. Careerbest Consultant has the tools to
                      connect companies with the best recruiters, as well as
                      connecting applicants with the right jobs.
                    </Para>
                    <Link to='/about-us'><Button style={{ background: `${sosBlue}`, color: `${white}` }}>Why Us</Button></Link>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </RADiv>
        );
}

export default RightAgency
