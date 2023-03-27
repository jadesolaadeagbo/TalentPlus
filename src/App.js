import React from 'react'
import FifthMain from './components/FifthMain/FifthMain'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import SecondMain from './components/SecondMain/SecondMain'
import ThirdMain from './components/ThirdMain/ThirdMain'

const App = () => {
  return (
    <div className='app-container'>
      <Home/>
      <Main/>
      <SecondMain/>
      <ThirdMain/>
      <FifthMain/>
      <Footer/>
    </div>
  )
}

export default App
