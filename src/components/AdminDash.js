import React, { Component } from 'react';
import moment from 'moment'
 import { Modal, Button } from 'bootstrap-4-react';

import axios from "axios"

class AdminDash extends Component {
    constructor()
    {
        super()
        this.state={
            formdata:[],
            userfilter:[],
            select:[],
            Titles:""

        }
    }
    handleDetail=(title)=>
    { 
        
            const userfilter= this.state.formdata.filter((ele)=>{return ele.jobTitle==title})
            this.setState({userfilter})
         
       
     }
     
   

    componentDidMount() {
        axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
            .then((response) => {
                const formdata= response.data
                this.setState({formdata})
             
            })
            .catch((err) => {
                alert(err.form)
            })
    }
    selected=(id)=>{
        axios.get(`http://dct-application-form.herokuapp.com/users/application-form/${id}`)
        .then((response) => {
           const select =response.data
           this.setState({select})
           console.log(select)
         
        })
        .catch((err) => {
            alert(err.form)
        })
    }
    handleStatus=(id ,status)=>{
        
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${id}`,{status})
        .then((response) => {
           const data =response.data
           console.log(data)
           this.setState(prevState=>({
               select:prevState.select.map(ele=>{
                   if(ele.id==data.id)
                   {
                       return{...data}
                       console.log(data)
                   }
                   else{
                       return{...ele}
                   }
               })
           }))
          
         
        })
        .catch((err) => {
            alert(err.form)
        })   
    }

    
    render() {
        
        return (
            <div className="div">
              <h1>AdminDash</h1> 
       <button class="button" onClick={()=>{this.handleDetail("Front-End Developer")}}>Front-End Developer</button>
       <button class="button"onClick={()=>{this.handleDetail("FULL Stack Developer")}}>FULL Stack Developer</button>
       <button class="button"onClick={()=>{this.handleDetail("Node.js Developer")}}>Node js Developer</button>
       <button class="button"onClick={()=>{this.handleDetail("MEAN Stack Developer")}}>MEAN Stack Developer</button>
        
     {this.state.userfilter.length>0 &&<table>
        <thead>
             <tr>
                 <th>Name</th>
                 <th>Technical skills</th>
                 <th>Experience</th>
                 <th>Applied Date</th>
                 <th>View Details</th>
                 <th>Update Application Status</th>
             </tr>
        </thead>
        <tbody>
            {
                this.state.userfilter.map(ele=>{
                    return(
                        <tr>
                           <td>{ele.name}</td> 
                          <td>{ele.skills}</td>
                          <td>{ele.experience}</td>
                          <td>{moment(ele.createdAt).format("L")}</td>
                          <td> <Button primary data-toggle="modal" data-target="#exampleModal3" onClick={()=>{this.selected(ele._id)}}>View Deatail</Button></td>
                          <td>
                              {
                                  ele.status==='applied'&&(
                                      <div>
                                          <Button success onClick={()=>{this.handleStatus(ele._id,'shortlisted')}}>Shortlisted</Button>
                                          <Button danger onClick={()=>{this.handleStatus(ele._id,'rejected')}}> Rejected</Button>
                                      </div>
                                   
                                  )
                                
                              }
                              {
                                  ele.status=="shortlisted" &&<Button success>shortlisted</Button>
                              }
                              {
                                   ele.status=="rejected" &&<Button danger>rejected</Button>
                              }
                          </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>}
    
    <Modal id="exampleModal3" fade>
          <Modal.Dialog centered>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>{this.state.select.name} Profile</Modal.Title>
                <Modal.Close>
                  <span aria-hidden="true">&times;</span>
                </Modal.Close>
              </Modal.Header>
              <Modal.Body>
            
              
                <h3> contct number: {this.state.select.phone}</h3>  
                <h3> Email:{this.state.select.email}</h3>  
                <h3> skills:<li>{this.state.select.skills}</li></h3>  
                 <h3>Experience:{this.state.select.experience}</h3> 

              
       
              </Modal.Body>
              <Modal.Footer>
                <Button secondary data-dismiss="modal">Close</Button>
              
              </Modal.Footer>
            </Modal.Content>
          </Modal.Dialog>
        </Modal>

    
       </div>
        )
       
    }
}

export default AdminDash;