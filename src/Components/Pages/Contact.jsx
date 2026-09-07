import React from 'react'
import Navbar from '../Layout/Navbar'
import ContactBanner from '../Layout/ContactBanner'
import ContactInfoCards from '../Layout/ContactInfoCards'

import ContactCTA from '../Layout/ContactCTA'
import Footer from '../Layout/Footer'
import ContactMain from '../Layout/ContactMain'

const Contact = () => {
  return (
    <div>
<Navbar/>
<ContactBanner/>
<ContactInfoCards/>

  <ContactMain/>

  <ContactCTA/>
<Footer/>
    </div>
  )
}

export default Contact