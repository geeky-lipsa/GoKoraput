import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ImageComponent } from '../../componentes'
import data from '../../data/Gallary.json'
import './gallary.css'
const Gallary = (props) => {
    const [model, setModel] = useState(false);
    const [tempimgSrc, setImgSrc]=useState('');
    const getImage = (imgsrc) =>{
      setImgSrc(imgsrc);
      setModel(true);
    }
    function getGallaryImage(){
        const gallayImageArray = []
        data.forEach((item, index) => {
            gallayImageArray.push(
                <img className='gallary-image' onClick={()=> getImage(item.src)} src={item.src} alt='' loading='lazy' title=''  width="100%" height="300" key={index} />
            ) 
              })
              return gallayImageArray
}
  return (
    <>
     <Helmet>
    <title>Our Gallary | Go Koraput</title>
    <meta name="description" content="Immerse yourself in the beauty of different cultures, landscapes, & adventures. Get inspired for your next trip with our magnificent photos."/>
    <link rel="canonical" href="/Gallary" />
    </Helmet>
    <div className='gallary-container'>
    {model && <ImageComponent closeContact={setModel} imgSrc={tempimgSrc} />}
      <h1 className='Heading'>Our Magnificient Gallary</h1>
      <br />
      <div className='gallary-wrapper'>
      {getGallaryImage()}</div>
    </div>
    </>
  )
}

export default Gallary