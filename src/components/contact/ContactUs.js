import React, {useState} from 'react'
import {Container, Grid, TextField, Button, CircularProgress} from '@material-ui/core'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import SweetAlert from 'sweetalert2-react'
import {ContactDiv, Title, ItemDiv, ContactForm} from '../../styles/contact/contactUs'
import phoneImg from '../../assets/contact/Phone.svg'
import emailImg from '../../assets/contact/Email.svg'
import addressImg from '../../assets/contact/Address.svg'
import {sosBlue, white} from '../../styles/global'

const ContactUs = () => {

        const [loading, setLoading] = useState(false);
        const [successShow, setSuccessShow] = useState(false);
        const [failShow, setFailShow] = useState(false);

        const listItems = [
                {
                        img: addressImg,
                        title: 'Address',
                        d1: '252F Ground Floor, Iskcon Mandir Road,',
                        d2: 'Sant Nagar ,East of Kailash,',
                        d3: 'New Delhi -110065 (India)'
                },
                {
                        img: emailImg,
                        title: 'Email',
                        d1: 'info@switchonsuccess.in',
                        d2: 'hr@switchonsuccess.in',
                },
                {
                        img: phoneImg,
                        title: 'Phone',
                        d1: '+91 9810693347',
                        d2: '+91 9999333901'
                }
        ]

        const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

        function restrictAlphabets(e) {
                var x = e.which || e.keycode;
                if ((x >= 48 && x <= 57))
                    return true
                else
                    return false
            }

        const validationSchema = yup.object({
                name: yup
                        .string('Enter your Name')
                        .required('Name is required'),
                phone: yup
                        .string().matches(phoneRegExp, 'Phone number is not valid')
                        .max(10, 'Invalid Phone number')
                        .min(10, 'Invalid Phone number')
                        .required('Phone number is required')
                        ,
                email: yup
                        .string('Enter your email')
                        .email('Enter a valid email')
                        .required('Email is required'),
              });

        const formik = useFormik({
                initialValues: {
                        name: '',
                        phone: '',
                        email: '',
                        message: ''
                      },
                validationSchema: validationSchema,
                onSubmit: (values, {resetForm}) => {
                        // console.log(`submit: ${JSON.stringify(values)}`);
                        setLoading(true);
                        axios({
                                method: 'POST',
                                url: 'https://careerbest-api.herokuapp.com/send',
                                // url: 'http://localhost:8080/send',
                                data: {
                                        name: values.name,
                                        email: values.email,
                                        phone: values.phone,
                                        message: values.message
                                }
                        })
                        .then((response) => {
                                if(response.data.msg === 'success') {
                                        setLoading(false);
                                        setSuccessShow(true);
                                        resetForm({values: ''});
                                }
                                else if(response.data.msg === 'fail') {
                                        setLoading(false);
                                        setFailShow(true);
                                }
                        })

                }
        });

        return (
                <ContactDiv>
                        <Container>
                                <Grid container>
                                        <Grid item xs={12} md={6}>
                                        <Title>Contact Us.<br/> It’s Easy.</Title>
                                                {
                                                     listItems.map((item, i) => (
                                                             <ItemDiv key={i}>
                                                                     <img src={item.img} alt={item.title} />
                                                                     <div>
                                                                             <p><b>{item.title}:</b></p>
                                                                             <p>{item.d1}<br/>{item.d2}<br/>{item.d3}</p>
                                                                     </div>
                                                             </ItemDiv>
                                                     ))   
                                                }
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                                <ContactForm onSubmit={formik.handleSubmit} id="ContactForm">
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
                                                                helperText={formik.touched.name && formik.errors.name}
                                                        />
                                                        <TextField
                                                                fullWidth
                                                                variant="outlined"
                                                                size="small"
                                                                type="tel"
                                                                id="phone"
                                                                name="phone"
                                                                label="Phone"
                                                                inputProps={{ maxLength: 10, onKeyPress: (e) => {restrictAlphabets(e)} }}
                                                                value={formik.values.phone}
                                                                onChange={formik.handleChange}
                                                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                                                helperText={formik.touched.phone && formik.errors.phone}
                                                        />
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
                                                        <TextField
                                                                fullWidth
                                                                variant="outlined"
                                                                multiline
                                                                rows={4}
                                                                size="small"
                                                                id="message"
                                                                name="message"
                                                                label="Message"
                                                                value={formik.values.message}
                                                                onChange={formik.handleChange}
                                                        />
                                                        <Button style={{background: `${sosBlue}`, color: 'white'}} fullWidth type="submit">
                                                                {
                                                                        (loading) ? 
                                                                        <CircularProgress size={24} style={{color: `${white}`}} /> :
                                                                        (<>Send</>)
                                                                }
                                                        </Button>
                                                </ContactForm>
                                        </Grid>
                                </Grid>
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
                        </Container>
                </ContactDiv>
        )
}

export default ContactUs
