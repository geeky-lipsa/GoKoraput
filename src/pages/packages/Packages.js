import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Package} from '../../componentes';
import packages from '../../data/Packages.json'
import './packages.css'
    

    
const Packages = () => {
    function getpackages(){
        
        const packagesArray=[]
        packages.forEach((pckgs,index)=>{
            packagesArray.push(
        <Package
        image_src={pckgs.img}
        image_alt={pckgs.name}
        packageName={pckgs.name}
        description={pckgs.short_overview}
            key={index}
          ></Package>
          )})
        return packagesArray
    }

  return (
    <>
    <Helmet>
    <title>Packages | Go Koraput</title>
    <meta name="description" content="Handpicked Packages coupling together with diverse destinations , solely to make make your trips memorable."/>
    <link rel="canonical" href="/Packages" />
    </Helmet>
    <div className="destination-details-container" >
        <h1 className='Heading'>Handpicked Packages</h1>
        <div className="landing-page-main">
         <h2 className='Subheading destination-category-heading'>Camping</h2>
         <div className="landing-page-cards-container">
         {getpackages()}
         </div>
       </div>
        </div>
        </>
  )
}

export default Packages