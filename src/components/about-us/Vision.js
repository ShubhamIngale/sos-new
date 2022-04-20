import React from 'react'
import {Container, Grid} from '@material-ui/core'
import {VDiv, Para, Title} from '../../styles/about-us/vision'

const Vision = () => {
        return (
          <VDiv>
            <Container>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  style={
                    window.innerWidth > 768
                      ? { padding: "0 120px" }
                      : { padding: "0 10px" }
                  }
                >
                  <Title>Why Switch On Success</Title>
                  <Para>
                    At the core of this partnership is TRUST. We earn our
                    clients’ trust every day by starting and ending assignments
                    on time; delivering the highest quality of employment
                    services; respecting the client’s budget, and avoiding
                    surprises through careful planning.
                  </Para>
                  {/* <Para>
                    To achieve this, we are committed to the provision of
                    <b>
                      {" "}
                      excellent customer service, quality staffing and
                      competitive pricing.
                    </b>{" "}
                    We will continue to work in close consultation with our
                    clients to ensure that their hiring and staffing needs are
                    adequately met to their complete satisfaction.
                  </Para>
                  <Para>
                    We also endeavour to be the preferred platform for
                    candidates to discover and pursue exciting careers with
                    their ideal organisations.
                  </Para> */}
                </Grid>
              </Grid>
            </Container>
          </VDiv>
        );
}

export default Vision
