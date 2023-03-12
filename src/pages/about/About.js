import React from 'react'
import './about.css'
import why from '../../images/Pages/undraw_in_thought_re_qyxl.svg'
import who from '../../images/Pages/undraw_questions_re_1fy7.svg'
import vision from '../../images/Pages/undraw_shared_goals_re_jvqd.svg'
import { Helmet } from 'react-helmet-async'
const About = () => {
  return (
    <>
    <Helmet>
    <title>About Us | Go Koraput</title>
    <meta name="description" content="We as a service provider will give you End-to End solution of your trip where you have to only reach Koraput with your bags and rest we will organize all."/>
    <link rel="canonical" href="/About" />
    </Helmet>
    <div className='about-container'>
    <div className='about-wrapper'>
        <h1 className='Heading'>Know About Us in Detail:</h1>
        <div className='about-who'>
            <div className='about-text'>
                <h3 className='about-header Heading'>How it works!!!</h3>
                <div className='Content'>
                <p>We as a service provider will give you End-to End solution of your trip where you have to only reach Koraput with your bags and rest we will organize all. Such as choosing the destinations to visit, stay location,transportation for exploring the sights.Last but not least we will pick you up fromthe Airport/ Railway station/ Bus-stand if anybody wants to & drop you too at the same.</p>
<p className='Subheading'><strong>What we solve :-</strong></p>
<p>1.Confusion about choosing the stay location.</p>
<p>2. Selecting the correct destinations to visit & explore within the specific duration of your tour.</p>
<p>3. Avoid paying unwanted charges for local taxis</p>
<p className='Subheading'><strong>What we offer:-</strong></p>
<p>1.Comfortable & Affordable stay place.</p>
<p>2. Pet-friendly stay location.</p>
<p>3. Planned & Organized tour package.</p>
<p>4. Breakfast Included.</p>
<p>5. Hassle-free service.</p>
</div>
            </div>
            <div ><img className='about-image' src={who} alt="who we are?" title='who we are' width="100%" height="100%"/></div>
        </div>
        <div className='about-why'>
        <div><img className='about-image' src={why} alt="why we?" loading='lazy' title='why we'  width="100%" height="100%"/></div>
            <div className='about-text'>
                <h2 className='about-header Heading'>Why Koraput???</h2>
                <div className='Content'>
                <p>Why not!!!! When a place has got everything to make you down for a tour & exploring the unexplored then you just grab your clothes, pack it off and head towards it.A beautiful land of mountains surrounded by greenery, waterfalls, terraced valleys, natural caves & a rich tribal way of life attract many tourists nowadays to explore the hidden beauty of Koraput.A place that is far away from the limelight of outer world has seriously got something in it to make you high with its climate and natural beauty</p>
                </div>
            </div>
           
        </div>
        <div className='about-who'>
            <div className='about-text'>
                <h2 className='about-header Heading'>Our Vision</h2>
                <div className='Content'>
<p>Koraput is one of the best kept secret in India which is yet to be discovered and explored by the outer world. So let's make the place worthy as it deserve & do some better change for the surrounding.</p>
<p>To develop Koraput as one of the most preferred tourist destinations and to place it prominently on the domestic international tourism map</p>
</div>
            </div>
            <div ><img className='about-image' src={vision} alt="our vision"  loading='lazy' title='our vision'  width="100%" height="100%"/></div>
        </div>
    </div>
</div>
</>
  )
}

export default About