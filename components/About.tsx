import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import dataInfo from '../data.json';

const { primaryColor } = dataInfo.appConfig

const aboutDetail = dataInfo.about.details

const About = () => {
    const [len, setlen] = useState<number>(400)
    const [showMore, setShowMore] = useState<boolean>(true)
    const showIncrement = (content:string) => {
        return content.slice(0, len)
    }

    const showMoreOrLess = () => {
        if(len == 400) {
            setlen(aboutDetail.length)
            setShowMore(false)
        } else {
            setlen(400)
            setShowMore(true)
        }
    }
  return (
    <Flex id='about' flexDir='column' alignItems='center' my={'20rem'}>
        <Heading my='4rem' width='fit-content' fontFamily={'sans-serif'}>About Me</Heading>
        <Box width={{base:'100%', md:'40rem'}} fontSize={{base:15, md:18}} fontFamily={'monospace'} lineHeight={2} letterSpacing={2}>
            {showIncrement(aboutDetail)}
            <Text color={primaryColor} cursor='pointer' onClick={showMoreOrLess}>Read {`${showMore?'more...':'less'}`}</Text>
        </Box>
    </Flex>
  )
}

export default About