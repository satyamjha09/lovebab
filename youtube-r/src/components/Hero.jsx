import React from 'react'

const  HeroSeaction = () => {
  return (
    <>
      <main className="hero container">
        <div className='Hero-content'>
            <h1>YOUR FEET 
                 DESERVE
                 THE BEST
            </h1>

            <p>
             YOUR FEET DESERVE THE BEST AND WE’RE HERE TO
             HELP YOU WITH OUR SHOES. YOUR FEET DESERVE 
             THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
             SHOES
            </p>

            <div className="hero-btn">
                <button>Shop Now</button>
                <button className='secondary-btn'>Categorty</button>
            </div>

            <div className="Shopping">
                <p>Also Available On</p>

                <div className="brand-icon">
                    <img src="./images/amazon.png" alt="amazon-logo" />
                    <img src="./images/flipkart.png" alt="" />

                </div>

            </div>


        </div>

        <div className='Hero-Images'>
            <img src="./images/shoe_image.png" alt="" />
        </div>
      </main>
    </>
  )
}

export default HeroSeaction
