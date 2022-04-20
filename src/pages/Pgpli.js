import React from 'react'
import {useRecoilState} from 'recoil'
import WhoAreWe from '../components/about-us/WhoAreWe'
import Promise from '../components/careers/Promise'
import Footer from '../components/Footer'
import BuildYourDreamTeam from '../components/global/BuildYourDreamTeam'
import CBanner from '../components/global/CBanner'
import HeaderWhite from '../components/HeaderWhite'
import InvestNow from '../components/smart-achivers/InvestNow'
import Phases from '../components/smart-achivers/Phases'
import ProgramFeatures from '../components/smart-achivers/ProgramFeatures'
import { enrollPanel } from '../recoil/atoms'
import EnrolModal from '../components/smart-achivers/EnrolModal'

function SmartAchivers() {

        const [isLoginPanelOpen, setIsLoginPanelOpen] = useRecoilState(enrollPanel)
        const page = 'pgpli'

        return (
                <div style={{position: 'relative'}}>
                        <HeaderWhite active= {page}/>
                        <CBanner page= {page} />
                        <WhoAreWe page =  {page} />
                        <Promise page =  {page} />
                        <ProgramFeatures page = {page}  />
                        <Phases page={page} />
                        <InvestNow page={page} />
                        <BuildYourDreamTeam page = 'smart achivers' />
                        <Footer />
                        <EnrolModal isLoginPanelOpen={isLoginPanelOpen} setIsLoginPanelOpen={setIsLoginPanelOpen} page={page} />
                </div>
        )
}

export default SmartAchivers
