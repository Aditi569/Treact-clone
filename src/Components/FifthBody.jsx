import React from 'react'
import campaign from '../assets/asset-12.jpeg'
import marketing from '../assets/asset-13.jpeg'
import clock from '../assets/fifthBody/clock.svg'
import arow from '../assets/fifthBody/arow.svg'
const FifthBody = () => {
    return (
        <>
            <section>
                <div className="fifth-container">
                    <div style={{ width: "25%" }} className="fifth-body">
                        <img src={campaign} width={"100%"} height={"350px"} alt="" />
                        <div className='fifth-body-campaign'>Tesla Inc.
                            <span className='campagins'>Ad Campaign</span></div>
                        <h4>Personalized Ad Campaign using Google AdWords   </h4>
                        <div className='fifth-campaign'><span><img src={clock} alt="clock" /></span> 90 DAY CAMPAIGN <span className='campagins'>NEW YORK</span></div>
                        <button className="btn-fifth">Read Case Study</button>
                    </div>
                    <div style={{ width: "25%" }} className="fifth-body">
                        <img style={{}} src={marketing} width={"100%"} height={"350px"} alt="" />
                        <div className='fifth-body-campaign'>Nestle<span className='campagins'>SEO Marketing</span></div>
                        <h4>Ranking #1 for keywords like Chocolate, Snack</h4>
                        <div className='fifth-campaign'><span><img src={clock} alt="clock" /></span> 180 DAY CAMPAIGN <span className='campagins'>PALO ALTO</span></div>
                        <button className="btn-fifth">Read Case Study</button>
                    </div>
                    <div style={{ width: "50%" }} className="fifth-body">
                        {/* <img src={campaign} width={600} alt="" /> */}
                        <div className='fifth-port'>Our Portfolio</div>
                        <h1 className='fifth-proj'>We've done some <span className='fifth-amazing'>amazing projects.</span></h1>
                        <p className='fifth-paras'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
                        <span className='fifth-view'>View all Projects<span><img src={arow} alt="arow" /></span> </span>
                    </div>



                </div>
            </section>
        </>
    )
}

export default FifthBody


