import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='home'>
        <div className="wrapper">
            <Header />
            <Main/>
            <Footer />
        </div>
    </div>
  )
}

export default Home