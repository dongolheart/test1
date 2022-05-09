import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'

const About = () => {
    return (
        <>
            <Nav />
            <Typography variant='h4' color='secondary' align='center' p={'10px'}>
                About Us
            </Typography>
            <Container maxWidth='md' className='mx-auto'>
                <Typography variant='body1' align='justify'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quas voluptatibus provident eos beatae autem facilis nisi aliquam aperiam doloremque! Laudantium, qui ut quae laboriosam maxime officiis voluptatem corrupti amet.
                </Typography>
            </Container>
            <Grid container justifyContent='space-evenly' className='mt-5'>
                <Grid item xs={3} boxShadow='3' p={2}>
                    <Card>
                        <CardMedia component="img" height="140"
                            image='/images/img9.jpg' />
                        <CardContent>
                            <Typography variant='h5'>Member 1</Typography>
                            <Typography variant='h6'>General Manager</Typography>
                        </CardContent>

                        <Box display='flex' justifyContent='space-between'>
                            <Button size="small">abc@gmail.com</Button>
                            <Button size="small">+977-9851012345</Button>
                        </Box>

                    </Card>
                </Grid>
                <Grid item xs={3} boxShadow='3' p={2}>
                    <Card>
                        <img src='./images/img8.jpg' style={{ "height": "200px", "width":"100%" }} />
                        <Typography variant='h5'>Member 2</Typography>
                        <Typography variant='h6'>Managing Director</Typography>
                        <Box display='flex' justifyContent={'space-between'}>
                            <Link href="#" >abc@gmail.com</Link>
                            <Link href="#" >+977-9851012345</Link>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={3} boxShadow='3' p={2}>
                    <Card>
                        <img src='./images/img8.jpg' style={{ "height": "200px", "width":"100%" }} />
                        <Typography variant='h5' align='center'>Member 2</Typography>
                        <Typography variant='h6' align='center'>Managing Director</Typography>
                        <Box display='flex' justifyContent={'space-between'}>
                            <Link href="#" >abc@gmail.com</Link>
                            <Link href="#" >+977-9851012345</Link>
                        </Box>
                    </Card>
                </Grid>
            </Grid>

            <Footer />
        </>
    )
}

export default About