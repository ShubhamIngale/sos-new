import React from 'react'
import {Container, Grid, Button} from '@material-ui/core'
import {BYDTDiv, BgOverlay, Title, TitleMobile} from '../../styles/home-page/banner'
import {white, sosBlue, orange} from '../../styles/global';
import { Link } from 'react-router-dom';

const Banner = () => {

  const hireTalent = () => {
    const link = 'https://docs.google.com/forms/d/e/1FAIpQLSe2Qud6WxHfR3D6NnmJfUMbMwAyW8DMqYRtTmo8sfXgYLX3dw/viewform'
    window.open(link, '_blank')
  }
        return (
          <>
            <BYDTDiv>
              <BgOverlay></BgOverlay>
              <Container style={{ height: "100%" }}>
                <Grid container spacing={2} style={{ height: "100%" }}>
                  <Grid item xs={12} md={6}>
                    {!(window.innerWidth <= 768) ? (
                      <Title>Meeting Future with Confidence</Title>
                    ) : (
                      <TitleMobile>Meeting Future with Confidence</TitleMobile>
                    )}
                    <p
                      style={{
                        position: "relative",
                        zIndex: 1,
                        marginBottom: 40,
                        color: `${white}`
                      }}
                    >
                      Connecting people to their dream jobs and helping leading
                      <br />
                      companies find talent to grow their businesses.
                    </p>
                    <Link to='/jobs'>
                    <Button style={{ background: `${sosBlue}`, color: `${white}`, marginRight: 16 }}>
                      Find a Job
                    </Button>
                    </Link>
                    {
                      window.innerWidth < 768 && <div style={{marginBottom: 16}}></div>
                    }
                    <Button
                      style={{ background: `${sosBlue}`, color: `${white}` }}
                      onClick={() => hireTalent()}
                    >
                      Hire a Talent
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </BYDTDiv>
            {/* <div
              style={{
                background: `${orange}`,
                color: `${white}`,
                paddingTop: 40,
                paddingBottom: 40,
              }}
            >
              <Container>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <p>
                      <b>The New Normal is Safely First</b>
                    </p>
                    <p
                      style={
                        !(window.innerWidth <=768) ? {
                          fontSize: 14,
                          lineHeight: 1.6,
                          paddingRight: 50,
                        } : {
                          fontSize: 14,
                          lineHeight: 1.6,
                          paddingRight: 0,
                        }
                      }
                    >
                      We at Switch On Success with the help of industry alliance will
                      make a vital contribution to helping people return safely
                      and enabling companies adapt to the new normal.
                    </p>
                  </Grid>
                </Grid>
              </Container>
            </div> */}
          </>
        );
}

export default Banner
