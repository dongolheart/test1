import { Box, Checkbox, Container, FormLabel, Typography } from '@mui/material'
import React from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import Products from '../Products'

const Deals = () => {
    return (
        <>
            <Nav />

            <Typography variant='h4' color='secondary' align='center' className='mt-3'>
                Deals
            </Typography>
            {/* <Box> */}
            {/* <Typography variant='body1' align='justify'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat laborum ab, dolor rerum rem fuga enim veritatis? Aut minus perferendis fugit molestiae laboriosam libero dignissimos doloribus optio? Quos quasi omnis animi, accusamus dolorem iure velit id delectus ex recusandae similique? Tempora, ex. Esse asperiores delectus commodi corporis, harum molestias sint ipsum possimus neque qui, quos, ea odit illum veniam illo quidem iusto maxime cumque necessitatibus mollitia nulla nihil?
            </Typography>        */}

            {/* </Box> */}

            <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: '25%', pl: '20px' }}>
                    <Typography variant='h6' sx={{ pt: '35px', color: 'blue', pl: 0 }} >Category</Typography><br />

                    <Checkbox color='success' defaultChecked id='check1' size='sm' ></Checkbox>
                    <FormLabel htmlFor='check1' >Computers</FormLabel><br />

                    <Checkbox color='success' id='check2' size='sm' ></Checkbox>
                    <FormLabel htmlFor='check2' >Mobiles</FormLabel><br />

                    <Checkbox color='success' id='check3' size='sm' ></Checkbox>
                    <FormLabel htmlFor='check3' >Accessories</FormLabel><br />

                    <Checkbox color='success' id='check4' size='sm' ></Checkbox>
                    <FormLabel htmlFor='check4' >Home</FormLabel><br />

                    <Checkbox color='success' id='check5' size='sm' ></Checkbox>
                    <FormLabel htmlFor='check5' >Beauty</FormLabel><br />
                </Box>
                <Box sx={{ width: '75%' }}>
                    <Products />
                </Box>

            </Box>

            <Footer />
        </>
    )
}

export default Deals