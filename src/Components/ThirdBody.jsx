import React from 'react'

const data = [
    {
        logo: "https://treact.owaiskhan.me/static/media/shield-icon.daefe14b320b14fbd9cbd18908ac93ec.svg",
        title: "Ads Management",
        desc: "We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou."
    },
    {
        logo: "https://treact.owaiskhan.me/static/media/support-icon.f9253ffa8cb6ffde5bbaa05eb5136375.svg",
        title: "Video Marketing",
        desc: "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."
    },
    {
        logo: "https://treact.owaiskhan.me/static/media/customize-icon.367468c90fd796009b97fbfba67b2c6a.svg",
        title: "Customer Relation",
        desc: "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel"
    },
    {
        logo: "https://treact.owaiskhan.me/static/media/reliable-icon.1367510a8f0a1bec76dc425d25f92f43.svg",
        title: "Product Outreach",
        desc: "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel"
    },
    {
        logo: "https://treact.owaiskhan.me/static/media/fast-icon.dbb971a73d4805d2fc3bcdacdb55beba.svg",
        title: "PR Campaign",
        desc: "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel"
    },
    {
        logo: "https://treact.owaiskhan.me/static/media/simple-icon.673b7e1750b2a4ef32907fc164828d00.svg",
        title: "Product Expansion",
        desc: "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel"
    }
]

const ThirdBody = () => {
    return (
        <div>
            <section className='third'>
                <div className="third-container">
                    <h1 className='headings'>Our Professional <span className='service'>Services</span></h1>
                    <div className="card" >
                        {data.map((p, ind) => (
                            <div key={ind} className="card-body-1">
                                <img className='' width={100} src={p.logo} alt="logo" />
                                <h4 className="card-title">{p.title}</h4>
                                <p className="card-text">{p.desc}</p>
                                {/* <a href="#" class="btn btn-primary">See Profile</a> */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ThirdBody
