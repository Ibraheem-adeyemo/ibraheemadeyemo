import { Flex, SimpleGrid, Heading, Box, VStack, IconButton } from '@chakra-ui/react'
import React, {Fragment, useState} from 'react'
import dataInfo from '../data.json';
import { introStackVariant } from './animations';
import { MotionFlex } from './framersComponent';
import { PortfolioGrid } from './PortfolioGrid';
import { MdInfo } from 'react-icons/md';


type PortfolioItmsProp = {
    image:string
    summary: string
    url: string
    company:string,
    title:string
}

const { secondaryColor, primaryColor } = dataInfo.appConfig

const portfolioImages:PortfolioItmsProp[] = dataInfo.portfolioData
export const PortfolioGrids = () => {
    const [showOverlay, setShowOverlay] = useState(false)
    const [showIndex, setShowIndex] = useState<number|undefined>(undefined)

    const handleOnMouseOver = (showOver:boolean) => {
        console.log(showOver)
        setShowOverlay(!showOverlay)
    }

    const handleClick = (num:number) => {
        setShowIndex(num)
    }
  return (
    <MotionFlex
        alignItems={'center'}
        id='portfolio' 
        flexDirection='column' 
        mt={{base:100, md:50}}
        mb={{base:50, md:200}}><Heading fontFamily={'sans-serif'} width={'max-content'} mb='4rem'>Portfolio</Heading>
    {/* <SimpleGrid
    columns={{ base: 1, sm:2, lg: 3 }}
    spacing={{ base: 8, md: 10 }}
    // py={{ base: 18, md: 24 }}
    mb={300}
    > */}
    <VStack width='100%'>
        {
            portfolioImages.length > 0 && portfolioImages.map((itms,i) => {
                return (
                <Flex key={itms.image} width={'100%'} justifyContent={{base:'flex-start', md:'center'}}>
                    <IconButton
                        display={{base:'flex',md:'none'}}
                        aria-label="facebook"
                        variant="ghost"
                        isRound={true}
                        onClick={()=>handleClick(i+1)}
                        width={5}
                        _hover={{ bg: primaryColor }}
                        icon={<MdInfo />}
                      />
                    <PortfolioGrid reverse={i%2==0} img={itms.image} left={i%2==0?0:600} content={itms.summary} title={itms.title} cur={i+1} showIndex={showIndex} url={itms.url} />
                </Flex>)
            })
        }
    </VStack>
    {/* </SimpleGrid> */}
    </MotionFlex>
  )
}
