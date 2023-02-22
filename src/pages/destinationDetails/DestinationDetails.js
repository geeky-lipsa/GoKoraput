import React, { useState } from 'react'
import { Destinations,ImageComponent } from '../../componentes'
import './destinationDetails.css'
import destinations from '../../data/Destinations.json'
import {useParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const DestinationDetails = () => {
  const {name}= useParams ();
  var destination = destinations.filter(a => a.destinationName === name);
   
    var simialrdestinations = destinations.filter(a => a.type === destination[0].type);
    const [model, setModel] = useState(false);
    const [tempimgSrc, setImgSrc]=useState('');
    
  const openImage = (imgsrc) =>{
    setImgSrc(imgsrc);
    setModel(true);
  }
    function getSimilarDestinations(){
        const SimilarDestinationArray=[]
        simialrdestinations.forEach((simialrdestination,index)=>{
          if(simialrdestination.destinationName !==name){
            SimilarDestinationArray.push(
        <Destinations
            dest={simialrdestination.destinationName}
            type={simialrdestination.tag}
            image={simialrdestination.img[0]}
            image_alt={simialrdestination.alt}
            description={simialrdestination.overview}
            key={index}
          ></Destinations>
          )}})
        return SimilarDestinationArray
    }

  return (
    <>
    <Helmet>
    <title>{destination[0].alt} | Go Koraput</title>
    <meta name="description" content={destination[0].description}/>
    <link rel="canonical" href={`/Destination/${destination[0].alt}`} />
    </Helmet>
    <div className="destination-details-container" >
      {model && <ImageComponent closeContact={setModel} imgSrc={tempimgSrc} />}
    <div className="destination-details-gallery">
  
       <div className="destination-details-container1">
         <div className="destination-details-container2" onClick={() => openImage(destination[0].img[0])}>
             <img src={destination[0].img[0]} alt={destination[0].alt} loading='lazy' title={destination[0].alt}  width="100%" height="100%"/>
         </div>
       </div>
       <div className="destination-details-container3">
         <div className="destination-details-container4" onClick={() => openImage(destination[0].img[1])}>
         <img src={destination[0].img[1]}  alt={destination[0].alt}  loading='lazy' title={destination[0].alt}  width="100%" height="100%"/>
         </div>
       </div>
       <div className="destination-details-container5">
         <div className="destination-details-container6" onClick={() => openImage(destination[0].img[2])}>
         <img src={destination[0].img[2]}  alt={destination[0].alt}  loading='lazy' title={destination[0].alt}  width="100%" height="100%"/>
         </div>
       </div>
     </div>
     <div className="destination-details-container7">
     <div className="destination-details-container8">
         <h1 className="destination-details-header Heading">{destination[0].alt}
         <p className="destination-details-tagline Subheading">{destination[0].tag}</p></h1>
         <br />
         <div className="destination-details-details Content">
             <p className="destination-details-text">{destination[0].overview}</p>
         </div>
     </div>
     <div id="main-section" className="landing-page-main">
         <h2 className='Heading'>Similar {destination[0].type}</h2>
         <div className="landing-page-cards-container">
         {getSimilarDestinations()}
         </div>
       </div>
     </div>
   </div>
   </>
  )
}

export default DestinationDetails