import React from 'react'
import {ProcessDiv, Title} from '../../styles/about-us/process'
import {Container} from '@material-ui/core'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import parse from 'html-react-parser'

function Process() {

        const processes = [
                {
                        desc: 'Switch on success team<b> review the requirements</b> which are received from the client.'
                },
                {
                        desc: 'The same is <b>shared with our specialized dedicated team</b> to source the right candidate for the same which include virtual networking and or Database.'
                },
                {
                        desc: 'Once selected, the same is uploaded onto the system and a log them in place <b>scrutinizing Profile based on JD shared</b> by the client.'
                },
                {
                        desc: 'A dedicated manager will <b>submit the filtered profile</b> to the client for selection purposes.'
                },
                {
                        desc: 'Client complete their <b>selection process.</b>'
                },
                {
                        desc: 'Client requests any value-added services which we render based on contract and <b>results are shared in the stipulated time frame.</b>'
                },
                {
                        desc: 'We <b>raise the invoice</b> to client on successful completion and we get paid for our services. '
                },
        ]

        return (
                <ProcessDiv>
                        <Container>
                                <Title>Our 7 Stage Recruitment Process</Title>
                                <p style={{marginBottom: 20}}>
                                        Switch on Success has developed and implemented a time tested recruitment strategy for the identification, communication, acquisition, preparation, retention, and placement of top industry talent.
                                </p>

                                <VerticalTimeline>
                                        {
                                                processes.map((process, i) => (
                                                        <VerticalTimelineElement
                                                                className="vertical-timeline-element--work"
                                                                contentStyle={{ padding: '0px 10px 14px 10px ', boxShadow: 'none', borderTop: '4px solid #F5821F'}}
                                                                iconStyle={{ background: '#0066B3', color: 'white', display:'flex', justifyContent: 'center', alignItems: 'center', boxShadow: 'none', fontWeight: 'bold', fontSize: 24}}
                                                                icon={i+1}
                                                                >
                                                                <p style={{fontWeight: 'normal', fontSize: 16, lineHeight: 1.5}}>
                                                                        {parse(`${process.desc}`)}
                                                                </p>
                                                        </VerticalTimelineElement>
                                                ))
                                        }
                                </VerticalTimeline>
                        </Container>
                </ProcessDiv>
        )
}

export default Process
