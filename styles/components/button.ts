import dataInfo from '../../data.json'

const { primaryColor } = dataInfo.appConfig
export const ButtonStyles = {
    baseStyle:{
        width: [140, 140, 200],
        height: 100,
        py: [3, 5, 7],
        letterSpacing: [1, 2],
        fontSize:[12,14, 16]
    },
    sizes:{},
    variants:{
        primary: {
            bg:primaryColor,
            color: 'white',
            _hover: {
                bg: `${primaryColor}.300`,
                color: 'lightgrey'
            },            
            boxShadow:['5px 5px 13px black']
        },
        secondary: {
            bg:'gray',
            color: 'white',
            _hover: {
                bg: 'gray.400'
            },            
            boxShadow:['5px 5px 15px black']
        },
    },
    defaultProps:{        
        boxShadow:['5px 5px 15px grey']
    }
}

export const TextStyles = {
    variants: {
        mgLeft: {
            borderLeft: '1px red solid',
            padding:{base:'3px' ,md:'5px'},
            cursor :'pointer',
            // paddingBottom:'10px'
            _hover: {
                backgroundColor:'rgba(255, 0, 0, 0.6)',
                color:'white'
            }
        },
    }
}

export const LinkStyles = {
    variants: {
        menuLink: {
            _hover: {color: primaryColor}
        }
    }
}

