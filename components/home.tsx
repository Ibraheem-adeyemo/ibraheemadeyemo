import { Inter } from '@next/font/google'
import { BannerComponent } from './Banner'
import { PortfolioGrids } from './PortfolioGrids'
import { Experience } from './Experience'
import Contacts from './Contacts'
import { MotionBox } from './framersComponent'
import { verticalPosition } from './animations'
import { Box } from '@chakra-ui/react'
import { Footer } from './Footer'
import dataInfo from '../data.json';
import About from './About'


const inter = Inter({ subsets: ['latin'] })

const { secondaryColor } = dataInfo.appConfig
export const HomeComponent = () => {
       const overlay = {
            backgroundColor:'black',
            height:'100%',
            position:'absolute',
            width:'100%',
            left:0,
            zIndex:-200,
            opacity:0.9
       }
  return (
    <MotionBox 
        initial='hide'
        position='relative'
        animate='show'
        variants={verticalPosition}
        px={{base:30, md:100, lg:'70px', '2xl':'200px'}}
        // bg={secondaryColor}
        bg={`url(/images/bg-img.jpg)`}
        color='white'
        >
        <Box sx={overlay}></Box>
        {/* <Box px={{base:30, md:100, lg:70, xl:200}}> */}
        <BannerComponent /> 
        <About />
        <PortfolioGrids />     
        <Experience /> 
        <Contacts />
        <Footer />
         {/* </MotionBox></Box> */}
    </MotionBox>
  )
}
