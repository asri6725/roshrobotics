import React, { useState } from 'react';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';

import Terabot from './slides/Terabot';
import Chair from './slides/Chair';
import Sprinkler from './slides/Sprinkler';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button} from '@material-ui/core';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const useStyles = makeStyles((theme) => ({
  texfield: {
    width: '30%',
    borderColor: '#FFFFFFF'
  },
  input: {
    color: 'white',
    background: '#16384B',
},
cssLabel: {
  color : 'white',
},

}));

export default function Home(){
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
    const slides = [];
    slides.push(
    <SwiperSlide key={1} tag="p">
    <Terabot />
    </SwiperSlide>);
    slides.push(
      <SwiperSlide key={3} tag="p">
      <Chair />
      </SwiperSlide>);
    slides.push(
    <SwiperSlide key={2} tag="p">
    <Sprinkler />
    </SwiperSlide>);
    
    const classes = useStyles();
    
    return(
        <div>
            <div className="parallax" style={{'margin-top':'30px'}}>
              <div className="myDiv" style={{'padding-top':'10%','width':'50%','height':'50%','margin-left':'25%'}}>
               
              <Typography style={{'background-color':"rgba(255,255,255,0.6)",'opacity':'1', 'padding-top':'2%' , 'padding-bottom':'2%'}} variant="h5">Usable Robots in Military, Agriculture and Daily Work</Typography>
      
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
          <TextField id="standard-basic" 
          label="Email" 
          variant="outlined" 
          className={classes.texfield}
          InputProps={{
            className: classes.input,
        }}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
          },
        }}
          />
          <Button type="Submit" value="Send" color="secondary" variant="contained" style={{'height':'55px','width':'10%'}}> Send </Button>
          
          </form>
        
      </div>
        </div>
    );
}