import React from 'react'
import './styles/MeetYou.css'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa6'

const MeetYou = () => {
  return (
    <div className='container2'>
        <div className="meetYou">

            {/* Section Heading text */}
            <div className="sectionHeading">
                <span></span>

                <h1>
                    Nice To Meet You
                </h1>
            </div>

            {/* Main content */}
            <div className="meetYouContent">
                <div className="meetYouContentImg">
                    <div>
                        <Image src={'/ibndev.JPEG'} width={200} height={200} quality={90} alt='ibndev.JPEG Image of the developer who cloned this site' />
                    </div>

                    <section>
                        <h1>
                            Isah Ibn
                        </h1>

                        <p>
                            Frontend Developer & NextJS 14 Proficient
                        </p>

                        <p>
                            <a href="https://www.linkedin.com/in/isah-ibn-muhammad-5046b125a/" target='_blank'><FaLinkedin /> @ibn</a>
                        </p>
                    </section>
                </div>

                <div className="meetYouContentText">
                    <p>
                        With over five years in the field of Web Development. I am a dedicated and committed frontend developer, with great commitment in finnessing my skills in the field. I have helped lots of clients to bring their innovative ideas and business into a digital realm by crafting an apealing, attractive and user-friendly Website and Web App for their business. If you have a project, reach out to me on <a href="https://www.linkedin.com/in/isah-ibn-muhammad-5046b125a/" target='_blank'>LinkedIn</a> and lets discuss how to bring your dream project to life.

                        <span>
                            Note: This project is just a clone of the <a href="https://www.saitamatoken.com/">Original Saitama Website</a>, for the sake of practicing and hannessing my skill and all rights are of this website is reserved to them.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MeetYou