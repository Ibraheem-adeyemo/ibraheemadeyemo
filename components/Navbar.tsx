import React, { useState } from 'react'
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter,useDisclosure, DrawerHeader, DrawerOverlay, Flex, Link, Text, VStack, Button, IconButton } from '@chakra-ui/react'
import { title } from 'process'
import { HamburgerIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

export const AnimateLink = motion(Link)

const navItms = [
    {name: 'home', to:'#'}, {name: 'Portfolio', to:'#portfolio'}, {name: 'Experiences', to:'#experience'}, {name: 'Contacts', to:'#contact'} ]
export const DesktopNavbar = () => {
   
  return (
    <Box py={50} display={{base:'none', lg:'flex'}} justifyContent='space-between'>
        <Text>Ibraheem</Text>

        <Flex justifyContent={'flex-end'}>
            {navItms && navItms.map((itms, i) => {
            return(
                <Box mx={10} key={i}>
                    <AnimateLink whileHover={{
                        fontSize:'18px',
                        transition:{
                            duration:0.8
                        }
                    }}
                    href={itms.to}
                    variant='menuLink'>{itms.name.toUpperCase()}</AnimateLink>
                </Box>
            )
            })}
        </Flex>
    </Box>
  )
}

export const MobileNavbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const p = 15, placement='left'
   
    return(
        <Flex p={10} justifyContent='space-between' display={{base:'flex', lg:'none'}}>
            <Text>Ibraheem</Text>
            <Box>
            <Button bg='#0D74FF' onClick={onOpen} width={20} p={2}>
                <HamburgerIcon />
            </Button>
            <Drawer
            isOpen={isOpen}
            placement={placement}
            onClose={onClose}
            >
            <DrawerOverlay />
            <DrawerContent alignItems="center">
                <DrawerCloseButton alignSelf="end" mx={p} my={p} />
                <DrawerHeader my={p}>
                <Text as="p"> {title} </Text>
                </DrawerHeader>
                <DrawerBody>
                <VStack alignItems="left">
                {navItms && navItms.map((itms, i) => {
                return(
                    <Box mx={10} key={i}>
                        <AnimateLink href={itms.to}>{itms.name.toUpperCase()}</AnimateLink>
                    </Box>
        )
        })}
                </VStack>
                </DrawerBody>
            </DrawerContent>
            </Drawer>
            </Box>
      </Flex>
    )
}