import HomeLoader from '@/components/globallyUseComponents/HomeLoader'
import FooterTopBanner from '@/components/home/FooterTopBanner'
import ContactShutterBanner from '@/components/home/ContactShutterBanner'
import React from 'react'
import ContactForm from '@/components/home/ContactForm'
import ClientsBanner from '@/components/home/ClientsBanner'
import ScrollExperience from '@/components/scroll/ScrollExperience'
import TestimonialSection from '@/components/testimonial/TestimonialSection'
import ContactShutter from '@/components/home/ContactShutter'
import ContactShutterBannerFinal from '@/components/home/ContactShutterBannerFinal'
import ContactShutterBanner2 from '@/components/home/ContactShutterBanner2'

const page = () => {
  return (
    <div>
      <ScrollExperience/>
      <HomeLoader/>
      <TestimonialSection/>
      <ClientsBanner/>
      <ContactForm/>
      <ContactShutterBanner2/>
      {/* <ContactShutterBannerFinal/> */}
      {/* <ContactShutter/> */}
      {/* <ContactShutterBanner/> */}
      <FooterTopBanner/>
    </div>
  )
}

export default page
