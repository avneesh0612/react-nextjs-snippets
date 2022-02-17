import Image from 'next/image'
import React from 'react'
import logo from '../public/logo.svg'
import githubLogo from '../public/github.svg'

export default function Navbar() {
  return (
    <div className="absolute top-0 flex h-20 w-full items-center justify-between p-7 xl:p-0">
      <div className="flex items-center">
        <Image src={logo} height={48} width={48} className="rounded-md" />
        <span className="ml-5 text-lg font-medium">
          React &amp; Next.js Snippets
        </span>
      </div>
      <a
        href="https://github.com/avneesh0612/react-nextjs-snippets"
        target="_blank"
      >
        <Image src={githubLogo} height={30} width={30} />
      </a>
    </div>
  )
}
