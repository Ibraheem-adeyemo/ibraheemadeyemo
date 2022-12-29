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
    useToast
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import { ChangeEvent, FormEvent, useState } from 'react';
import dataInfo from '../data.json'
import { ContactInfo } from './ContactInfo';
import { submitform, validateContent, validateEmail } from '../utils/lib';
import { FormDataType } from '../models/form.model';

const { secondaryColor, primaryColor } = dataInfo.appConfig

  export const ContactForm = () => {
    const [formData, setFormData] = useState({email:'', content:''})

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => {
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
            
        })
    }

    const toast = useToast()
    const handleFileUpload = (e:ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files) return
        setFormData(prev => {
            return {
                ...prev,
                files:e.target.files ? e.target!.files[0]!:null
            }
            
        })
    }

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setFormData(prev => {
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
            
        })
    }

    const toastify = (statu:any, title:string) => {
        return toast({
            status:statu,
            isClosable: true,
            variant: "left-accent",
            title
        })
    }
    
    const handleSubmit = async () => {
        console.log(validateContent(formData.content))
        try {
            if(validateContent(formData.content) && validateEmail(formData.email)) {
                const res = await submitform(formData as FormDataType)
                console.log(res)
                toastify('success','Thank you')
            } else{
            toastify('error','Please ensure you put valid email and message content at least')
            }
        } catch (error) {
            toastify('error','error from backend')
        }
        
    }

    return (
      <Container bg={secondaryColor} maxW={'100%'} id='contact'>
        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }} m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }} color="white"
            borderRadius="lg">
                <ContactInfo />
                <WrapItem width={'500px'}>
                  <Box bg="white" borderRadius="lg" width={'100%'}>
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>First Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" name='fName' size="md" onChange={e =>handleChange(e)} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Last Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" name='lName' size="md" onChange={e =>handleChange(e)} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name" isRequired>
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="email" name='email' size="md" onChange={e =>handleChange(e)}  />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name" isRequired>
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            name='content'
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                            onChange={e =>handleTextChange(e)} 
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Upload</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="file" name='file' size="md" onChange={e =>handleFileUpload(e)} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg={primaryColor}
                            color="white"
                            onClick={()=>handleSubmit()}
                            _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
        {/* <Box
            bg="#02054B"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              
            </Box>
          </Box> */}
      </Container>
    );
  }