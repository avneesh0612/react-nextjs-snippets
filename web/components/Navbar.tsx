import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GitHubIcon } from './Icons'

export default function Navbar() {
  return (
    <div className="absolute top-0 z-20 flex h-20 w-full items-center justify-between p-7 xl:p-0">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="React and Next.js Snippets Logo"
            height={48}
            width={48}
            className="h-12 w-12 cursor-pointer rounded-md"
          />
        </Link>
        <span className="ml-5 text-lg font-medium">
          React &amp; Next.js Snippets
        </span>
      </div>
      <a
        href="https://github.com/avneesh0612/react-nextjs-snippets"
        target="_blank"
        className="cursor-pointer"
      >
        <GitHubIcon className="h-6 w-6" />
      </a>
    </div>
  )
}
