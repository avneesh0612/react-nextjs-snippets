import Image from 'next/image'
import React from 'react'
import actionGif from '../public/action.gif'

export default function Action() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <div className="z-10 text-5xl font-bold">
        Our extension in <span className="text-[#24D1DC]">action</span>
      </div>
      <div className="relative mt-16 rounded-xl border-4 border-[#24D1DC]">
        {/* Blur behind image */}
        <div className="absolute top-1/2 left-1/2 h-[25rem] w-[50rem] -translate-y-1/2 -translate-x-1/2 bg-[#2A468E] blur-[140px]"></div>
        {/* Image */}
        <div className="overflow-hidden rounded-xl">
          <Image src={actionGif} />
        </div>
      </div>
    </div>
  )
}
