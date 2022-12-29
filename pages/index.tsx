import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import { HomeComponent } from '../components/home'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HomeComponent />
    </>
  )
}
