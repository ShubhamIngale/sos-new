import React from 'react'
import {Container, Grid} from '@material-ui/core'
import {WAWDiv, Title, Para, LastPara} from '../../styles/about-us/whoAreWe'
import Philosophy from '../../assets/about-us/Philosophy.svg'
import oneYearProg from '../../assets/smart-achivers/one-year-prog.svg'
import oneOfKind from '../../assets/PGPLI/one-of-kind.svg'

const WhoAreWe = ({page}) => {
        return (
          <WAWDiv>
            <Container>
              <Grid container spacing={0}>
                {
                  (page === 'about us') &&
                  <>
                    <Grid item xs={12} sm={5}>
                      <Title>Philosophy</Title>
                      <Para>
                        What we love about the recruiting business is making a real difference for both candidates and clients. Every day is challenging and inspiring, connecting us with people who have a thousand different stories earned on the road to success.
                      </Para>
                      <Para>
                        We believe in the power of virtual networking to achieve performance in the stipulated time period. The common platform we create for the company and us is an advantage to both of us.
                      </Para>
                      <LastPara>
                        <b>We are versatile. We are energetic. We are amiable.</b>
                      </LastPara>
                    </Grid>
                    <Grid item xs={12} md={7} style={{textAlign: 'center'}}>
                      <img src={Philosophy} alt="Who are we" width= {window.innerWidth < 768 ? "100%" : 'auto'} />
                    </Grid>
                  </> 
                }
                {
                  (page === 'smart achivers') && 
                  <>
                    <Grid item xs={12} sm={6} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                      <Title>A one-year program.<br/> A lifetime opportunity.</Title>
                      <Para style={window.innerWidth > 768 ? {paddingRight: 120} : null}>
                        Launch your insurance career with this year-long program designed by industry experts. Build key skills, develop core competencies, and have access to senior leaders. What’s more, secure an internship that prepares you for your dream job when you graduate.
                      </Para>
                    </Grid>
                    <Grid item xs={12} md={6} style={{textAlign: 'center'}}>
                      <img src={oneYearProg} alt="one year program" width= {window.innerWidth < 768 ? "100%" : 'auto'} />
                    </Grid>
                  </>
                }
                {
                  (page === 'pgpli') && 
                  <>
                    <Grid item xs={12} sm={6} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                      <Title>One-of-a-kind. <br/>Dual-benefit program.</Title>
                      <Para style={window.innerWidth > 768 ? {paddingRight: 120} : null}>
                        If you’re a fresh graduate or student in your final year, this dual program is ideal for you. Build your key skills, develop core competencies and technical know-how through on-the-job training, and get mentored by senior professionals. It’s your launch pad for a career in insurance. 
                      </Para>
                    </Grid>
                    <Grid item xs={12} md={6} style={{textAlign: 'center'}}>
                      <img src={oneOfKind} alt="one year program" width= {window.innerWidth < 768 ? "100%" : 'auto'} />
                    </Grid>
                  </>
                }
              </Grid>
            </Container>
          </WAWDiv>
        );
}

export default WhoAreWe
