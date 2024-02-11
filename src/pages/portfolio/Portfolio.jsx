import React from 'react'
import './portfolio.css';
import { portfolio } from '../../data'
import Portfolioitms from '../../component/Portfolioitms'
function Portfolio() {
  return (
    <section className="portfolio section">
      <h2 className="section__title">My <span>PoRTFOLIO</span></h2>

      <div className="portfolio__container container grid">
        {portfolio.map((item)=>{
          return <Portfolioitms key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}

export default Portfolio