import React from 'react'
import './styles/SaitaAnalysis.css'
import Image from 'next/image'

const SaitaAnalysis = () => {
  return (
    <div className='container2'>
        {/* main container */}
        <div className="saitaAnalysis">

            {/* heading */}
            <div className="sectionHeading">
                <span></span>

                <h1>
                    The Saitama Token At A Glace
                </h1>
            </div>

            {/* All cards container */}
            <div className="analysisCards">

                {/* Dounut chart container */}
                <div className="dounutCard">
                    <Image src={'/chart.png'} width={200} height={200} quality={100} alt='doughnut chart' />
                </div>

                {/* All percentage cards */}
                <div className="percentageCards">
                    {/* card one */}
                    <div className="percentageCard">
                        <p>
                            SUSTAINABILITY TAX
                        </p>

                        <div className="cardPer">
                            <span>
                                <h2>
                                    02%
                                </h2>
                            </span>
                        </div>
                    </div>

                    {/* card two */}
                    <div className="percentageCard">
                        <p>
                            REFLECTIONS
                        </p>

                        <div className="cardPer">
                            <span>
                                <h2>
                                    01%
                                </h2>
                            </span>
                        </div>
                    </div>

                    {/* card three */}
                    <div className="percentageCard">
                        <p>
                            BURN
                        </p>

                        <div className="cardPer">
                            <span>
                                <h2>
                                    01%
                                </h2>
                            </span>
                        </div>
                    </div>
                </div>

                {/* All numbers cards */}
                <div className="numberCards">

                    {/* number card one */}
                    <div className="numberCard">
                        <p>
                            SUPPLY
                        </p>

                        <div className="cardPer">
                            <span>
                                <h2>
                                    100
                                </h2>

                                <p>
                                    BILLION <br/> TOKENS
                                </p>
                            </span> 
                        </div>
                    </div>

                    {/* Number card two */}
                    <div className="numberCard">
                        <p>
                            CIRCULATIONS
                        </p>

                        <div className="cardPer">
                            <span>
                                <h2>
                                    45
                                </h2>

                                <p>
                                    BILLION <br/> TOKENS
                                </p>
                            </span> 
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default SaitaAnalysis