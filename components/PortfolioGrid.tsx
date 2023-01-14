import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react'
import React, {useState} from 'react';
import dataInfo from '../data.json'
// import Image from 'next/image';

type PortfolioGridProps = {
    img:string
    content: string,
    reverse:boolean,
    left: number|string,
    title:string,
    cur:number,
    showIndex:number|undefined
}

const { secondaryColor, primaryColor } = dataInfo.appConfig

export const PortfolioGrid = (props:PortfolioGridProps) => {

    const { img, content, reverse, left, title, cur, showIndex } = props

    const [showOverlay, setShowOverlay] = useState<number|undefined>()

  return (
    <Flex flexDirection={{base:'column', md:reverse?'row-reverse': 'row'}} mb={20} position='relative' width={{base:'100%', md:'80%'}}>
        
        <Box rounded={'lg'} width={{base:'100%', md:'100%', lg:'70%', xl:'58.5'}} minH={'fit-content'} bgColor='none' position='relative' >
            {/* <Image src={img} alt='images' layout='fill' objectFit='cover' priority /> */}
            <Image src={img} alt={title} objectFit='cover' rounded={'xl'} height={{base:'fit-content', md:400}} boxShadow={'6px 6px 20px black'}  />
        </Box>
        
        {showIndex && showIndex === cur && <Flex position='absolute' zIndex={100} flexDir='column' bg={{base:secondaryColor, md:'none'}} fontSize={{base:12, md:16}} p={{base:2, md:5}} top={{base:4, md:10}} width={{base:'95%', md:'600px'}} _hover={{diaplay:'flex'}} left={{base:2, md:left}} display={{md:'flex'}} flexGrow={1} alignItems={reverse?'flex-start':'flex-end'}>
            <small style={{marginBottom:20}}>Feature Project</small>
            <Text fontSize={'20px'}>{title.toLocaleUpperCase()}</Text>
            <Flex bgColor={{base:secondaryColor, md:primaryColor}} rounded={'lg'} color='white' p={3} mt={3} >
            <Text fontFamily={'monospace'}>{content}</Text>
            </Flex>
            </Flex>}
            <Flex position='absolute' flexDir='column' bg={{base:secondaryColor, md:'none'}} fontSize={{base:12, md:16}} p={{base:2, md:5}} top={{base:4, md:10}} width={{base:'95%', md:'600px'}} _hover={{diaplay:'flex'}} left={{base:2, md:!reverse?'300px':left, '2xl':left}} display={{base:'none', md:'flex'}} flexGrow={1} alignItems={reverse?'flex-start':'flex-end'}>
            <small style={{marginBottom:20}}>Feature Project</small>
            <Text fontSize={'20px'}>{title.toLocaleUpperCase()}</Text>
            <Flex bgColor={{base:secondaryColor, md:primaryColor}} rounded={'lg'} color='white' p={3} mt={3} >
            <Text fontFamily={'monospace'}>{content}</Text>
            </Flex>
            </Flex>
        </Flex>
  )
}
