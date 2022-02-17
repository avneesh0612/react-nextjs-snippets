import React from 'react'
import WorkingCard from './WorkingCard'

export default function Working() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <div className="z-10 text-5xl font-bold">How does it work?</div>
      <div className="mt-20 grid h-80 grid-cols-2 gap-10">
        <WorkingCard
          id={1}
          title="Installation"
          message="You can install our extension through respective IDE's extension marketplace"
        />
        <WorkingCard
          id={2}
          title="Usage"
          message="Once installed, reload the IDE and you can start using snippets as demonstrated above!"
        />
      </div>
    </div>
  )
}
