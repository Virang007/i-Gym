import React from 'react'

const Gallery = () => {
  const gallery = [ "/img1.webp","/img1.jpg","/img2.jpg","/img3.jpg","/img4.jpg","/img7.jpg","/img6.jpg","/img7.jpg","/img8.jpg","pricing.jpg"];
  return <section className='gallery'>
    <h1>BETTER BEATS BEST</h1>
    <div className="images">
      <div>
        {
          gallery.splice(0,3).map((element,i)=>(
            <img key={i} src={element} alt="gallery" />
          ))
        }
      </div>
      <div>
        {
          gallery.splice(0,3).map((element,i)=>(
            <img key={i} src={element} alt="gallery" />
          ))
        }
      </div>
      
    </div>
  </section>
}

export default Gallery