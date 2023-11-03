import React from 'react'
import './styles/Products.css'
import { productCards } from '@/lib/datas'
import Image from 'next/image'

const Products = () => {
  return (
    <div className='container2'>
        <div className="products">

            {/* heading */}
            <div className="sectionHeading">
                <span></span>

                <h1>
                    Products & Utilities
                </h1>
            </div>

            {/* Conatiner that wraps all the products cards */}
            <div className="productsCards">
                {productCards.map(card => (
                    <div key={card.id} className="productCard">
                        <div className="cardImgContainer">
                            <Image src={card.imgUrl} width={50} height={50} alt={card.title} /> 
                        </div>

                        <div className="cardTextContainer">
                            <h2>
                                {card.title}
                            </h2>

                            <h1>
                                {card.desc}
                            </h1>

                            <p>
                                {card.body}
                            </p>

                            <button>View More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products