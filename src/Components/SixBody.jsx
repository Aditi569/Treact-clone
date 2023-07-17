import React from 'react'
import comma from '../assets/sixBanner/arrow.svg'
// import { comma as ReactComponent } from '../assets/sixBanner/arrow.svg'
import useImg from '../assets/asset-7.jpeg'

const SixBody = () => {


    const handleprev = () => {

    }


    const handlenext = () => {

    }
    return (
        <div>
            <section>
                <div className="sixth-body-container">
                    <div className="sixth-container">
                        <div style={{ width: "50%" }} className="sixth-left-container mb-auto">
                            <h4 className='sixth-test'>Testimonials</h4>
                            <h1 className='sixth-clients'>Our Clients <span className='sixth-us'>Love Us.</span></h1>
                            <p className='sixth-para'>Here are what some of our amazing customers are saying about our marketing professionals. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="six-img">
                                <blockquote>

                                    <p className='six-para mt-5'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                                </blockquote>

                            </div>
                            <div className="six-img-container">
                                <div className="sixth-parent">
                                    <img src={useImg} alt="" />
                                    <div className="six-img-right-items">
                                        <h4 className='hale'>Charlotte Hale</h4>
                                        <p className='sixth-para'>CEO  , Tesla Inc</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: "50%" }} className="sixth-right-container">
                            <img width={"100%"} height={"600px"} src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80" alt="" />
                            <div className="button-nextprev-container">
                                <button onClick={handleprev} className="btn-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
                                <button onClick={handlenext} className="btn-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SixBody

