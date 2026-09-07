import React from 'react'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import ServiceBanner from '../Layout/ServiceBanner'
import ServiceFeatures from '../Layout/ServiceFeatures'
import ServiceList from '../Layout/ServiceList'
// import ServicePartner from '../Layout/ServicePartner'
import ServiceBenefits from '../Layout/ServiceBenefits'

const Services = () => {
  return (
    <div>
<Navbar/>
<ServiceBanner/>
<ServiceFeatures/>
<ServiceList/>
{/* <ServicePartner/> */}
<ServiceBenefits/>
<Footer/>

    </div>
  )
}

export default Services