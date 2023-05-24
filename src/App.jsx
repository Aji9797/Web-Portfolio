import React from 'react';

import Header from './component/Header/Header';
import Nav from './component/Nav/Nav'
import About from'./component/About/About';
import Experience from './component/Exprience/Experience';
import Services from './component/Services/Sevices';
import Portofolio from './component/Portofolio/Portofolio';
import Testimonial from './component/Testimonial/Testimonial';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

const App = () => {
  return (
    <>
    <Header/>
    < Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portofolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
</>
  )
}

export default App