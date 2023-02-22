import React, { useState } from 'react'
import {BsCheck2All}  from "react-icons/bs";
import { ImageComponent, PackageContact, SolidButton } from '../../componentes'
import './packageDetails.css'
import packages from '../../data/Packages.json'
import {useParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const PackageDetails = () => {
  const {name}= useParams ();
  var packagedetail = packages.filter(a => a.name === name);
  const [model, setModel] = useState(false);
  const [contact, setContact] = useState(false);
  const [tempimgSrc, setImgSrc]=useState('');
  
const openImage = (imgsrc) =>{
  setImgSrc(imgsrc);
  setModel(true);
}

function getAmenities(){
  const AmenitiesArray=[]
  packagedetail[0].amenitiesincluded.forEach((amenities,index)=>{
          AmenitiesArray.push(
            <span key={index}><BsCheck2All />{amenities}</span>
            )})
            return AmenitiesArray
        }

  function getItenaryDetails(){
  const ItenaryDetailsArray=[]
  packagedetail[0].description.forEach((itenary,index)=>{
    ItenaryDetailsArray.push(
      <span className="description-text16" key={index}>Day {index+1}: {itenary}</span>
            )})
            return ItenaryDetailsArray
        }
  return (
    <>
    <Helmet>
    <title>{packagedetail[0].name} | Go Koraput</title>
    <meta name="description" content={packagedetail[0].short_overview}/>
    <link rel="canonical" href={`/Packages/${packagedetail[0].name}`} />
    </Helmet>
    <div className="description-container" >
    {model && <ImageComponent closeContact={setModel} imgSrc={tempimgSrc} />}
    {contact && <PackageContact closeContact={setContact} packgname={packagedetail[0].name}/>}
      <div className="description-hero" >
        <img onClick={() => openImage(packagedetail[0].img)}
          alt={packagedetail[0].name}
          src={packagedetail[0].img}
          className="description-image"
          loading='lazy' title={packagedetail[0].name}  width="100%" height="100%"
        />
        <h1 className="description-text Heading">{packagedetail[0].name}</h1>
        <span className="description-text01 Content">
        {packagedetail[0].locations.map((elem) => (elem)).join(',')}
        </span>
        <div className="description-container1 Subheading">
          <span className="description-text02">{packagedetail[0].duration}</span>
          <span className="description-text03">Starts From {packagedetail[0].price}</span>
          <span className="description-text04">*{packagedetail[0].members} persons</span>
        </div>
      </div>
      <div className="description-container2 Content">
        <p> 
        {packagedetail[0].overview}
          </p>
      </div>
      <div className="description-container3">
        <span className="description-container3-heading Subheading">Includes/Excludes</span>
        <br />
        <div className="description-container4 Content">
          {getAmenities()}
        </div>
      </div>
      <div className="description-container5 Content">
        {getItenaryDetails()}
      </div>
      <div className="description-container6">
        <SolidButton className='button' handler={()=>{setContact(true)}} button="Enquire Now" ></SolidButton>
      </div>
    </div>
    </>
  )
}

export default PackageDetails
