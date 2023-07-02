import React from 'react'
import Header from '../components/Header'
import Leftnav from './Leftnav'
import Rightnav from './Rightnav'
import Footer from './Footer'

const Layout = (props) => {
  return (  
    <div className='container bg-primaray'>
      <Header />
      <div class='row main'>
        <div className='col-md-3'>
          <Leftnav />
        </div>
        <div class='col-md-6'>
          {props.children || null}
        </div>
        <div class='col-md-3'>
          <Rightnav />
        </div>
      </div>
          <Footer />
    </div>
  )
}

export default Layout