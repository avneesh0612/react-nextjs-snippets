import { AppProps } from 'next/app'
import React from 'react'

interface PageProps {
  id: number
  title: string
  message: string
}

export default function WorkingCard({ id, title, message }: PageProps) {
  return (
    <div className="flex h-full w-72 cursor-pointer flex-col rounded-lg bg-[#22222E] p-7 text-left">
      <div className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-[#303030] text-2xl">
        {id}
      </div>
      <div className="mt-7 text-2xl">{title}</div>
      <div className="mt-5 text-xl text-gray-400">{message}</div>
    </div>
  )
}
