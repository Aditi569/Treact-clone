import React from 'react'

const NinethBody = () => {
    return (
        <>
            <section>
                <div className="nineth-body-container">
                    <div className="nine-container">
                        <div style={{ width: "50%" }} className="nine-left-container">
                            <h5 className='eight-blog'>Contact Us</h5>
                            <h1 className='sixth-clients'>Feel free to <span className='sixth-us'>get in touch</span> with us.</h1>
                            <p className='sixth-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci delectus magni eum ipsam sed minima mollitia enim inventore ullam nobis, molestias quae recusandae vitae quia nemo! Maxime optio adipisci quas?</p>
                            {/* <input className='nineth-input' placeholder='Enter the email'></input> */}
                            {/* <button className='nine-button'>Contact Me</button> */}
                        </div>
                        {/* <div className="nine-button-container">
                            <input className='nineth-input' placeholder='Enter the email'></input>
                            <button className='nine-button'>Contact Me</button>
                        </div> */}
                        <div style={{ width: "50%" }} className="nine-right-container">
                            <img style={{ width: "100%" }} height={"400px"} src="https://treact.owaiskhan.me/static/media/email-illustration.84fb82b841c197337a4bc2c1e660d5a0.svg" alt="" />
                        </div>
                    </div>
                    <div className="nine-button-container">
                        <input className='nineth-input' placeholder='Your Email Address'></input>
                        <button className='nine-button'>Contact Me</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NinethBody
