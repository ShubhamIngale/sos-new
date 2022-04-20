import React from 'react'
import {Container, Grid} from '@material-ui/core'
import {SWUDiv, MainPara, Title, Para} from '../../styles/careers/startWithUs'
import startWithUs from '../../assets/join-us/Moving-forward.svg'

const StartWithUs = () => {
        return (
          <SWUDiv>
            <Container>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <MainPara>
                      We believe in working with honest and dedicated people,
                      simultaneously we invest in their well being and overall
                      development. We understand that all individuals are different,
                      and we work to let our partners and associates shine in their
                      own unique way.
                  </MainPara>
                  <Title>Personal touch starts with us</Title>
                  <Para>
                    We at switch on success consultants believe fulfilment doesn't come
                    from clearing hurdles that others set for you, but it comes
                    from clearing those you set for yourself. We help you
                    examine the question, “Am I reaching my potential?”
                  </Para>
                  <Para>
                    <b>
                      This is our commitment to our self and we stand for and
                      promise to keep it.
                    </b>
                  </Para>
                </Grid>
                <Grid item xs={12} md={6}>
                  <img src={startWithUs} alt="start with us" width= {window.innerWidth < 768 ? "100%" : 'auto'} />
                </Grid>
              </Grid>
            </Container>
          </SWUDiv>
        );
}

export default StartWithUs
