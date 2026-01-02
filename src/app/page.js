import HomeLoader from '@/components/home/HomeLoader'
import FooterTopBanner from '@/components/home/FooterTopBanner'
import ContactShutterBanner from '@/components/home/ContactShutterBanner'
import React from 'react'
import ContactForm from '@/components/home/ContactForm'
import ClientsBanner from '@/components/home/ClientsBanner'
import ScrollExperience from '@/components/scroll/ScrollExperience'
import TestimonialSection from '@/components/testimonial/TestimonialSection'

const page = () => {
  return (
    <div>
      <ScrollExperience/>
      <HomeLoader/>
      <TestimonialSection/>
      <ClientsBanner/>
      <ContactForm/>
      <ContactShutterBanner/>
      <FooterTopBanner/>
    </div>
  )
}

export default page
