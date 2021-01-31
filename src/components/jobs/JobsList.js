import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {useRecoilState} from 'recoil'
import {Link} from 'react-router-dom'
import {jobs, jobError} from '../../recoil/atoms'
import axois from 'axios'
import {API_URI} from '../../EndPoints'
import {Container, Grid, Paper, CircularProgress, IconButton, Tooltip, Button} from '@material-ui/core'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {JobsDiv, LoadingDiv, gridItem, GridItemTitle, GridItemList, GridItemListItem, Description, BottomDiv} from '../../styles/jobs/jobs'

function useQuery() {
        return new URLSearchParams(useLocation().search);
      }

const JobsList = () => {
        const [jobsList, setJobsList] = useRecoilState(jobs);
        const [error, setError] = useRecoilState(jobError);
        const [loading, setLoading] = useState(true);
        const [page, setPage] = useState(1);

        useEffect(() => {
                        axois.get(`${API_URI}public-jobs?page=${page}`)
                        .then(data => {
                                setJobsList(data.data);
                                setLoading(false);
                        })
                        .catch(err => setError(err));
        }, [page]);

        return (
                <JobsDiv>
                        <Container>
                                {
                                        loading ? <LoadingDiv><CircularProgress /></LoadingDiv> : 
                                        error ? 
                                        (<LoadingDiv><h3>{error}</h3></LoadingDiv>) :
                                        <Grid container spacing={2}>
                                                {
                                                        jobsList.docs.map((item, i) => (
                                                                <Grid item xs={12} key={i}>
                                                                        <Link to={`/jobs/${item._id}`} target="_blank">
                                                                                <Paper elevation={0} style={gridItem}>
                                                                                        <GridItemTitle>{item.jobTitle}</GridItemTitle>
                                                                                        <h5>{item.company}</h5>
                                                                                        <GridItemList>
                                                                                                <GridItemListItem><WorkOutlineIcon fontSize="small" /> Experience</GridItemListItem>
                                                                                                {
                                                                                                        (item.ctcMin || item.ctcMax) ? (
                                                                                                                <GridItemListItem>&#8377; {item.ctcMin}-{item.ctcMax}</GridItemListItem> ) : (
                                                                                                                <GridItemListItem>&#8377; Not disclosed</GridItemListItem>
                                                                                                        )  
                                                                                                }
                                                                                                <GridItemListItem><AccessTimeIcon fontSize="small" /> {item.division}</GridItemListItem>
                                                                                                <GridItemListItem><LocationOnOutlinedIcon fontSize="small" /> {item.state} - {item.zone}</GridItemListItem>
                                                                                        </GridItemList>
                                                                                        {/* <Description>{item.jobDetails.jobDescription}</Description> */}
                                                                                        <BottomDiv>
                                                                                                <p>posted on</p>
                                                                                                <Tooltip title="Save">
                                                                                                        <IconButton style={{width: 6, height: 50}}>
                                                                                                                <BookmarkBorderIcon fontSize="inherit" />
                                                                                                        </IconButton>
                                                                                                </Tooltip>
                                                                                        </BottomDiv>
                                                                                </Paper>
                                                                        </Link>
                                                                </Grid>
                                                        ))
                                                }
                                                <Grid item xs={12} style={{textAlign: 'right'}}>
                                                        <Tooltip title="Previous">
                                                                <Button style={{background: 'white', marginRight: 8}} onClick={() => setPage(page-1)} disabled={(jobsList.page === 1) ? true : false}>
                                                                        <ChevronLeftIcon />
                                                                </Button>
                                                        </Tooltip>
                                                        <Tooltip title="Next">
                                                                <Button style={{background: 'white'}} onClick={() => setPage(page+1)} disabled={(page === jobsList.pages) ? true : false}>
                                                                        <ChevronRightIcon />
                                                                </Button>
                                                        </Tooltip>
                                                </Grid>
                                        </Grid>
                                }
                        </Container>
                </JobsDiv>
        )
}

export default JobsList
