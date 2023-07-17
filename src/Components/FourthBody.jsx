import React from 'react'
import professionlogo from "../assets/fourthBanner/professional.svg"
import affordablelogo from "../assets/fourBanner/affordable.svg"
const FourthBody = () => {
    return (
        <div>
            <section>
                <div className="fourth-body-container">
                    <h5 className='Expert'>Our Expertise</h5>
                    <div className="four-body">
                        <div className='four'>We have the most <span className='prof'> Professional </span>
                            marketing team.
                            <h4 className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Itaque, iure adipisci exercitationem corporis qui suscipit dolor?
                                Reiciendis dolores excepturi quae, reprehenderit dolorum,
                                non atque doloremque vitae nisi hic cupiditate optio?</h4>
                            <div className="four-img">
                                <div className="fourth-heading">
                                    <div className='fourth-heading-logo'>
                                        <img src={professionlogo} alt="professional loogo" />
                                    </div>
                                    <div>
                                        <div className="four-heading">Professionalism</div>
                                        <p className="four-paras">We have the best professional marketing people
                                            across the globe just to work with you.
                                        </p>
                                    </div>
                                </div>
                                <div className="fourth-heading">
                                    <div className='fourth-heading-logo'>
                                        <img src={affordablelogo} alt="" />
                                    </div>
                                    <div>
                                        <div className="four-heading">Affordable</div>
                                        <p className="four-paras">We promise to offer you the best rate we can -at
                                            par with the industry standard
                                        </p>
                                    </div>
                                </div>
                                {/* <button className="btn-2">See Our Portfolio</button> */}
                            </div>
                            <button className="btn-2">See Our Portfolio</button>

                        </div>
                        <div className="fourth-imgs">
                            <img height="550px" src="https://treact.owaiskhan.me/static/media/team-illustration-2.76aa0427e037826d4453f8791ee544e3.svg" alt="images" />
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default FourthBody
