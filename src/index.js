import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect } from "react"
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"

import { Provider } from 'react-redux';
import store from './Redux/store';

import Layout from './Layout'
import HomeIntro from './HomePage'
import Gallery from './OurGallery'
import AboutUs from './AboutUs'
import PageNotFound from './PageNotFound'
import './CSS/index.css'
import ContactUs from './ContactUs'


const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
}


const App=()=>{
    return(
      <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop>
      <Routes>
        <Route element={<Layout/>} >
          <Route exact path="/AboutUs" element={<AboutUs/>} />
          <Route exact path="/Gallery" element={<Gallery/>} />
          <Route exact path="/ContactUs" element={<ContactUs/>} />
          <Route exact path="/" element={<HomeIntro/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Route>
        </Routes> 
        </ScrollToTop>
        </BrowserRouter>
      </Provider>
    )
  }


const rootElement = document.getElementById('root')

ReactDOM.render( <App  />, rootElement)