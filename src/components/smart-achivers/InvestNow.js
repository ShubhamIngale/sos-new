import React from 'react'
import {Container} from '@material-ui/core'
import {INDiv, Title} from '../../styles/smart-achivers/investNow'
import spendEarnDesktop from '../../assets/smart-achivers/spend-earn-desktop.svg'
import spendEarnMobile from '../../assets/smart-achivers/spend-earn-mobile.svg'
import pgpliSpendEarnDesktop from '../../assets/PGPLI/spend-earn-desktop.svg'
import pgpliSpendEarnMobile from '../../assets/PGPLI/spend-earn-mobile.svg'

function InvestNow({page}) {
        return (
                <INDiv>
                       <Container>
                        <Title>Invest now. Get 3X returns.</Title> 
                        {
                                (page !== 'pgpli') && (
                                (window.innerWidth > 768) ?
                                        <img src={spendEarnDesktop} alt="Spend & Earn" /> :
                                        <img src={spendEarnMobile} alt="Spend & Earn" /> )
                        }
                        {
                                (page === 'pgpli') && (
                                (window.innerWidth > 768) ?
                                        <img src={pgpliSpendEarnDesktop} alt="Spend & Earn" /> :
                                        <img src={pgpliSpendEarnMobile} alt="Spend & Earn" /> )
                        }
                       </Container>
                </INDiv>
        )
}

export default InvestNow
