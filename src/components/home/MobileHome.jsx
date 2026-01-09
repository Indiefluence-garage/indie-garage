import React from 'react'
import HomeLoader from '../shared/HomeLoader'
import MobileHero from '../mobileSections/MobileHero'
import MobileBanner from '../mobileSections/MobileBanner'
import MobileVideo from '../mobileSections/MobileVideo'
import MobileTeam from '../mobileSections/MobileTeam'
import MobileTestimonial from '../mobileSections/MobileTestimonial'
import FooterTopBanner from '../desktopSections/FooterTopBanner'
import ClientsBanner from '../desktopSections/ClientsBanner'
import ContactFormMobile from '../mobileSections/ContactFormMobile'
import ContactShutterMobile from '../mobileSections/ContactShutterMobile'

const MobileHome = () => {
  return (
    <div>
      <HomeLoader/>
      <MobileHero/>
      <MobileVideo/>
      <MobileBanner/>
      <MobileTeam/>
      <MobileTestimonial/>
      <ClientsBanner/>
      <ContactFormMobile/>
      <ContactShutterMobile/>
      <FooterTopBanner/>
    </div>
  )
}

export default MobileHome
