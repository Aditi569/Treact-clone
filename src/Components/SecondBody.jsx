import React from 'react'

const SecondBody = () => {
    return (
        <div>
            <section>
                <div className="second-container">
                    <div className="second-left">
                        <img width="600" height="530" src="https://treact.owaiskhan.me/static/media/stats-illustration.89e20edcbf2cccadc1f28b4a73a486ac.svg" alt="record-img" />
                    </div>
                    <div className="second-right">
                        <p className='para-1'>Our Track Record</p>
                        <p className='para-2'>We have been doing this since <span className='Num'>1999.</span></p>
                        <p className='para-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Provident nesciunt eligendi repellendus rerum,
                            autem soluta illo perspiciatis
                            commodo consequat</p>
                        <div className="tracker">
                            <div className='tracker-item'>
                                <div>2282+</div>
                                <div className='tracker-name'>Clients</div>
                            </div>
                            <div className='tracker-item'>
                                <div>3891+</div>
                                <div className='tracker-name'>Projects</div>
                            </div>
                            <div className='tracker-item'>
                                <div>1000+</div>
                                <div className='tracker-name'>Awards</div>
                            </div>
                        </div>
                        <button className='btn-1'>Learn More</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SecondBody
