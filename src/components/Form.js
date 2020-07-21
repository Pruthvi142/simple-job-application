import React, { Component } from 'react';
import Popup from "reactjs-popup";

// import '../App.css';

class Form extends Component {
    constructor()
    {
        super()
        this.state={
            
                name:"",
                email:"",
                phone:"",
                jobTitle:"--Select--",
                experience:"",
                skills:"",
               error:''
            
        }
    }
    handlechange=(e)=>{
        
        this.setState({[e.target.name]:e.target.value})
       
    }
    // handleSelect(e) {
    //     this.setState([e.target.name]:e.target.value}) // I tried before target.value, or nativeEvent.value
    // }
    handlesubmit=(e)=>{
        // if(this.state.name=="")
        // {
        //  let error="filed cannot be empty"
        //  this.setState({error})
        // }
        // if(this.state.email=="")
        // {
        //  let error="filed cannot be empty"
        //  this.setState({error})
        // }
        // if(this.state.phone=="")
        // {
        //  let error="filed cannot be empty"
        //  this.setState({error})
        // }
        // if(this.state.jobTitle=="")
        // {
        //  let error="filed cannot be empty"
        //  this.setState({error})
        // }
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            jobTitle:this.state.jobTitle,
            experience:this.state.experience,
            skills:this.state.skills
        }
        this.props.addMessage(formData)
        console.log(formData)
        this.setState(
            {
                name:"",
                email:"",
                phone:"",
                jobTitle:"",
                experience:"",
                skills:"",
            }
        )

    }
    render() {
        
        return (
           
            <div className="div1">
          
         {<h1 class="center">Apply for Job</h1>}
               <form className="center"  onSubmit={this.handlesubmit}>
    <label for="fname">Full Name</label>
    <input type="text"  name="name" onChange={this.handlechange} value={this.state.name} placeholder="Your name.."/>
    <span style={{color: "red"}}>{this.state.error}</span><br/>

    <label for="lname">Email</label>
    <input type="text"  name="email" onChange={this.handlechange} value={this.state.email} placeholder="Enter the email"/>
    <span style={{color: "red"}}>{this.state.error}</span><br/>
    <label for="contact">Contact Number</label>
    <input type="text"  name="phone" onChange={this.handlechange} value={this.state.phone} placeholder=""/>

    <label for="jobtitle" >Applying for job</label>
    <select  name="jobTitle" value={this.state.jobTitle}   onChange={this.handlechange}ref={ref => {this._select = ref}} defaultValue={this.state.jobTitle} >
    <option value="select">select</option>
      <option value="FULL Stack Developer">Full Stack Developer</option>
      <option value="Node.js Developer">Node.js Developer</option>
      <option value="Front-End Developer">Front End Developer"</option>
      <option value="MEAN Stack Developer">MERN Stack Developer</option>
    </select>
    <span style={{color: "red"}}>{this.state.error}</span><br/>
    <label for="experience">Experience</label>
    <input type="text" id="lname" name="experience" value={this.state.experience}onChange={this.handlechange} placeholder="Exprience(2 years,3 months)"/>
    <label for="technical skills">Technical Skills</label><br/>
    <textarea  class="cmts"value={this.state.skills} onChange={this.handlechange} name="skills"/><br/>
    
    <input type="submit" value="Submit Application"/>
   
    
  </form>
            </div>
        );
    }
}

export default Form;