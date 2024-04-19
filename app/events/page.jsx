import { ParallaxScrollDemo } from '@/components/EventGallery'
import {TourHeader} from '@/components/TourHeader'
import { TracingBeamDemo } from '@/components/TracingBeamDemo'

import React from 'react'

const page = () => {
  return (
    <main>
      <TourHeader/>
      <TracingBeamDemo/>
      <ParallaxScrollDemo/>
    </main>
  )
}

export default page