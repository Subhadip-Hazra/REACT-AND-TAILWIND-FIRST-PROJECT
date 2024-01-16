import React from 'react'
import Navbar from '../components/Navbar'
import Frame from '../components/Frame'
import Heading from '../components/Heading'
import Options from '../components/Options'
import Vedio from '../components/Vedio'
import Publisher from '../components/Publisher'
import Faq from '../components/Faq'
export default function Home() {
    return (
        <div className='w-[1440px] h-[1818px]'>
            <div><Navbar/></div>
            <div><Frame/></div>
            <div><Heading/></div>
            <div><Options/></div>
            <div><Vedio/></div>
            <div><Publisher/></div>'
            <div><Faq/></div>
            

        </div>
    )
}
