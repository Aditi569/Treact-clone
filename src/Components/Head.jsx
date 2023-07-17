import React from 'react'

const Head = () => {
    return (
        <div>
            <section className="bg-1">
                <div className="container">
                    {/* left body start here  */}
                    <div className="parent">
                        <div className="left-row">
                            <div className="col-12">
                                <span className='line-1'>We have now Launched operation in Europe</span><br />
                                <span className="heading">Hire the best .</span>
                                <div className="mrkt">
                                    Marketing Team.
                                </div>
                                <button className="btn-head">Read Customer Stories</button>
                                {/* <button className="text-center">Read Customer Stories</button> */}
                            </div>
                        </div>
                        {/* <!-- right background --> */}
                        <div className="right-row">
                            <div className="row-12">
                                <iframe width="640" height="320" className='vdo'
                                    src="https://player.vimeo.com/video/374265101?title=0&portrait=0&byline=0&autoplay=0&responsive=1"
                                    alt="right-image"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Head
