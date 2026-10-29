import React from 'react'
import './About.css'
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
      <div className="about-us">
        <div className="about-right">
          <img src="./burger-4.png" width={"300px"} height={"300px"} />
        </div>
        <div className="about-left">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
            <div className="bottom">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident possimus optio adipisci dolores impedit illum iusto
              perferendis, laudantium quod accusamus consequuntur consectetur,
              tempore nulla error iure reiciendis dolorem assumenda.
              Necessitatibus fugit asperiores totam rem esse exercitationem
              iusto ipsum qui dolore ex, accusantium repellat mollitia
              repellendus.
            </div>
            <div className="explore-btn">
              <Link to={"/"}>
                Explore Menu{" "}
                <span>
                  <HiOutlineArrowRight />
                </span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs