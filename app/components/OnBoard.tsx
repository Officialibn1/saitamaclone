import React from 'react'
import './styles/OnBoard.css'

const OnBoard = () => {
  return (
    <div className='container2'>
        <div className="onBoard">
            <div className="onBoardHeading">
                <h1>
                    Get Onboarded
                </h1>
            </div>

            <div className="onBoardInputSection">
                <div className="onBoardInputContainer">
                    <input type="text" placeholder='Your Emain ID' />

                    <button>Subscribe</button>
                </div>

                <div className="onBoardInputText">
                    <p>
                        Experience a better life in crypto with Saitama! Enter your email and receive a personalized beginner&apos;s guide to help you give your first steps with Saitama and dive confidently into the world of a decentralized economy. 
                    </p>

                    <p>
                        Please note that by entering your email, you agree to subscribe to our newsletter and <span>acknowledge</span> that we will handle your information carefully in accordance with our <span>privacy policy</span>.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnBoard