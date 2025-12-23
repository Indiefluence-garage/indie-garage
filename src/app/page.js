import HomeLoader from '@/components/globallyUseComponents/HomeLoader'
import FooterTopBanner from '@/components/home/FooterTopBanner'
import ContactShutterBanner from '@/components/home/ContactShutterBanner'
import React from 'react'
import ContactForm from '@/components/home/ContactForm'
import ClientsBanner from '@/components/home/ClientsBanner'

const page = () => {
  return (
    <div>
      <HomeLoader/>
      <ClientsBanner/>
      <ContactForm/>
      <ContactShutterBanner/>
      <FooterTopBanner/>
    </div>
  )
}

export default page
