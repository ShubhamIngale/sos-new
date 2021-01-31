import React from 'react'
import {Container, Grid} from '@material-ui/core'
import {VDiv, Para, Title} from '../../styles/about-us/vision'

const Vision = () => {
        return (
          <VDiv>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} style={{padding: '0 120px'}} >
                <Title>Our Mission & Vision</Title>
                  <Para>
                    Careerbest Consultant mission is <b>to be the preferred and
                    trusted recruitment partner to both our clients and
                    candidates.</b> We believe in total transparency.
                  </Para>
                  <Para>
                    To achieve this, we are committed to the provision of
                    <b> excellent customer service, quality staffing and competitive
                    pricing.</b> We will continue to work in close consultation with
                    our clients to ensure that their hiring and staffing needs
                    are adequately met to their complete satisfaction.
                  </Para>
                  <Para>
                    We also endeavour to be the preferred platform for
                    candidates to discover and pursue exciting careers with
                    their ideal organisations.
                  </Para>
                </Grid>
              </Grid>
            </Container>
          </VDiv>
        );
}

export default Vision
