import React, {useEffect, useState} from 'react'
import {useRecoilState} from 'recoil'
import {jobDetails, jobError, loggedIn} from '../../recoil/atoms'
import axios from 'axios'
import {API_URI} from '../../EndPoints'
import {Container, CircularProgress, Grid, Paper, Button, TextField} from '@material-ui/core'
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import {LoadingDiv} from '../../styles/jobs/jobs';
import {JIDiv, paper, SubTitle, InfoList, InfoListItem, ButtonDiv, Hr, InfoListItemTwo, DescriptionList, DescriptionListItem} from '../../styles/job-details/jobInfo';
import Login from '../global/Login'
import {sosBlue, white} from '../../styles/global'

const JobInfo = (props) => {
        const id = props.paramInfo.id
        const [error, setError] = useRecoilState(jobError)
        const [jobInfo, setJobInfo] = useRecoilState(jobDetails);
        const [loading, setLoading] = useState(true)
        const [isLoggedIn] = useRecoilState(loggedIn)
        const [isLoginPanelOpen, setIsLoginPanelOpen] = useState(false);

        useEffect(() => {
                axios.get(`${API_URI}public-job/${id}`)
                .then((data) => {
                        setJobInfo(data.data);
                        setLoading(false);
                })
                .catch(err => {
                        setError(err);
                        console.log(error);
                        setLoading(false)
                })
        }, [])

        console.log(jobInfo)

        const applyJob = () => {
                
        }

        const togglePanel = () => {
                setIsLoginPanelOpen(true);
                const x = window.scrollX;
                const y = window.scrollY;
                window.onscroll = () => window.scrollTo(x, y)
        }

        return (
                <JIDiv>
                        <Container>
                                {
                                        loading ? <LoadingDiv><CircularProgress /></LoadingDiv> : 
                                        error ? <LoadingDiv><h3>{error}</h3></LoadingDiv> :
                                        <Grid container spacing={3}>
                                                <Grid item xs={12} md={8}>
                                                        <Paper style={paper} elevation={0}>
                                                                <h1 style={{maxWidth: '75%'}}>{jobInfo.jobTitle}</h1>
                                                                <SubTitle>{jobInfo.company}</SubTitle>
                                                                <InfoList>
                                                                        <InfoListItem><WorkOutlineIcon fontSize="small" /> Experience</InfoListItem>
                                                                        {
                                                                                (jobInfo.ctcMin || jobInfo.ctcMax) ? (
                                                                                        <InfoListItem>&#8377; {jobInfo.ctcMin}-{jobInfo.ctcMax}</InfoListItem> ) : (
                                                                                        <InfoListItem>&#8377; Not disclosed</InfoListItem>
                                                                                )  
                                                                        }
                                                                        <InfoListItem><AccessTimeIcon fontSize="small" /> {jobInfo.division}</InfoListItem>
                                                                        <InfoListItem><LocationOnOutlinedIcon fontSize="small" /> {jobInfo.state} - {jobInfo.zone}</InfoListItem>
                                                                </InfoList>
                                                                {/* <ButtonDiv>
                                                                        {
                                                                                isLoggedIn ?
                                                                                        <Button style={{backgroundColor: `${sosBlue}`, color: `${white}`}} onClick={() => applyJob()}>Apply</Button> :
                                                                                        <Button style={{backgroundColor: `${sosBlue}`, color: `${white}`}}>Login to Apply</Button>
                                                                        }
                                                                </ButtonDiv> */}
                                                                <Hr />
                                                                <div>
                                                                        <InfoList>
                                                                                <InfoListItemTwo><small>Posted: <b>post</b></small></InfoListItemTwo>
                                                                                <InfoListItemTwo><small>Openings: <b>{jobInfo.noOfOpenings}</b></small></InfoListItemTwo>
                                                                                <InfoListItemTwo><small>Status: <b>{jobInfo.status}</b></small></InfoListItemTwo>
                                                                        </InfoList>
                                                                </div>
                                                        </Paper>
                                                        {/* <Paper elevation={0} style={paper}>
                                                                <SubTitle>Job Description</SubTitle>
                                                                <p>{jobInfo}</p>

                                                                <DescriptionList>
                                                                        <DescriptionListItem>
                                                                                <span><b>Eligibility:</b></span><br/>
                                                                                <ul>
                                                                                {
                                                                                        jobInfo.jobDetails.eligibility.map((data, i) => (
                                                                                                        <li key={i}>{data}</li>
                                                                                        ))
                                                                                } 
                                                                                </ul>
                                                                        </DescriptionListItem>
                                                                        <DescriptionListItem>
                                                                                <span><b>Responsibilities:</b></span><br/>
                                                                                <ul>
                                                                                        {
                                                                                                jobInfo.jobDetails.responsibilities.map((data, i) => (
                                                                                                                <li key={i}>{data}</li>
                                                                                                ))
                                                                                        }
                                                                                </ul>
                                                                        </DescriptionListItem>
                                                                        <DescriptionListItem>
                                                                                <span><b>Industry</b></span><br/>
                                                                                <span>{jobInfo.jobOpeningInfo.industry}</span>
                                                                        </DescriptionListItem>
                                                                        <DescriptionListItem>
                                                                                <span><b>Job Type</b></span><br/>
                                                                                <span>{jobInfo.jobOpeningInfo.jobType}</span>
                                                                        </DescriptionListItem>
                                                                </DescriptionList>      
                                                        </Paper> */}
                                                </Grid>
                                                <Grid item xs={12} md={4}>
                                                        <Paper elevation={0} style={paper}>

                                                        </Paper>
                                                </Grid>
                                        </Grid>
                                }
                        </Container>
                        <Login isLoginPanelOpen={isLoginPanelOpen} setIsLoginPanelOpen={setIsLoginPanelOpen} /> 
                </JIDiv>
        )
}

export default JobInfo
