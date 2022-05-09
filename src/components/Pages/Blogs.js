import React from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { Box, Typography } from '@mui/material'

const Blogs = () => {
    return (
        <>
            <Nav />
            <Typography variant='h4' color='secondary' align='center' p={'10px'}>
                Blogs
            </Typography>

            <Box className='blogs-container' p='15px' backgroundColor='skyblue'>
                <Box className='blog' display='flex' backgroundColor='white' p='15px' borderRadius='15px'>
                    <Box className='blog-content' width='80%'>
                        <Box className='blog-title' > 
                            <Typography variant='h5' fontWeight='bold' sx={{textDecoration:"underline"}} color='secondary'>
                                Blog Title
                            </Typography>
                        </Box>
                        <Box className='blog-text'>
                            <Typography variant='body2' align='justify' px='25px'>
                            Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text 
                            </Typography>
                            </Box>
                    </Box>
                    <Box className='blogger' width={'20%'}>
                        <Box className='blogger-img' width={'100%'} borderRadius='50%' overflow={'hidden'} boxShadow={3}>
                            <img src='./images/img7.jpg' width='100%'></img>
                        </Box>
                        <Box className='blogger-name'>
                            <Typography variant='h6' align='right'>
                            - Blogger
                            </Typography>
                            </Box>
                    </Box>
                </Box>

                <Box className='blog mt-3' display='flex' backgroundColor='white' p='15px' borderRadius='15px'>
                    <Box className='blog-content' width='80%'>
                        <Box className='blog-title' > 
                            <Typography variant='h5' fontWeight='bold' sx={{textDecoration:"underline"}} color='secondary'>
                                Blog Title
                            </Typography>
                        </Box>
                        <Box className='blog-text'>
                            <Typography variant='body2' align='justify' px='25px'>
                            Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text 
                            </Typography>
                            </Box>
                    </Box>
                    <Box className='blogger' width={'20%'}>
                        <Box className='blogger-img' width={'100%'} borderRadius='50%' overflow={'hidden'} boxShadow={3}>
                            <img src='./images/img7.jpg' width='100%'></img>
                        </Box>
                        <Box className='blogger-name'>
                            <Typography variant='h6' align='right'>
                            - Blogger
                            </Typography>
                            </Box>
                    </Box>
                </Box>
            </Box>

            <Footer />
        </>
    )
}

export default Blogs