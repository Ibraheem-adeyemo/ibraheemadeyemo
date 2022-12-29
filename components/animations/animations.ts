export const verticalPosition = {
    hide: {
        opacity:0,
        x:-50,
        // transition: { duration:0.75, ease:'easeOut'}
    },
    show: {
        x:0,
        opacity: 1,
        transition: {duration:0.85, ease:'easeOut'},
    }    
}

export const introStackVariant = {
    hide: {
        y:-200,
        opacity:0,
        transition: {
            duration:0.75
        }
    },
    show: {
        y:0,
        opacity:1,
        transition: {duration:1.85}
    }
}