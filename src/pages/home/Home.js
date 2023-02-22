import React, { useState } from 'react'
import { Destinations,ExtraServices, Package, Services, SolidButton, TestimonialComponent, Testimonials } from '../../componentes'
import destinations from '../../data/Destinations.json'
import packages from '../../data/Packages.json'
import testimonials from '../../data/Testimonials.json'
import './home.css'
import third from "../../images/undraw_terms_re_6ak4.svg"
import safety from "../../images/undraw_safe_re_kiil.svg"
import hospitality from "../../images/undraw_cabin_hkfr.svg"
import taxi from "../../images/undraw_order_ride_re_372k.svg"
import bike from "../../images/undraw_traveling_a263.svg"
import homestay from "../../images/undraw_sweet_home_dkhr.svg"
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Home = (props) => {
const hospitalityDescription=["Pickup /Drop to and from Boarding Point","Complementary Breakfast","Stay at handpicked locations","Dedicated Private ride for Trip"]
const TransparencyDescription=["no 3rd party includes.","Everything from start to end is handled by our own team.","Package Charges includes Driver allowance","entry charges, stay, Pickup and Drop"]
const safetyDescription=["All Destinations Provided by us are verified safe","Our Team puts rigourous efforts to make your Trips Memorable","24hr Support Available during Trips","Emergency First Aids,when needed"]
const extraDescription=[];
const [model, setModel] = useState(false);
function getTestimonials(){
  const testimonialsArray=[]
  testimonials.forEach((test,index)=>{
    
    if(index<3){
      testimonialsArray.push(
  <Testimonials
      quote={test.message}
      picture_src={test.img}
      picture_alt={test.name}
      name={test.name}
      key={index}
    ></Testimonials>
    )}})
  return testimonialsArray
}
function getDestinations(){
    const destinationsArray=[]
    destinations.forEach((dest,index)=>{
      
      if(index<3){
        destinationsArray.push(
    <Destinations
        dest={dest.destinationName}
        type={dest.type}
        image={dest.img[0]}
        image_alt={dest.alt}
        description={dest.overview}
        key={index}
      ></Destinations>
      )}})
    return destinationsArray
}
function getPackages(){
  const packageArray=[]
  packages.forEach((pckgs,index)=>{
    
    if(index<3){
      packageArray.push(
  <Package
  image_src={pckgs.img}
  image_alt={pckgs.name}
  packageName={pckgs.name}
  description={pckgs.short_overview}
      key={index}
    ></Package>
    )}})
  return packageArray
}
  return (
    <>
    <Helmet>
    <title>Explore the Unexplored | Go Koraput</title>
    <meta name="description" content="Koraput. A city of scenic landscapes, cultural heritage, & thrilling adventures. Come escape city life and experience the beauty of Koraput."/>
    <link rel="canonical" href="/" />
    </Helmet>
    <div className="landing-page-container" >
      {model && <TestimonialComponent closeContact={setModel}/>}
      <div className="landing-page-top-container">
        <div className="landing-page-hero">
          <div className="landing-page-content-container">
            <h1 className="Heading landing-page-text09">Discover The Hidden Treasures Of Koraput</h1>
            <h2 className="Subheading landing-page-subheading">
            Your Next Adventure Awaits
            </h2>
            <Link to="/Destination"><SolidButton button="Explore homes"></SolidButton></Link>
          </div>
        </div>
      </div>
      <div id="main-section" className="landing-page-main">
        <h2 className='Heading'>Most Famous Destinations</h2>
        <Link to="/Destination"><span className=" Content landing-page-text15">View More</span></Link>
        <div className="landing-page-cards-container">
        {getDestinations()}
        </div>
      </div>
      <div className="landing-page-blog">
        <h2 className="landing-page-text16 Heading">Recommended Packages</h2>
        <Link to="/Packages"><span className=" Content landing-page-text15">View More</span></Link>
        <div className="landing-page-container1">
         {getPackages()}
         </div>
      </div>
      <div className="landing-page-features">
      
        <h2 className="landing-page-text17 Heading">
          <span>Something Extra</span>
          <br></br>
          <span></span>
        </h2>
        <span className="landing-page-text20 Content">
          <span></span>
        </span>
        <div className="landing-page-container8">
          <ExtraServices rootClassName="rootClassName" 
          img_src={taxi} 
          img_alt="Rent a Cab" 
          title="Cab Services" 
          description={extraDescription} ></ExtraServices>
          <ExtraServices rootClassName="rootClassName3" 
          img_src={bike} 
          img_alt="Rent a Bike" 
          title="Bike Rental" 
          description={extraDescription}></ExtraServices>
          <ExtraServices rootClassName="rootClassName5" 
          img_src={homestay} 
          img_alt="Home Stay" 
          title="Home Stay Services" 
          description={extraDescription}></ExtraServices>
        </div>
      </div>
      <div className="landing-page-features">
        <h2 className="landing-page-text17 Heading">
          <span>Explore Our Services</span>
          <br></br>
          <span></span>
        </h2>
        <span className="landing-page-text20 Content">
          <span>
<p>Join us as we embark on a journey to explore the natural wonders and cultural riches of this picturesque region. Soak in the breathtaking views, try the local cuisine, meet the friendly locals, and immerse yourself in the rich history and tradition of Koraput.</p>
<br />
<p>With us, you will have the opportunity to experience the best that Koraput has to offer, in a safe and convenient way. Whether you're an adventurer, nature lover, or cultural enthusiast, a trip to Koraput will be a journey to remember. Book your trip today and get ready to fall in love with the beauty of Koraput.</p>
          </span>
          <span></span>
        </span>
        <div className="landing-page-container3">
          <Services rootClassName="rootClassName" 
          img_src={hospitality} 
          img_alt="Services includes" 
          title="Services Include" 
          description={hospitalityDescription} ></Services>
          <Services rootClassName="rootClassName3" 
          img_src={third} 
          img_alt="Transparency" 
          title="Transparency" 
          description={TransparencyDescription} ></Services>
          <Services rootClassName="rootClassName5" 
          img_src={safety} 
          img_alt="Safety and Security" 
          title="Safety and Security" 
          description={safetyDescription} ></Services>
        </div>
      </div>
      <div className="landing-page-testimonial">
        <div className="landing-page-container4">
          <h2 className="landing-page-text23 Heading">
            <span>What They’re Saying</span>
            <br></br>
            <span></span>
          </h2>
          <span className="landing-page-text26 Content">
            <span>
            <p>At <strong>GoKoraput</strong>, we strive to provide our guests with a truly memorable travel experience. From the moment you book your trip to the moment you return home, our dedicated team is here to ensure that every aspect of your journey is seamless and enjoyable.</p>
              <br />
            <p>But don't just take our word for it. Hear from our satisfied travelers who have experienced the magic of Koraput for themselves. Read through their testimonials and see why they have chosen us for their travels.</p>
            </span>
          </span>
          <div className="landing-page-container5">
            
          {getTestimonials()}
          </div>
          <div className="review-banner">
        <h2 className="review-text">
          <span className='Heading'>Feel Free To Share Your Reviews And Rate Us</span>
          <br className="review-text2"></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h2>
        <button type="button" className="review-button button" onClick={()=>{setModel(true)}}>Rate Us</button>
      </div>
        </div>
        
      </div>
     
    </div>
    </>
  )
}

export default Home
