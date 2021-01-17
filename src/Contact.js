import React from 'react';
import axios from 'axios';

import { Button, TextField, CircularProgress, TextareaAutosize } from '@material-ui/core/';

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
        <div>
          <h3> Contact </h3>
          {this.state.error}
        <form>
        <TextField required  label="First Name" name = "firstname" value = {firstname} onChange={this.generalChangeHandler} /> <br />
        <TextField required  label="Last Name"name = "lastname" value={lastname} onChange={this.generalChangeHandler} /> <br /><br />
       <TextField required  label="Email Address" type="mail" name = "email" value = {email}  onChange={this.generalChangeHandler} /><br /><br />
        <TextField   label="Phone Number" type="number" name = "phone" value={phone} onChange={this.generalChangeHandler}  /><br /> <br /><br />
        
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
          <div style={{'margin-top':'50px'}}>
          {render_return}  
          </div>
        );
    }
}

export default Contact;