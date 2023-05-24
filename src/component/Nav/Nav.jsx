import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiContactsBookLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const[activeNav,setActiveNav] = useState ('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' :''}><BiHome/></a>
      <a href="#About"onClick={()=> setActiveNav('#About')} className ={activeNav === '#About' ? 'active' :''}><BiUser/></a>
      <a href="#Experience" onClick={()=> setActiveNav('#Experience')} className ={activeNav === '#Experience' ? 'active' :''}><BiBook/></a>
      <a href="#Services" onClick={()=> setActiveNav('#Services')} className ={activeNav === '#Services' ? 'active' :''}><RiServiceLine/></a>
      <a href="#Contact" onClick={()=> setActiveNav('#Contact')} className ={activeNav === '#Contact' ? 'active' :''}><RiContactsBookLine/></a>
    </nav>
  )
}

export default Nav