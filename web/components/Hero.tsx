import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <div className="relative flex flex-col py-20 md:h-screen md:py-0">
      {/* Blur absolute div */}
      <div className="absolute top-0 left-1/2 h-48 w-[40rem] -translate-x-1/2 bg-[#2A468E] blur-[140px]"></div>
      {/* Main content */}
      <Navbar />
      <div className="z-10 flex flex-1 flex-col items-center justify-center p-10 text-center xl:p-0">
        <div className="text-5xl font-black leading-[3.5rem] md:max-w-5xl lg:text-7xl lg:leading-[6rem]">
          Stop rewriting your <span className="text-[#24D1DC]">React</span> and{' '}
          <span className="text-[#24D1DC]">Next.js</span> code
        </div>
        <div className="mt-7 text-3xl leading-normal text-gray-400">
          Use our VSCode and Jetbrains snippets extension
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          <Link href="#">
            <a className="w-48 rounded-md bg-gradient-to-r from-[#000A67] to-[#004E92] py-3 text-xl">
              Get started
            </a>
          </Link>
          <Link href="#">
            <a className="w-48 rounded-md bg-gradient-to-r from-[#232526] to-[#313334] py-3 text-xl">
              View GitHub
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}