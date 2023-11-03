import React from 'react'
import './styles/BuySaitama.css'
import { buySaitamaCards } from '@/lib/datas'

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
        </div>
    </div>
  )
}

export default BuySaitama