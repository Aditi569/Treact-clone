import React from 'react'
import assets from '../assets/asset-17.jpeg'
import pic from '../assets/asset-18.jpeg'
import image from '../assets/asset-19.jpeg'
const EightBody = () => {
    return (
        <>
            <section>
                <div className="eight-body-container">
                    <div className="eight-body">
                        <div className='eight-blog'>Blog</div>
                        <h1 className='sixth-clients'>We Love <span className='sixth-us'>Writing.</span></h1>
                        <p className='eight-para'>Some amazing blog posts that are written by even<br /> more amazing people.</p>
                    </div>


                    <div className="eight-container">
                        <div className="card-item">
                            <img style={{ width: "100%" }} height={"300px"} src={assets} alt="" />
                            <div className="card-item-scndpara">
                                <span className='eight-line'>Adam Wathan</span>
                                <span>SEO</span>
                                <h3>Optimziing your website for your main keyword</h3>
                                <h5 className="nine-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloribus maiores aut! Magnam ab ea corrupti illo fuga pariatur veritatis doloribus!</h5>
                                <button className='btn-card-item'>Read Post</button>
                            </div>
                            {/* <h3>Optimziing your website for your main keyword</h3> */}
                            {/* <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloribus maiores aut! Magnam ab ea corrupti illo fuga pariatur veritatis doloribus!</h5> */}
                            {/* <button className='btn-card-item'>Read Post</button> */}
                        </div>
                        <div className="card-item">
                            <img style={{ width: "100%" }} height={"300px"} src={pic} alt="" />
                            <div className="card-item-scndpara">
                                <span className='eight-line'>Owais Khan</span>
                                <span>Advertising</span>
                                <h3>Creating The perfect advertisement campaign</h3>
                                <h5 className="nine-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloribus maiores aut! Magnam ab ea corrupti illo fuga pariatur veritatis doloribus!</h5>
                                <button className='btn-card-item'>Read Post</button>
                            </div>
                            {/* <h3>Optimizing your website for your main keyword</h3> */}
                            {/* <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloribus maiores aut! Magnam ab ea corrupti illo fuga pariatur veritatis doloribus!</h5> */}
                            {/* <button className='btn-card-item'>Read Post</button> */}
                        </div>
                        <div className="card-item">
                            <img style={{ width: "100%" }} height={"300px"} src={image} alt="" />
                            <div className="card-item-scndpara">
                                <span className='eight-line'>Steve Schoger</span>
                                <span>Social Media</span>
                                <h3>Efficient management of your social media assets</h3>
                                <h5 className="nine-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloribus maiores aut! Magnam ab ea corrupti illo fuga pariatur veritatis doloribus!</h5>
                                <button className='btn-card-item'>Read Post</button>
                            </div>
                            {/* <h3>Optimizing your website for your main keyword</h3> */}
                            {/* <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloribus maiores aut! Magnam ab ea corrupti illo fuga pariatur veritatis doloribus!</h5> */}
                            {/* <button className='btn-card-item'>Read Post</button> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EightBody
