import React, {useState} from 'react'
import firebase from '../../firebaseConfig'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {TextField, Button, CircularProgress, Grid} from '@material-ui/core'
import {LoginDiv, Overlay, closeIcon, LoginTitle, Hr, googleBtn, GoogleImg} from '../../styles/global/login'
import googleIcon from '../../assets/global/google.svg'
import CloseIcon from '@material-ui/icons/Close';
import {sosBlue, white} from '../../styles/global'


const Login = (props) => {

        const auth = firebase.auth()
        const [isLoading, setIsLoading] = useState(false)
        const {isLoginPanelOpen, setIsLoginPanelOpen} = props

        const validationSchema = yup.object({
                password: yup
                        .string()
                        .min(6, 'Minimum 6 characteres')
                        .required('password is required'),
                email: yup
                        .string('Enter your email')
                        .email('Enter a valid email')
                        .required('Email is required'),
              });

              const formik = useFormik({
                initialValues: {
                        email: '',
                        password: ''
                      },
                validationSchema: validationSchema,
                onSubmit: (values, {resetForm}) => {
                        resetForm({values: ''});
                        setIsLoading(true);
                        auth.signInWithEmailAndPassword(`${values.email}`, `${values.password}`)
                        .then((user) => {setIsLoading(false); togglePanel()})
                        .catch(err => {console.log(err); setIsLoading(false)})

                }
        });

        const googleLogin = () => {
                var provider = new firebase.auth.GoogleAuthProvider();
                auth.signInWithPopup(provider)
                .then((result) => {
                        console.log(result);
                        setIsLoginPanelOpen(false)
                })
                .catch(err => console.error(err))
        }

        const togglePanel = () => {
                setIsLoginPanelOpen(false);
                window.onscroll = () => {}
        }

        return (
                <>
                        {
                                isLoginPanelOpen ? <Overlay onClick={togglePanel}></Overlay> : null
                        }
                        <LoginDiv style={ !isLoginPanelOpen ? {transform: `translateX(100%)`} : null}>
                                <CloseIcon style={closeIcon} onClick={togglePanel} />
                                <LoginTitle>Login</LoginTitle>
                                <form onSubmit={formik.handleSubmit}>
                                        <Grid container spacing={2}>
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
                                                                id="password"
                                                                name="password"
                                                                label="Password"
                                                                type="password"
                                                                value={formik.values.password}
                                                                onChange={formik.handleChange}
                                                                error={formik.touched.password && Boolean(formik.errors.password)}
                                                                helperText={formik.touched.password && formik.errors.password}
                                                        />
                                                </Grid>
                                                <Grid item xs={12}>
                                                        <Button style={{background: `${sosBlue}`, color: `${white}`, width: '100%'}} type="submit">
                                                                {
                                                                        (isLoading) ? 
                                                                        <CircularProgress size={24} style={{color: `${white}`}} /> :
                                                                        (<>Login</>)
                                                                }
                                                        </Button>
                                                </Grid>
                                        </Grid>
                                        <p align="right"><small>Forget password</small></p>
                                </form>  
                                <Hr />
                                <Button style={googleBtn}><GoogleImg src={googleIcon} width="20px"/> Google Login</Button>
                                <Hr />
                                <p>New to Switch On Success? Signup here</p>
                        </LoginDiv>
                </>
        )
}

export default Login