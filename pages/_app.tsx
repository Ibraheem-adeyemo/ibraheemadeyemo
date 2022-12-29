import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Head } from 'next/document'
import Link from 'next/link'
import '@fontsource/alfa-slab-one'
import '@fontsource/lexend-deca'
import theme from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
        {/* <Head>
            <Link  rel="preconnect" href="https://fonts.googleapis.com">
                <Link rel="preconnect" href="https://fonts.gstatic.com">
                    <Link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet"></Link>
                </Link>
            </Link>
        </Head> */}
        <Component {...pageProps} />
    </ChakraProvider>
  )
}
