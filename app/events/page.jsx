// import { ParallaxScrollDemo } from '@/components/EventGallery'
import { ParallaxScrollDemo } from '@/components/ParallaxScroll'
import { TourHeader } from '@/components/TourHeader'
import { TracingBeamDemo } from '@/components/TracingBeamDemo'

import React from 'react'

const page = () => {
  return (
    <main>
      <TourHeader />
      <TracingBeamDemo />
      <ParallaxScrollDemo />
      {/* <ParallaxScroll /> */}
    </main>
  )
}

export default page