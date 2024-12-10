import FeauturedMovie from '@/components/featured-movie'
import React from 'react'
import {notFound} from 'next/navigation'

export default function MovieContainer({movie}) {
  return (
    <>
    <FeauturedMovie movie={movie} isCompact={false} />
    </>
    
  )
}


// butun sehifeleri containere saliriq movienin containeri
