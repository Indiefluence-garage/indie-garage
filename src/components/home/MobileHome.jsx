import React from 'react'
import MobileHero from '../mobileSections/MobileHero'
import MobileBanner from '../mobileSections/MobileBanner'
import MobileVideo from '../mobileSections/MobileVideo'
import MobileTestimonial from '../mobileSections/MobileTestimonial'
import ClientsBanner from '../shared/ClientsBanner'
import ContactFormMobile from '../mobileSections/ContactFormMobile'
import ContactShutterMobile from '../mobileSections/ContactShutterMobile'
import MobileServices from '../mobileSections/MobileServices'
import FooterTopBanner from '../shared/FooterTopBanner'

const MobileHome = () => {
  return (
    <div>
      <MobileHero/>
      <MobileVideo/>
      <MobileBanner/>
      <MobileServices/>
      <MobileTestimonial/>
      <ClientsBanner/>
      <ContactFormMobile/>
      <ContactShutterMobile/>
      <FooterTopBanner/>
      
    </div>
  )
}

export default MobileHome
