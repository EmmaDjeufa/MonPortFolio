import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"

export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src={val.cover} alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='Que savoir à propos de moi?' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button className='primaryBtn'>Télécharger le CV</button>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}
