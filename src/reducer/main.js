import { combineReducers } from 'redux'
import productReducer from '../reducer/reducer'

export const rootReducer = combineReducers({
    product: productReducer
})
   
export default rootReducer
   