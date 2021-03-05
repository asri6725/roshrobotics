import React, { useState } from 'react';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';

import Terabot from './slides/Terabot';
import Chair from './slides/Chair';
import Sprinkler from './slides/Sprinkler';
import {placeholder} from './slides/placeholder.js';

import { makeStyles } from '@material-ui/core/styles';
import { Typography,Menu, MenuItem, Link} from '@material-ui/core';

import Contact from './Contact';

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

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        anchorEl : false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  //   const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const [controlledSwiper, setControlledSwiper] = useState(null);
  //   const slides = [];
  //   slides.push(
  //   <SwiperSlide key={1} tag="p">
  //   <placeholder />
  //   </SwiperSlide>);
    
    handleClick = (event) => {
      this.setState({anchorEl: event.currentTarget});
    };
  
    handleClose = () => {
      this.setState({anchorEl: null});
    };
    
    
    
    //const classes = useStyles();
    render(){
    
    const slides = [];
    slides.push(
    <SwiperSlide key={1} tag="p">
    <placeholder />
    </SwiperSlide>);
    
    return(
        <div>
          <div>
          <div className="navbar">
            <div style={{"width":"50%", "float":"right"}} className="buttons">
              <a>Contact</a>
              <a aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                Robots
              </a>
              <Menu
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleClose}
              
              >
                <Link style={{ textDecoration: 'none' }} href="/Terabot"><MenuItem onClick={this.handleClose}>Terabot</MenuItem></Link>
                <Link style={{ textDecoration: 'none' }} href="/Chair"><MenuItem onClick={this.handleClose}>Chair</MenuItem></Link>
                <Link style={{ textDecoration: 'none' }} href="/ForkLift"><MenuItem onClick={this.handleClose}>Forklift</MenuItem></Link>
                <Link style={{ textDecoration: 'none' }} href="/Sprinkler"><MenuItem onClick={this.handleClose}>Sprinkler</MenuItem></Link>
              </Menu>
              <a href="/about">About</a>
              <a href="/">Home</a>
            </div>
          </div>
        
            <div className="parallax" style={{'margin-top':'30px'}}>
              <div className="myDiv" style={{'padding-top':'10%','width':'50%','height':'50%','margin-left':'25%'}}>
               
              <Typography style={{'background-color':"rgba(255,255,255,0.6)",'opacity':'1', 'padding-top':'2%' , 'padding-bottom':'2%'}} variant="h5">Usable Robots in Military, Agriculture and Daily Work</Typography>
      
              </div>
               
            </div>
          <div style={{"background-color":"#FFF3E0"}}>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              navigation
              pagination
            >
              <SwiperSlide> <div style={{"margin":"auto", "height":"300px", "background-color":"#FFF3E0"}}><p style={{"text-align":"center"}}> <p>This is some placeholder text. </p><p> Showcase your skills here </p> </p></div></SwiperSlide>
              <SwiperSlide> <div style={{"margin":"auto", "height":"300px", "background-color":"#FFF3E0"}}><p style={{"text-align":"center"}}> <p> I work with react and angular </p></p></div></SwiperSlide>
              <SwiperSlide> <div style={{"margin":"auto", "height":"300px", "background-color":"#FFF3E0"}}><p style={{"text-align":"center"}}> <p>I am great with AWS </p> </p></div></SwiperSlide>
              </Swiper>
              </div>
              <div className="ProjectWrapper">
                <Terabot />
                <Chair />
                <Sprinkler />
              </div>
              <Contact />
            </div>
          </div>
    );
  }
}

export default Home;