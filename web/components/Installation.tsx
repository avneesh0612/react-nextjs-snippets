import React, { FC } from 'react'
import { AtomIcon, VsCodeIcon } from './Icons'
import InstallCard from './InstallCard'

const Installation: FC = () => {
  return (
    <div className="mb-20 flex flex-col items-center justify-center p-5 lg:h-screen xl:p-0">
      <div className="relative text-5xl font-bold">
        {/* Blur */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-[15rem] w-[40rem] -translate-y-1/2 -translate-x-1/2 bg-[#2A468E] blur-[140px]"></div>
        <div className="z-20">Installation</div>
      </div>
      <div className="mt-28 grid w-full max-w-4xl grid-cols-1 gap-10">
        <InstallCard
          Icon={VsCodeIcon}
          link="https://marketplace.visualstudio.com/items?itemName=AvneeshAgarwal.react-nextjs-snippets"
          name="Visual Studio Code"
          enabled
        />
        <InstallCard
          Icon={AtomIcon}
          link="https://atom.io/packages/react-nextjs-snippets"
          name="Atom text editor"
          enabled
        />
      </div>
    </div>
  )
}

export default Installation
