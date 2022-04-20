import React from 'react'
import {Container, Grid, Paper} from '@material-ui/core'
import {ExpertiseDiv, Title, gridItem, GridItemImg, GridItemTitle, GridItemPara, gridItemMobile} from '../../styles/home-page/expertise'


import insurance from '../../assets/home-page/Industries/Insurance.svg'
import technology from '../../assets/home-page/Industries/Technology.svg'
import accounting from '../../assets/home-page/Industries/Accounting.svg'
import globalSourcing from '../../assets/home-page/Industries/Global-Sourcing.svg'
import banking from '../../assets/home-page/Industries/Banking.svg'
import hr from '../../assets/home-page/Industries/HR.svg'
import financialServices from '../../assets/home-page/Industries/Financial-Services.svg'
import administration from '../../assets/home-page/Industries/Administration.svg'


const Expertise = () => {
        return (
          <ExpertiseDiv>
            <Container>
              <Title>Area of Expertise</Title>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} style={(window.innerWidth > 768) ? gridItem : gridItemMobile}>
                    <GridItemImg src={insurance} alt="insurance" />
                    <div>
                      <GridItemTitle>Insurance</GridItemTitle>
                      <GridItemPara>
                        Sales skills aren’t everything when it comes to jobs in
                        the insurance ready to hit the ground sector.
                      </GridItemPara>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} style={(window.innerWidth > 768) ? gridItem : gridItemMobile}>
                    <GridItemImg src={technology} alt="technology" />
                    <div>
                      <GridItemTitle>Technology</GridItemTitle>
                      <GridItemPara>
                        Delivering top tech talent that’s ready to hit the
                        ground running.
                      </GridItemPara>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} style={(window.innerWidth > 768) ? gridItem : gridItemMobile}>
                    <GridItemImg src={accounting} alt="accounting" />
                    <div>
                      <GridItemTitle>Accounting</GridItemTitle>
                      <GridItemPara>
                        Consulting and Advisory Solutions for a Changing World.
                      </GridItemPara>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} style={(window.innerWidth > 768) ? gridItem : gridItemMobile}>
                    <GridItemImg src={globalSourcing} alt="global sourcing" />
                    <div>
                        <GridItemTitle>Global Sourcing</GridItemTitle>
                        <GridItemPara>
                                Global Sourcing is a specialist service that has been developed to address.
                        </GridItemPara>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} style={(window.innerWidth > 768) ? gridItem : gridItemMobile}>
                    <GridItemImg src={banking} alt="banking" />
                    <div>
                        <GridItemTitle>Banking</GridItemTitle>
                        <GridItemPara>
                                The banking sector can be very competitive depending on what type of position.
                        </GridItemPara>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} style={(window.innerWidth > 768) ? gridItem : gridItemMobile}>
                    <GridItemImg src={hr} alt="Hr" />
                    <div>
                        <GridItemTitle>HR, Marketing & Sales</GridItemTitle>
                        <GridItemPara>
                                Providing creative solutions to grow your team.
                        </GridItemPara>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} style={(window.innerWidth > 768) ? gridItem : gridItemMobile}>
                    <GridItemImg
                      src={financialServices}
                      alt="financial services"
                    />
                    <div>
                        <GridItemTitle>Financial Services</GridItemTitle>
                        <GridItemPara>
                                Delivering top talent solutions in the area of Financial Services.
                        </GridItemPara>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} style={(window.innerWidth > 768) ? gridItem : gridItemMobile}>
                    <GridItemImg
                      src={administration}
                      alt="administration and operations"
                    />
                    <div>
                        <GridItemTitle>Administration & Operations</GridItemTitle>
                        <GridItemPara>
                                Delivering the right talent, at the right time, to keep your business growing.
                        </GridItemPara>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </ExpertiseDiv>
        );
}

export default Expertise
