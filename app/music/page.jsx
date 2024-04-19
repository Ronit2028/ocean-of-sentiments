import { SparklesPreview } from '@/components/SparklesPreview'
import MusicSection from '@/components/MusicSection'
import VideoSection from '@/components/VideoSection'
import React from 'react'

const page = () => {
  return (
    <main>
        <SparklesPreview/>
        <MusicSection/>
        <VideoSection/>
    </main>
  )
}

export default page