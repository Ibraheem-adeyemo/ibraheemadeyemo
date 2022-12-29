import { extendTheme } from '@chakra-ui/react'
import { ButtonStyles, LinkStyles, TextStyles } from './components/button'
import dataInfo from '../data.json';

const colors = {
    primaryColor:dataInfo.appConfig.primaryColor,
    secondaryColor:dataInfo.appConfig.secondaryColor,
    tertiaryColor:dataInfo.appConfig.tertiaryColor,
}
const theme = extendTheme({
  fonts: {
    heading: `'Alfa Slab One', sans-serif`,
    body: `'Lexend Deca', sans-serif`,
  },
  components: {
    Button: ButtonStyles,
    Text: TextStyles,
    Link: LinkStyles
  },
  colors
})

export default theme