import React from 'react'
import './styles/GetSupport.css'

const GetSupport = () => {
  return (
    <div className="container2">
        <div className='getSupport'>
            <div className="sectionHeading">
                <span></span>

                <h1>
                    Get Support
                </h1>
            </div>

            <div className="getSupportFormContainer">
                <form>
                    <div className="groupInput">
                        
                        {/* Input label for name  */}
                        <label htmlFor="name">
                            Name
                        </label>

                        {/* Input for name  */}
                        <input type="text" id='name' placeholder='Name' required />

                        {/* Input label for email  */}
                        <label htmlFor="email">
                            Email
                        </label>

                        {/* Input for email  */}
                        <input type="text" id='email' placeholder='Email' required />

                        {/* Input label for subject  */}
                        <label htmlFor="subject">
                            Subject
                        </label>

                        {/* Input for subject  */}
                        <input type="text" id='subject' placeholder='Subject' required />
                    </div>

                    <div className="formTextArea">
                        <label htmlFor="message">
                            Message
                        </label>
                        <textarea name="message" id="message" placeholder='Write Your Message Here'></textarea>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default GetSupport