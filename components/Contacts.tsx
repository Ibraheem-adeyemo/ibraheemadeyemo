import { Flex } from '@chakra-ui/react'
import React from 'react'
import { ContactForm } from './ContactForm'

const Contacts = () => {
  return (
    <Flex id='contact' mb={200}>
        <ContactForm />
    </Flex>
  )
}

export default Contacts