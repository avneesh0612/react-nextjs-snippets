import Image from 'next/image'
import React from 'react'

interface PageProps {
  // image: StaticImageData
  Icon: any
  name: string
  enabled: boolean
  link: string
}

export default function InstallCard({
  // image,
  name,
  enabled,
  link,
  Icon,
}: PageProps) {
  return (
    <div className="flex w-full flex-col justify-between rounded-lg bg-[#22222E] p-5 transition-all hover:border-2 hover:border-[#24D1DC] md:h-32 md:flex-row md:items-center md:px-10">
      {/* IDE details */}
      <div className="flex items-center">
        {/* <Image alt={name} src={image} height={80} width={80} /> */}
        <Icon height={80} width={80} />
        <div className="ml-8 text-2xl">{name}</div>
      </div>
      {/* Button links */}
      <div className="mt-5 flex items-center text-center md:mt-0">
        {enabled ? (
          <a
            href={link}
            className="w-full rounded-md bg-gradient-to-r from-[#000A67] to-[#004E92] py-3 text-xl md:w-48"
          >
            Get
          </a>
        ) : (
          <a
            href="#"
            className="w-full rounded-md bg-gradient-to-r from-[#232526] to-[#313334] py-3 text-xl md:w-48"
          >
            Coming soon...
          </a>
        )}
      </div>
    </div>
  )
}
