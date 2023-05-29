import React from "react"
import "./Home.css"
import SliderHome from "./Slider"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='containere d_flexz'>
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home
