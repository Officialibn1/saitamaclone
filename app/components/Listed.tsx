import React from 'react'
import './styles/Listed.css'
import { listedCards } from '@/lib/datas'
import Image from 'next/image'

const Listed = () => {
  return (
    <div className='container2'>
        <div className="listed">
            <div className="sectionheader">
                <h1>Currently Listed On</h1>
            </div>

            <div className="listedIconsContainer">
                {listedCards.map((card, i) => (
                    <div key={i} className="listedCard">
                        <Image src={`/${card}`} width={300} height={60} quality={90} alt={`saitama listed card ${card}`} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Listed