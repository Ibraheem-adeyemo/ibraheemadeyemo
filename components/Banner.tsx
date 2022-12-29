import Head from 'next/head'
import { Box, Flex, Heading, Text, Button, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import { DesktopNavbar, MobileNavbar } from './Navbar'
import dataInfo from '../data.json';
import { MotionBox, MotionText, MotionButton } from './framersComponent'
import { introStackVariant } from './animations'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

const { tertiaryColor } = dataInfo.appConfig

export const BannerComponent = () => {
    const [banerTxt, setBanerTxt] = useState(0)
    const bannerContent = dataInfo.bannerData.professionalInfo

    const router = useRouter()

    const routeToContact = () => {
        router.push('#contact')
    }

    useEffect(() => {
      const changeBanerTxtInterval = setInterval(()=>{
        if(banerTxt < bannerContent.length-1){
            setBanerTxt(banerTxt + 1)
        }else {
            setBanerTxt(0)
        }
      }, 5000)
    
      return () => {
        clearInterval(changeBanerTxtInterval)
      }
    }, [banerTxt])

    const TopImage = <Flex width={600} justifyContent={{md:'flex-start',xl:'flex-end'}} position='relative' height={{base:'350px'}}>
    <MotionBox width={{base:230, md:300, lg:300}} height={{base:230, md:300, lg:300}} bg={tertiaryColor} borderRadius={'50%'}></MotionBox>
    <MotionBox position={'absolute'} borderRadius={'50%'} bgImage={`url(${dataInfo.bannerData.userImage})`} bgSize={'contain'} bgPosition={'center'} width={{base:230, md:300, lg:300}} height={{base:230, md:300, lg:300}} left={{base:70, md:200, lg:150,xl:400}} top={{base:70, md:100, lg:140,xl:200}}>

    </MotionBox>

    
</Flex>
    
  return (
    <MotionBox height={{base:'max-content', lg:'90vh'}}>
             <DesktopNavbar />
            <MobileNavbar />
        <Flex mt={{base:'10px', lg:150}} flexDirection={{base: 'column-reverse', sm:'column-reverse', md: 'column-reverse', lg:'row', xl:'row'}}>
            <MotionBox >
                <Heading mb={5} fontSize={{base:30, md:50}} letterSpacing={10}>
                    {dataInfo.bannerData.name}
                </Heading>
                <MotionText                    
                    fontSize={{base:16, sm: 14, md:16}} fontWeight={700} mb={10} height={10}>
                    <motion.span 
                        initial='hide'
                        animate='show'
                        exit={{opacity:0}}
                        variants={introStackVariant} key={banerTxt}> {bannerContent[banerTxt]}</motion.span>
                </MotionText>
                <Flex mb={'60px'} display={{base:'flex', lg:'none'}}>{TopImage}</Flex>
                <Text width={{md:'400px', lg:600}} lineHeight={8} letterSpacing={1} fontSize={[12, 15, 18]}>{dataInfo.bannerData.professionalSummary} </Text>

                <Flex mt={20} justifyContent={{base:'center'}} alignItems={{base:'center'}}>
                    <MotionButton 
                        onClick={routeToContact}
                        whileHover={{
                            scale:1.1,
                            transition: {duration:0.4}}} variant={'primary'} href='#contact' mr={5}>{dataInfo.bannerData.callToActionsContent[1]}</MotionButton>
                    {/* <MotionButton whileHover={{
                        scale:1.1,
                        transition: {duration:0.4}}} variant={'secondary'} >{dataInfo.bannerData.callToActionsContent[1]}</MotionButton> */}
                </Flex>
            </MotionBox>
            <Flex display={{base:'none', lg:'flex'}}>
            {TopImage}

            </Flex>
        </Flex>
        
    </MotionBox>
  )
}
