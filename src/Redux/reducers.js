
const initialState = {
 
    openGall:false,
    slideNumber:0,
    IsDisplayed:false,
    DisplayImgArray:0,
  }
  


  export const GalleryReducer=(state=initialState, action)=>{
    switch(action.type){
      case 'setOpenGall':
      return{
        ...state,
        openGall:action.payload
      }
      case 'setSlideNumber':
        return {
          ...state,
          slideNumber: action.payload
        }
        case 'setIsDisplayed':
        return {
          ...state,
          IsDisplayed: action.payload
        }

        case 'setDisplayImgArray':
        return {
          ...state,
          DisplayImgArray: action.payload
        }

      default:
        return state
    }
  }
  
