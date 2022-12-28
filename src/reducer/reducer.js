// import {GetData} from '../const/const.idx'

const initialstate = {
    item: []
}
 const productReducer = (state = initialstate, action) =>{
    switch (action.type) {
        case 'GetData':

            return {...state, item: action.payload}
    
        default: 
        
        return state
           
    }
 }
 export default productReducer