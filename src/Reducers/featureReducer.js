import images from '../Utils/images';

let randomindex = Math.ceil(Math.random()*6);
const url = images[randomindex]["imgUrl"];
const featureReducer = (state=url, action) => {
    switch(action.type){
        case 'RENDER_IMAGE':
            return action.url
        default:
            return state
    }
}

export default featureReducer;