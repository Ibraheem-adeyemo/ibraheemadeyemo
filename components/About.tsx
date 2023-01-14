import { Box, Flex, Heading } from '@chakra-ui/react';
import React, { useState } from 'react'
import dataInfo from '../data.json';

const About = () => {
    const [len, setlen] = useState<number>(400)
    const showIncrement = (content:string) => {
        return content.slice(0, len)
    }
  return (
    <Flex id='about' flexDir='column' alignItems='center' my={'20rem'}>
        <Heading my='4rem' width='fit-content' fontFamily={'sans-serif'}>About Me</Heading>
        <Box width={{base:'100%', md:'40rem'}} fontSize={{base:15, md:18}} borderRadius='50%' fontFamily={'monospace'} lineHeight={2} letterSpacing={2}>
            {showIncrement(dataInfo.about.details)}
        </Box>
    </Flex>
  )
}

export default About