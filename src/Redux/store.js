import { createStore , combineReducers } from 'redux'
import { GalleryReducer} from './reducers'

const rootReducer = combineReducers({

    gallery: GalleryReducer
})
  
const store = createStore(rootReducer)

export default store