import React from 'react'
import { data } from '../../restApi.json'
import './Menu.css'

const Menu = () => {
    return (
        <>
            <div className="menu-container">
                {
                    data[0].dishes.map((element) => {
                        return <div className="menu-content" key={element.id}>
                            <div className="menu-img">
                                <img src={element.image} alt="" />
                            </div>
                            <div className="menu-title">
                                <h3>{element.title}</h3>
                            </div>
                            <div className="category-btn">
                                <button>{element.category}</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Menu