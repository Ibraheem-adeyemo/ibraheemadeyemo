import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react'
import dataInfo from '../data.json';

const About = () => {
  return (
    <Flex id='about' flexDir='column' alignItems='center' my={'20rem'}>
        <Heading my='4rem' width='fit-content' fontFamily={'sans-serif'}>About</Heading>
        <Box width={'40rem'} fontSize={18} borderRadius='50%' fontFamily={'monospace'} lineHeight={2} letterSpacing={2}>
            {dataInfo.about.details}
        </Box>
    </Flex>
  )
}

export default About