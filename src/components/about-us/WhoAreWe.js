import React from 'react'
import {Container, Grid} from '@material-ui/core'
import {WAWDiv, Title, Para, LastPara} from '../../styles/about-us/whoAreWe'
import whoAreWe from '../../assets/about-us/who-are-we.svg'

const WhoAreWe = () => {
        return (
          <WAWDiv>
            <Container>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                  <Title>Who we are</Title>
                  <Para>
                    Career Best was started in the year 2018 , with a vision to
                    provide great recruitment and staffing services to our
                    clients. Over the years, we have become preferred talent
                    acquisition and staffing partner to various Indian
                    businesses.
                  </Para>
                  <Para>
                    We specialise in recruitment and staffing across various
                    industry verticals. To cater to our client requirements, we
                    have a team of experts who are actively involved in
                    providing the best customised, high-quality, research-based
                    talent consulting and staffing services.
                  </Para>
                  <LastPara>
                    Headquartered in New Delhi , India, We employ over 10
                    consultants with over 50 man years of experience with
                    leading Indian and international companies and operate
                    within domain-specialist teams spread across the country,
                    providing customized recruitment solutions across 33
                    industry verticals.
                  </LastPara>
                </Grid>
                <Grid item xs={12} md={6} style={{textAlign: 'center'}}>
                  <img src={whoAreWe} alt="Who are we" />
                </Grid>
              </Grid>
            </Container>
          </WAWDiv>
        );
}

export default WhoAreWe
