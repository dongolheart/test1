import React from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { Box, Button, Container, TextField, Typography } from '@mui/material'

const Contact = () => {
    return (
        <>
            <Nav />
            <Typography variant='h4' color='secondary' align='center' p={'10px'}>
                Contact
            </Typography>

            <Container className='mx-auto'>
                <Box className='contact-container' display='flex'>
                    <Box className='address' width='50%'>
                        <Typography variant='h4' fontWeight={'bold'} sx={{textDecoration:'underline'}}>Our Store</Typography>
                        <Typography variant='h6'>Kathmandu, Nepal</Typography>
                        <Typography variant='h6'>+977 9801012345</Typography>
                        <Typography variant='h6'>info@outstore.com</Typography>
                        <Typography variant='h6'>www.ourstore.com</Typography>
                    </Box>
                    <Box className='contact-form' width='50%'>
                        <Box>
                        <TextField label='Email' variant='outlined' fullWidth='true' multiline maxRows={1} helperText='email is required' placeholder='enter email here' required/><br/><br/>
                        <TextField label='Subject' variant='outlined' fullWidth='true' multiline maxRows={1}/><br/><br/>
                        <TextField label='Message' variant='outlined' fullWidth='true' multiline maxRows={4} minRows={4}/><br/><br/>
                        <Button fullWidth='true' variant='contained'>Submit</Button>
                        

                        </Box>
                    </Box>
                </Box>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7073.560045823958!2d85.57872169491134!3d27.569336731060165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0a1f14d027e1%3A0x68a6f287e6ad4793!2sNamobuddha%2C%20Simalchaur%20Syampati%2045200!5e0!3m2!1sen!2snp!4v1648178014690!5m2!1sen!2snp" width="100%" height="450" style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Container>



            <Footer />

        </>
    )
}

export default Contact