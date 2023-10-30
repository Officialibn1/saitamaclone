import React from 'react'
import './styles/Hero.css'
import { cardUrl } from '@/lib/datas'
import Image from 'next/image'

const ImageCards = () => {
  return (
    <div className='imageCards'>
        {cardUrl.map((card, i) => (
            <div className="imageCard" key={i}>
                <Image src={`/${card}`} width={100} height={50} quality={70} alt={card} />
            </div>
        ))}
    </div>
  )
}

export default ImageCards