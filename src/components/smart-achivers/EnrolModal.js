import React, {useState} from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import * as yup from 'yup'
import SweetAlert from 'sweetalert2-react'
import {TextField, Button, CircularProgress, Grid} from '@material-ui/core'
import {LoginDiv, Overlay, closeIcon, LoginTitle, Hr, googleBtn, GoogleImg} from '../../styles/global/login'
import googleIcon from '../../assets/global/google.svg'
import CloseIcon from '@material-ui/icons/Close'
import {sosBlue, white} from '../../styles/global'

function EnrolModal(props) {

        const [isLoading, setIsLoading] = useState(false)
        const {isLoginPanelOpen, setIsLoginPanelOpen} = props
        const [successShow, setSuccessShow] = useState(false)
        const [failShow, setFailShow] = useState(false)

        const togglePanel = () => {
                setIsLoginPanelOpen(false);
                window.onscroll = () => {}
        }

        const submitHandler = (values, resetForm) => {
                setIsLoading(true)
                // console.log(values)

                axios({
                        method: 'POST',
                        // url: 'http://localhost:8080/enrollment-form',
                        url: 'https://careerbest-api.herokuapp.com/enrollment-form',
                        data: {
                                name: values.name,
                                email: values.email,
                                phone: values.phone,
                                education: values.education,
                                year: values.year,
                                address: values.address,
                                page: props.page
                        }
                })
                .then((response) => {
                        if(response.data.msg === 'success') {
                                setIsLoading(false);
                                setSuccessShow(true);
                                resetForm({values: ''});
                        }
                        else if(response.data.msg === 'fail') {
                                setIsLoading(false);
                                setFailShow(true);
                        }
                })
                .catch(err => {
                        setIsLoading(false);
                        setFailShow(true);
                })
        }

        const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

        const validationSchema = yup.object({
                name: yup.string('Enter Your Name').required("Name is required"),
                email: yup.string('Enter Your email').email('Enter Valid email').required("Email is required"),
                phone: yup.string().matches(phoneRegExp, 'Phone number is not valid')
                        .max(10, 'Invalid Phone number')
                        .min(10, 'Invalid Phone number')
                        .required('Phone number is required'),
                education: yup.string('Enter your highest education').required('Highest Education required'),
                year: yup.string('Enter passing year').required('Passing year requried'),
                address: yup.string('Enter your Current Address').required('Address required')

        })

        const formik = useFormik({
                initialValues: {
                        name: '',
                        email: '',
                        phone: '',
                        education: '',
                        year: '',
                        address: ''
                },
                validationSchema,
                onSubmit: (values, {resetForm}) => {
                        submitHandler(values, resetForm)
                }
        })

        return (
                <>
                        {
                                isLoginPanelOpen ? <Overlay onClick={togglePanel}></Overlay> : null
                        }
                        <LoginDiv style={ !isLoginPanelOpen ? {transform: `translateX(100%)`} : null}>
                                <CloseIcon style={closeIcon} onClick={togglePanel} />
                                <LoginTitle>Enroll Form</LoginTitle>
                                <form onSubmit={formik.handleSubmit}>   
                                        <Grid container spacing={3}>
                                                <Grid item xs={12}>
                                                        <TextField
                                                                fullWidth
                                                                variant="outlined"
                                                                size="small"
                                                                id="name"
                                                                name="name"
                                                                label="Name"
                                                                value={formik.values.name}
                                                                onChange={formik.handleChange}
                                                                error={formik.touched.name && Boolean(formik.errors.name)}
                                                                helperText={formik.touched.name && formik.errors.name}name
                                                        />  
                                                </Grid>
                                                <Grid item xs={12}>
                                                        <TextField
                                                                fullWidth
                                                                variant="outlined"
                                                                size="small"
                                                                id="email"
                                                                name="email"
                                                                label="Email"
                                                                value={formik.values.email}
                                                                onChange={formik.handleChange}
                                                                error={formik.touched.email && Boolean(formik.errors.email)}
                                                                helperText={formik.touched.email && formik.errors.email}
                                                        />  
                                                </Grid>
                                                <Grid item xs={12}>
                                                        <TextField
                                                                fullWidth
                                                                variant="outlined"
                                                                size="small"
                                                                type="tel"
                                                                id="phone"
                                                                name="phone"
                                                                label="phone"
                                                                inputProps={{ maxLength: 10}}
                                                                value={formik.values.phone}
                                                                onChange={formik.handleChange}
                                                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                                                helperText={formik.touched.phone && formik.errors.phone}
                                                        />  
                                                </Grid>
                                                <Grid item xs={12}>
                                                        <TextField
                                                                fullWidth
                                                                variant="outlined"
                                                                size="small"
                                                                id="education"
                                                                name="education"
                                                                label="Highest Education"
                                                                value={formik.values.education}
                                                                onChange={formik.handleChange}
                                                                error={formik.touched.education && Boolean(formik.errors.education)}
                                                                helperText={formik.touched.education && formik.errors.education}
                                                        />  
                                                </Grid>
                                                <Grid item xs={12}>
                                                        <TextField
                                                                fullWidth
                                                                variant="outlined"
                                                                size="small"
                                                                id="year"
                                                                name="year"
                                                                label="Passing Year"
                                                                value={formik.values.year}
                                                                onChange={formik.handleChange}
                                                                error={formik.touched.year && Boolean(formik.errors.year)}
                                                                helperText={formik.touched.year && formik.errors.year}
                                                        />  
                                                </Grid>
                                                <Grid item xs={12}>
                                                        <TextField
                                                                fullWidth
                                                                variant="outlined"
                                                                size="small"
                                                                id="address"
                                                                name="address"
                                                                label="Address"
                                                                value={formik.values.address}
                                                                onChange={formik.handleChange}
                                                                error={formik.touched.address && Boolean(formik.errors.address)}
                                                                helperText={formik.touched.address && formik.errors.address}
                                                                multiline
                                                        />  
                                                </Grid>
                                                <Grid item xs={12}>
                                                        <Button style={{background: `${sosBlue}`, color: `${white}`, width: '100%'}} type="submit">
                                                                {
                                                                        (isLoading) ? 
                                                                        <CircularProgress size={24} style={{color: `${white}`}} /> :
                                                                        (<>Submit</>)
                                                                }
                                                        </Button>
                                                </Grid> 
                                        </Grid>     
                                </form>  
                                <SweetAlert
                                        type='success'
                                        show={successShow}
                                        title="Sent Successfully!"
                                        text="We will Contact you within 24 hrs!"
                                        onConfirm={() => setSuccessShow(false)}
                                        />
                                <SweetAlert
                                        type='error'
                                        show={failShow}
                                        title="Sending Failed"
                                        text="Oops!, Something went wrong.."
                                        onConfirm={() => setFailShow(false)}
                                        />
                        </LoginDiv>
                </>
        )
}

export default EnrolModal
