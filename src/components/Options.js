import React from 'react'

export default function Options() {
  return (
    <div className='flex justify-center relative top-[170px]'>
        <div className="w-[546px] h-[29px] justify-center items-center gap-10 inline-flex">
    <div className="self-stretch flex-col justify-start items-center gap-3.5 inline-flex">
        <div className="px-3 justify-start items-start gap-2.5 inline-flex">
            <div className="text-blue-950 text-xl font-bold font-['Inter']">Study</div>
        </div>
        <div className="self-stretch h-[0px] border-2 border-blue-950"></div>
    </div>
    <div className="self-stretch flex-col justify-start items-center gap-3.5 inline-flex">
        <div className="px-3 justify-start items-start gap-2.5 inline-flex">
            <div className="text-zinc-500 text-xl font-medium font-['Inter']">Quiz</div>
        </div>
        <div className="self-stretch h-[0px] border-2 border-stone-50"></div>
    </div>
    <div className="self-stretch flex-col justify-start items-center gap-3.5 inline-flex">
        <div className="px-3 justify-start items-start gap-2.5 inline-flex">
            <div className="text-zinc-500 text-xl font-medium font-['Inter']">Test</div>
        </div>
        <div className="self-stretch h-[0px] border-2 border-stone-50"></div>
    </div>
    <div className="self-stretch flex-col justify-start items-center gap-3.5 inline-flex">
        <div className="px-3 justify-start items-start gap-2.5 inline-flex">
            <div className="text-zinc-500 text-xl font-medium font-['Inter']">Game</div>
        </div>
        <div className="self-stretch h-[0px] border-2 border-stone-50"></div>
    </div>
    <div className="self-stretch flex-col justify-start items-center gap-3.5 inline-flex">
        <div className="px-3 justify-start items-start gap-2.5 inline-flex">
            <div className="text-zinc-500 text-xl font-medium font-['Inter']">Others</div>
        </div>
        <div className="self-stretch h-[0px] border-2 border-stone-50"></div>
    </div>
</div>
    </div>
    )
}