import React, { Component } from "react";
import logo from './index.png';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';
export default class fviewstudentelective extends Component {
   clickBtn1 = (event) => {
    event.preventDefault();
    window.location.replace('/deptdashboard');
    }
    constructor(){

        super();
   
        
    axios.get('http://localhost:3001/api/getlist33').then(response=>{
    
    
    var details = response.data;
    var element;
    
    element=<table class="table table-bordered ">
    <tr class="table-primary">
    <th>Name</th>
    <th>Roll Number</th>
    <th>Elective Name</th>
    </tr>
    {details.map((item) => (<tr>
      
      <td>{JSON.parse(JSON.stringify(item.content[0]))}</td>
      <td>{JSON.parse(JSON.stringify(item.content[1]))}</td>
      <td>{JSON.parse(JSON.stringify(item.content[2]))}</td>
      
      </tr>

    ))}
    </table>
    
  ReactDOM.render(element, document.getElementById('data'));
    

   
    
    
    })



  }
  
    
    
    render() {

        return (
            
            
              <div class="out222">
            
            <img class="img12"src="https://image3.mouthshut.com/images/Restaurant/Photo/-73020_62102.jpg"></img>
              <div className="out" style={{height:"auto",width:"750px"}}>
              <button type="" onClick={this.clickBtn1} className="btn"><ArrowLeftCircleFill color="greenyellow" class="hover:bg-gray-100" size={40}></ArrowLeftCircleFill></button>
                <img src={logo} className="rounded mx-auto d-block" style={{height:'25%',width:'25%'}}/>

                <br/>
                <br/>
            
            <br></br>
            
           
            <div id="data"></div>
            
            
            </div>
            </div>

        );
        
    
}}