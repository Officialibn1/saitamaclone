import React from 'react'
import './styles/BuySaitama.css'
import { buySaitamaCards, downloadCardUrl } from '@/lib/datas'
import Image from 'next/image'
import Link from 'next/link'

const BuySaitama = () => {
  return (
    <div className='container2'>
        <div className="buySaitama">
            <div className="sectionHeading">
                <span></span>

                <h1>
                    How To Buy Saitama
                </h1>
            </div>

            <div className="buySaitamaCards">
                {buySaitamaCards.map(card => (
                    <div key={card.id} className="buySaitamaCard">
                        <h1>
                            {card.id}
                        </h1>

                        <p>
                            {card.body}
                        </p>
                    </div>
                ))}
            </div>

            <div className="downloadCards">
                {downloadCardUrl.map((url, i) => (
                    <div key={i} className="downloadCard">
                        <Link href={''}>
                            <Image src={`/${url}`} width={300} height={60} quality={100}  alt={`saitama website download ${url}`} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BuySaitama