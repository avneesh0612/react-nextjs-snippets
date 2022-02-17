import Image from 'next/image'
import React from 'react'

interface PageProps {
  image: StaticImageData
  name: string
  enabled: boolean
  link: string
}

export default function InstallCard({ image, name, enabled, link }: PageProps) {
  return (
    <div className="flex h-32 w-full items-center justify-between rounded-lg bg-[#22222E] px-10 transition-all hover:border-2 hover:border-[#24D1DC]">
      {/* IDE details */}
      <div className="flex items-center">
        <Image src={image} height={80} width={80} />
        <div className="ml-8 text-2xl">{name}</div>
      </div>
      {/* Button links */}
      <div className="flex items-center text-center">
        {enabled ? (
          <a
            href={link}
            className="w-48 rounded-md bg-gradient-to-r from-[#000A67] to-[#004E92] py-3 text-xl"
          >
            Get
          </a>
        ) : (
          <a
            href="#"
            className="w-48 rounded-md bg-gradient-to-r from-[#232526] to-[#313334] py-3 text-xl"
          >
            Coming soon...
          </a>
        )}
      </div>
    </div>
  )
}
