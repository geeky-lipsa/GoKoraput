import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Destinations, Footer, Header} from '../../componentes';
import destinations from '../../data/Destinations.json'
import './destination.css'
const Destination = () => {
    

    function getCategoryDestinations(category){
        var destinationscategory = destinations.filter(a => a.type === category);
        const destinationscategoryArray=[]
        destinationscategory.forEach((dest,index)=>{
            destinationscategoryArray.push(
        <Destinations
            dest={dest.destinationName}
            type={dest.tag}
            image={dest.img[0]}
            image_alt={dest.alt}
            description={dest.overview}
            key={index}
          ></Destinations>
          )})
        return destinationscategoryArray
    }
  return (
    <>
    <Helmet>
    <title>Top Destinations | Go Koraput</title>
    <meta name="description" content="Explore the rich cultural heritage, stunning landscapes, & thrilling adventures Koraput has to offer. Visit Koraput for a memorable vacation."/>
    <link rel="canonical" href="/Destinations" />
    </Helmet>
    <div className="destination-details-container" >
        <Header />
        <h1 className='Heading'>Browse through Top Destinations</h1>
        <div className="landing-page-main">
         <h2 className='Subheading destination-category-heading'>Scenic Spots</h2>
         <div className="landing-page-cards-container">
         {getCategoryDestinations("Scenic Spots")}
         </div>
       </div>
       <div className="landing-page-main">
         <h2 className='Subheading destination-category-heading'>WaterFalls</h2>
         <div className="landing-page-cards-container">
         {getCategoryDestinations("WaterFalls")}
         </div>
       </div>
       <div className="landing-page-main">
         <h2 className='Subheading destination-category-heading'>NearBy Areas</h2>
         <div className="landing-page-cards-container">
         {getCategoryDestinations("NearBy")}
         </div>
       </div>
       <Footer />
        </div>
        </>
  )
}

export default Destination