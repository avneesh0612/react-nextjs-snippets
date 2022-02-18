import Image from 'next/image'
import React from 'react'

export default function Action() {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-7 text-center xl:p-0">
      <div className="z-10 text-5xl font-bold">
        Our extension in <span className="text-[#24D1DC]">action</span>
      </div>
      <div className="relative mt-16 rounded-xl border-4 border-[#24D1DC]">
        <div className="absolute top-1/2 left-1/2 -z-10 h-[25rem] w-[50rem] -translate-y-1/2 -translate-x-1/2 bg-[#2A468E] blur-[140px]"></div>
        <div className="overflow-hidden rounded-xl">
          <Image
            width={600}
            height={373}
            objectFit="cover"
            src="https://res.cloudinary.com/didkcszrq/image/upload/v1645167017/action_pgrajw.gif"
            alt="React and Next.js snippets in action"
            className="z-10"
          />
        </div>
      </div>
    </div>
  )
}
