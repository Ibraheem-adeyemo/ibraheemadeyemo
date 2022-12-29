import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import { useState } from 'react';
import dataInfo from '../data.json'

const { secondaryColor, primaryColor } = dataInfo.appConfig
  
  export const ContactInfo = () => {
    const formData = {
        
    }
    const handleSubmit = () => {
        console.log(formData)
    }

    const { phoneNo, email, address, facebook, twitter, discord } = dataInfo.contactInfo
    return (
    //   <Container bg={secondaryColor} maxW={'100%'}>
    //     <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }} m={{ sm: 4, md: 16, lg: 10 }}
    //         p={{ sm: 5, md: 5, lg: 16 }} color="white"
    //         borderRadius="lg">
    //             <WrapItem >
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color={primaryColor}
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                          { phoneNo }
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="300px"
                          variant="ghost"
                          color={primaryColor}
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                          {email}
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color={primaryColor}
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                          {address}
                        </Button>
                      </VStack>
                    </Box>
                    <Flex
                      mt={{ lg: 10, md: 10 }}
                    //   spacing={1}
                    //   px={5}
                    //   alignItems="flex-start"
                      >
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        as='a'
                        href='#'
                        isRound={true}
                        _hover={{ bg: primaryColor }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="sm"
                        as='a'
                        href='https://github.com/Ibraheem-adeyemo'
                        target='_blank'
                        isRound={true}
                        _hover={{ bg: primaryColor }}
                        icon={<BsGithub size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        as='a'
                        href='#'
                        isRound={true}
                        _hover={{ bg: primaryColor }}
                        icon={<BsDiscord size="28px" />}
                      />
                    </Flex>
                  </Box>
    );
  }