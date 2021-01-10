import React, { useState } from 'react';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';

import Terabot from './slides/Terabot';
import Chair from './slides/Chair';
import Sprinkler from './slides/Sprinkler';

import { Typography, TextField, Button} from '@material-ui/core';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);


export default function Home(){
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
    const slides = [];
    slides.push(
    <SwiperSlide key={1} tag="li">
    <Terabot />
    </SwiperSlide>);
    slides.push(
      <SwiperSlide key={3} tag="li">
      <Chair />
      </SwiperSlide>);
    slides.push(
    <SwiperSlide key={2} tag="li">
    <Sprinkler />
    </SwiperSlide>);
    
    
    
    return(
        <div>
            <div className="parallax" style={{'margin-top':'30px'}}>
              <div className="myDiv" style={{'padding-top':'10%','width':'50%','height':'50%','margin-left':'25%'}}>
               
              <Typography style={{'background-color':"rgba(255,255,255,0.6)",'opacity':'1'}} variant="h5">Usable Robots in Military, Agriculture and Daily Work</Typography>
      
              </div>
               
            </div>

            <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: controlledSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation // check this
        pagination //check this
        spaceBetween={0}
        slidesPerView={1}
        loop={true} //Check this
        autoplay={{delay:2, disableOnInteraction:true}} //check this
        onInit={(swiper) => console.log('Swiper initialized!', swiper)}
        onSlideChange={(swiper) => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        
        
      >
        {slides}
      </Swiper>
      <div className="NewsLetter">
        <h4 style={{'margin-top':'2%'}}> Subscribe to the newsletter to recieve updates on the bots and on new research! </h4>
          <form style={{'margin-top':'5%'}}>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <Button type="Submit" value="Send" color="Primary"> Send </Button>
          </form>
      </div>
        </div>
    );
}