import { ImagesSliderDemo } from '@/components/ImageSliderDemo'
import React from 'react'

import TheBand from '@/components/TheBand'
import { TextGenerateEffectDemo } from '@/components/TextGenerateEffectDemo'
import { ParallaxScroll } from '@/components/ui/parallax-scroll'
import { ParallaxScrollDemo } from '@/components/ParallaxScroll'
import { HeroScrollDemo } from '@/components/ContainerScrollDemo'

const page = () => {
  return (
    <main>
      <ImagesSliderDemo/>
      <TheBand/>
      <HeroScrollDemo/>
      <TextGenerateEffectDemo/>
      <ParallaxScrollDemo/>
    </main>
  )
}

export default page