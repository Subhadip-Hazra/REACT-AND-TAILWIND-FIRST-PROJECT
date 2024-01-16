import React from 'react'
import Arrow from './images/frame.svg'
import Home from './images/home.svg'

export default function Frame() {
  return (
    <div className='relative top-[43px] left-[102px]'>
      <div className="w-[487px] h-[30px] justify-start items-center inline-flex">
    <div className="justify-start items-center flex">
        <img className="w-[30px] h-[30px] relative"
                src={Home}
                alt="home"
        />
        <img className="w-6 h-6 relative"
                src={Arrow}
                alt="arrow"
        />
        <div className="text-center text-zinc-500 text-lg font-medium font-['Inter']">Flashcard</div>
    </div>
    <div className="justify-start items-center flex">
    <img className="w-6 h-6 relative"
                src={Arrow}
                alt="arrow"
        />
        <div className="text-center text-zinc-500 text-lg font-medium font-['Inter']">Mathematics</div>
        <div className="justify-start items-center flex">
        <img className="w-6 h-6 relative"
                src={Arrow}
                alt="arrow"
        />
            <div className="text-center text-blue-950 text-lg font-semibold font-['Inter']">Relation and Function</div>
        </div>
    </div>
</div>
    </div>
  )
}
