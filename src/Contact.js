import React from 'react';
import axios from 'axios';
import './Contact.css';
import mail from './files/email.svg';
import phone from './files/phone.svg';

import { Button, TextField, CircularProgress, Grid } from '@material-ui/core/';

class Contact extends React.Component{ 
    
    constructor(props){
        super(props)
        this.state = {
            fund_amount_check : false,
            sent: false,
            error: "",
            isloading: false,
            //form details
            firstname : "", 
            lastname : "",
            email : "",
            phone : null,
            message : "",
            
        }
        this.generalChangeHandler = this.generalChangeHandler.bind(this);
    }
    
    generalChangeHandler = (e) => {
      this.setState({[e.target.name]:e.target.value})
    }
    
    send = async () => {
      console.log("posting")
      this.setState({isloading: true})
      await axios.post('/send', {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.InvestmentFund,
       
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>{
        console.log(response.data)
        if(response.data === 200 || response.data === "200"){
          this.setState({sent:true, isloading:false})
        }
        else{
          this.setState({error: <div><p>{response.data}<br />If the issue persists, contact me at abhinandan.srinivas@gmail.com </p></div>, isloading:false})
        }
      })
      .catch(error => {
        console.log(error)
        this.setState({error:<div><p>Looks like there is an error, please try again after refreshing.<br /> If the issue persists, contact me at abhinandan.srinivas@gmail.com</p> </div>,isloading:false})
      })
    }
  
    render(){
      const { firstname, lastname, message, email, phone } = this.state
      const height = 30
      
      // Display form, if form is sent and is awaiting server response, display a loading animation.
      const form_display = this.state.isloading ? <div style={{'margin':'25%'}}><CircularProgress color="primary" /> </div>: (
        <div className="Contact-Wrapper">
          {this.state.error}
        <form>
        <TextField required  label="Name" name = "firstname" value = {firstname} onChange={this.generalChangeHandler} style={{width:"90%"}}/> <br /><br />
        <TextField required  label="Email Address" type="mail" name = "email" value = {email}  onChange={this.generalChangeHandler} style={{width:"90%"}} /><br /><br /><br />
        <TextField
          id="outlined-textarea"
          label="Message"
          multiline
          variant="outlined"
          required  
          placeholder="message" 
          type="text" 
          name = "message" 
          rows={3} 
          style={{width:"90%"}}
          value={message} 
          onChange={this.generalChangeHandler}
        />
         <br />
        <br /><br />
        </form>
        <Button variant="contained" color="secondary"  onClick = {this.send.bind(this)} > Send </Button>
        
        </div>
        )

        // Once the server returns data, sent is true and user is given confirmation.
        const render_return = this.state.sent ?
        <div>
          <h3> All Done! </h3>
          <p> Your response is recorded. <br /> Please check the confirmation sent to your mail.<br /> Thank you! </p>
        </div>
        :
        (
          <div>
                {form_display} 
            </div>
        )

        return(
          <div style={{'margin-top':'20px', "margin-left":"50px", "padding-top":"30px"}}>
            <h3> Contact </h3>
            <Grid container spacing="auto">
              <Grid item style={{"width":"40%"}}>
                <div>
                  <p>Like to get in touch?</p>
                  <p> Feel free to shoot me a message with the form or use the phone/email address provided.</p>
                  
                  <div className="Phone-wrapper">
                    <i className="phone"> <img src={phone} style={{width:"15px", height:"15px"}} /> </i>
                    <a href="tel:+61426161260">+6142 616 120</a> 
                  </div>
                  <div className="Mail-wrapper">
                    <i className="mail"> <img src={mail} style={{width:"18px", height:"18px",paddingTop:"10px"}} /> </i>
                    <a href="mailto:roshan.chavan@gmail.com">roshan.chavan@gmail.com</a>
                  </div>
              </div>
              </Grid>

              <Grid item style={{"width":"40%", "margin-left":"auto", "margin-right":"10%"}}>
              <div>
                {render_return}  
              </div>
              </Grid>
            </Grid>
          </div>
        );
    }
}

export default Contact;