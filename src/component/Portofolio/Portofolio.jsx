import React from 'react'
import './Portofolio.css'
import IMG1 from'../../assets/p0.png'
import IMG2 from'../../assets/p1.png'
import IMG3 from'../../assets/p2.png'
import IMG4 from'../../assets/p0.png'
import IMG5 from'../../assets/p1.png'
import IMG6 from'../../assets/p2.png'
const Portofolio = () => {
  return (
    <section id='Portofolio'>
      <h2>My Recent Work</h2>
      <h2>Portfolio</h2>

    <div className=' container portfolio_container'>
      <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG1}alt=""/>
          </div>
        <h3>This Is Portfolio Item Title</h3>
        <div className="portfolio_item-cta">
        <a href='https://github.com/Aji9797'className='btn'>Github</a>
        </div>
      </article>

      <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG2}alt=""/>
          </div>
        <h3>This Is Portfolio Item Title</h3>
        <div className="portfolio_item-cta">
        <a href='https://github.com/Aji9797'className='btn'>Github</a>
        </div>
      </article>

      <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG3}alt=""/>
          </div>
        <h3>This Is Portfolio Item Title</h3>
        <div className="portfolio_item-cta">
        <a href='https://github.com/Aji9797'className='btn'>Github</a>
        </div>
      </article>

      <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG4}alt=""/>
          </div>
        <h3>This Is Portfolio Item Title</h3>
        <div className="portfolio_item-cta">
        <a href='https://github.com/Aji9797'className='btn'>Github</a>
        </div>
      </article>

      <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG5}alt=""/>
          </div>
        <h3>This Is Portfolio Item Title</h3>
        <div className="portfolio_item-cta">
        <a href='https://github.com/Aji9797'className='btn'>Github</a>
        </div>
      </article>

      <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG6}alt=""/>
          </div>
        <h3>This Is Portfolio Item Title</h3>
        <div className="portfolio_item-cta">
        <a href='https://github.com/Aji9797'className='btn'>Github</a>
        </div>
      </article>

    </div>
      
      </section>
  )
}

export default Portofolio