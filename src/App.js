import React from 'react';
import Header from './components/header';
import MainContent from './components/main';
import Footer from './components/footer';

export default function App(){
  return(
    <div className='content'>
        <Header />,
        <MainContent />,
        <Footer />
    </div>
  )
}