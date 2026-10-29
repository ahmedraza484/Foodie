import React from 'react'
import { data } from '../../restApi.json'
import './Qualities.css'
import OurTeam from '../OurTeam/OurTeam'

const Qualities = () => {
    return (
        <>
            <div className="qualities">
                {
                    data[0].ourQualities.map((element) => {
                        return <div className="container" key={element.id}>
                            <div className="quality-card" >
                                <img src={element.image} alt="" />
                            </div>
                            <div className="quality-text">
                                <h1>{element.title}</h1>

                            </div>
                        </div>
                    })
                }


            </div>
            <OurTeam />
        </>
    )
}

export default Qualities