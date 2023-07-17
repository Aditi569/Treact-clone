import React from 'react'

const SeventhBody = () => {



    const AccordianData = [{
        title: "Is lunch provided free of cost ?",
        Description: "Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch. This limit is enough for any one person and merely exists to discourage abusal of the system."
    },

    {
        title: "Do you have 2 Bedroom suites ?",
        Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui labore sint ipsam vitae voluptates distinctio minus voluptate, voluptas maxime nesciunt. Ducimus illo nostrum eius."
    },
    {
        title: "Are Wi-Fi costs include in the price?",
        Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui labore sint ipsam vitae voluptates distinctio minus voluptate, voluptas maxime nesciunt. Ducimus illo nostrum eius."
    },
    {
        title: "Where can I reach you for support?",
        Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui labore sint ipsam vitae voluptates distinctio minus voluptate, voluptas maxime nesciunt. Ducimus illo nostrum eius."
    },
    ]
    return (
        <>
            <section>
                <div className="seven-body-container">
                    <div className="seven-body">
                        <div className="seven-left-container">
                            <img height={"450px"} width={"100%"} src="https://treact.owaiskhan.me/static/media/customer-support-illustration.7164659e338b9013dc196213c60c8ad2.svg" alt="" />
                        </div>
                        <div style={{ width: "50%" }} className="seven-right-container">
                            <h4 className='seven-fq'>FAQs</h4>
                            <h1 className='seven-do'>Do you have <span className='seven-us'>Questions ?</span></h1>
                            <p className='sixth-para'>Here are some frequently asked questions about our hotels from our loving customers. Should you have any other questions, feel free to reach out via the contact form below.</p>


                            {/* <p className='seven-lunch'>Is lunch provided free of cost ?</p>
                                <button>+</button> */}
                            {AccordianData.map((item, index) => (
                                // <div key={index} className="card-body">
                                <div key={index} >
                                    <div className="faq-item-conatiner">
                                        <p className='seven-lunch'>{item.title}</p>
                                        <button>+</button>
                                    </div>
                                    <p className='seven-lunch'>{item.Description}</p>
                                </div>

                            ))}



                            {/* <p className='seven-lunch'>Do you have 2 Bedroom suites ?</p>
                            <p className='seven-lunch'>Are Wi-Fi costs include in the price?</p>
                            <p className='seven-lunch'>Where can I reach you for support ?</p> */}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default SeventhBody
