import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setSlideNumber, setOpenGall, setIsDisplayed, setDisplayImgArray } from './Redux/actions';
    import {AllImgArrays, AllGalleryImgs} from './Elements/Gallery-Elts'
    import './CSS/Gallery.css'
    
    const Slide = ({ImgArray, ReduceGall, setSlideNumber}) => {
        const dispatch = useDispatch();
        const slideNumber = useSelector(state => state.gallery.slideNumber)

        function prevSlide() {
            const newSlideNumber = slideNumber === ImgArray.length - 1 ? 0 : slideNumber + 1;
            dispatch(setSlideNumber(newSlideNumber));
           }
          
           function nextSlide() {
            const newSlideNumber = slideNumber === 0 ? ImgArray.length - 1 : slideNumber - 1;
            dispatch(setSlideNumber(newSlideNumber));
           }
          
            return(
            <div className='OpenGalleryC'>
                 <div className='OpenGalleryBtn , BtnX' onClick={ReduceGall}>&#x2715;</div>
                    <div className='OpenGalleryBox'>
                        <div className='OpenGalleryBtn' onClick={nextSlide}>{String.fromCharCode(0x276e)} </div>
                        <img className='OpenGalleryImg' src={ImgArray[slideNumber]} alt='slide' />
                        <div className='OpenGalleryBtn' onClick={prevSlide}> {String.fromCharCode(0x276f)}</div>
                    </div>
            </div>
          )
    }
    
    const OpenGallery=({ImageArray , ExpandGall})=>{
        return(
        <div className='ExpGallStyle'>
            {ImageArray.map(  (src, index)=>{return(
                    <img className='ExpGallImgStyle' key={index} src={src} alt=''  onClick={() => ExpandGall(index)}/> )}    )}
        </div>
        )
    }
    
    const GallerySection =({ImgArray, description, Click})=>{
        return(
        <div  className="GallerySection" onClick={Click}> 
            <img   className="GallerySectionImg" src={ImgArray[0]} alt='Gallery section' />
            <p className="GallerySectionDesc">{description}</p>
        </div>
        ) 
    }
    
    
    const Gallery= ()=>{
        const dispatch = useDispatch();
        const { openGall, slideNumber, IsDisplayed, DisplayImgArray } = useSelector(state => state.gallery);
       
        function ExpandGallImg(index) {
          dispatch(setSlideNumber(index));
          dispatch(setOpenGall(true));
        }
       
        function ReduceGallImg() {
          dispatch(setOpenGall(false));
        }
       
        function display(array) {
          dispatch(setDisplayImgArray(array));
          dispatch(setIsDisplayed(true));
        }
        
        return(
        <div className='Gallery' >
    
   
    {!openGall &&
      <div className='MainGallery'>
        <h1 className='title'>Our Gallery</h1>
        <div className='BtnC'>

        <button className='ButtonsStyle' onClick={()=>dispatch(setIsDisplayed(false))}>Gallery Sections</button> 
        <button  className='ButtonsStyle' onClick={  ()=>{dispatch(setIsDisplayed(true)) ; dispatch(setDisplayImgArray( AllGalleryImgs)) }    } >All Gallery Images</button>
        </div>
    
        {!IsDisplayed &&
          <div className='SectionGallery'>
          {AllImgArrays.map((arr, index)=>{   return(  <GallerySection key={index} ImgArray={arr.array} description={arr.desc} Click={() => display(arr.array)} />    )        }         )         } </div>
        
        }
        
        {IsDisplayed &&
          <OpenGallery ImageArray={DisplayImgArray} ExpandGall={ExpandGallImg}/>
        }
      </div>
    }
    {openGall && <Slide ImgArray={DisplayImgArray} A ReduceGall={ReduceGallImg} slideNumber={slideNumber}  setSlideNumber={setSlideNumber}/>}
        
            </div>
        ) 
        }
    
    export default Gallery
    
    
    
     