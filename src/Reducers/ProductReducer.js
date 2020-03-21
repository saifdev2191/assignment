import images from '../Utils/images';

let init = {
    arr: images.slice(0,5),
    maxtomin: false,
    mintomax: false
}

let sortedHighToLow = () => {
    return images.sort((a,b)  => b.price - a.price)
}

let sortedLowToHigh = () => {
    return images.sort((a,b)  => a.price - b.price)
}

const ProductReducer =  (state= init, action) => {

    switch(action.type){
        case 'NEXTMAGES': {
            if(!state.maxtomin && !state.mintomax){
                return {
                    ...state,
                    arr: images.slice(5,7),
                }
            }
                
            if(state.maxtomin){
                return {
                    ...state,
                    arr: sortedHighToLow().slice(5,7)
                }
            }

            if(state.mintomax){
                return {
                    ...state,
                    arr: sortedLowToHigh().slice(5,7)
                }
            }
            
        }
        case 'PREVIMAGES':{
            if(!state.maxtomin && !state.mintomax){
                return {
                    ...state,
                    arr: images.slice(0,5),
                }
            }
                
            if(state.maxtomin){
                return {
                    ...state,
                    arr: sortedHighToLow().slice(0,5)
                }
            }

            if(state.mintomax){
                return {
                    ...state,
                    arr: sortedLowToHigh().slice(0,5)
                }
            }
        }

        case 'MINTOMAX':
            return {
                ...state,
                arr: sortedLowToHigh().slice(0,5)
            }
    
        case 'MAXTOMIN':
            return {
                ...state,
                arr: sortedHighToLow().slice(0,5)
            }

        case 'SORTMAX':
            return {
                ...state,
                maxtomin: true,
                mintomax: false
            }
        
        case 'SORTMIN':
                return {
                    ...state,
                    maxtomin: false,
                    mintomax: true
                }

        default:
            return state
    }
}

export default ProductReducer;