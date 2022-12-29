import { Heading, VStack, Box, Text, Flex, Link, List, ListItem, ListIcon } from '@chakra-ui/react'
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import React, { CSSProperties, useState, useEffect} from 'react'
import { RxTriangleRight } from 'react-icons/rx';
import dataInfo from '../data.json'
import { MotionBox, MotionFlex, MotionText } from './framersComponent';

export const Experience = () => {
    const [tab, setTab] = useState(0)
    const [focus, setFocus] = useState(false)

    const focused:CSSProperties = {
        backgroundColor:'rgba(255, 0, 0, 0.6)',
        color:'white',
        borderLeft:'red solid 4px'
    }
    
  return (
    <VStack mb={{base:50, md:'20rem'}} id='experience' height={{base:'auto',md:350}}>
        <Heading mb={10} fontFamily={'sans-serif'}>Where I've worked</Heading>
        <Flex flexDir={{base:'column', md:'row'}} fontFamily={'monospace'} width={{base:'100%', md:'inherit'}}>
        <Flex flexDir={{base:'row', md:'column'}} mb={{base:10, md:'auto'}}>
            {
                 dataInfo?.experiences && dataInfo?.experiences.map((item, i)=>{
                    return (
                        <MotionText whileHover={{
                           scale:1.06,
                            transition: {duration: 0.95, ease:'easeOut'}
                        }} variant='mgLeft' key={i} style={tab === i?focused:undefined} onClick={()=>setTab(i)}>{item.company}</MotionText>
                    )
                 })
            }
        </Flex>
        <MotionFlex flexDirection='column' ml={{base:0, md:10}} width={{base:'auto', md:600}}>
            {
                dataInfo?.experiences && dataInfo?.experiences.map((item, i) => {
                    return (
                        <MotionFlex                              
                            display={tab === i?'flex':'none'}
                            flexDirection='column'
                            initial={{opacity:0}}
                            animate={{opacity:0.7}}
                            transition={{
                                duration:1.85
                            }}
                            exit={{ opacity: 0 }}
                            // layout
                            key={i}
                            >
                            <Text fontSize={'md'}>{item.JobTitle} <Link href={item.companyUrl}>@ {item.company}</Link></Text>
                            <Text fontSize={'xs'} mb={4}>{item.datStarted} - {item.dateEnd}</Text>
                            <List>
                                {
                                    item?.projectDone.map((prjd, i)=> {
                                        return (
                                            <ListItem key={i} display='flex' mb={2} alignItems={'flex-start'}>
                                                <ListIcon as={RxTriangleRight} />
                                                <Text fontSize={{base:'14px', lg:'16px'}} width={{base:'fit-content', md:'auto'}}>{prjd}</Text>
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
                            <Flex width={{base:'auto', md:'80%'}} justifyContent='space-evenly'>
                                {
                                    item.technologies.map((tech, i) => {
                                        return (
                                            <Text fontSize={'xs'} key={i}>{tech},</Text>
                                        )
                                    })
                                }
                            </Flex>
                        </MotionFlex>
                    )
                }) 
            }
        </MotionFlex>
        </Flex>
    </VStack>
  )
}
