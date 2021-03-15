import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import logo from './index.png';
import axios from 'axios';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});


export default class App22 extends Component {
     handleChange = (name) => (event) => {
        this.setState({ [name]: event.target.value });
      };

         
    
    geteless(array){
      alert(array)
      this.xy=array;
      alert("this.xy"+this.xy)
  }
    
  clickBtn = (event) => {
    event.preventDefault();
   console.log(this.state);
  }
  clickBtn1 = (event) => {
    event.preventDefault();
    window.location.replace('/loginform');
  }
 
  
  constructor() {
    
    super();
    
    this.state = {
        name: "",
            rollnumber: "",
            section: "",
            items:[]
            
    };
  axios.get('http://localhost:3001/api/getele').then(response=>{
    const xy =response.data
    this.setState({name:"",rollnumber:"",section:"",items:xy})})
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const itemss = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items:itemss
      
    });
  }
  
  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  
  render() {
    
    return (
        <div class ="out0">
        <button type="" onClick={this.clickBtn1} className="btn"><ArrowLeftCircleFill color="royalblue" class="hover:bg-gray-100" size={40}></ArrowLeftCircleFill></button>


<div class="out">

<img src={logo} className="rounded mx-auto d-block" style={{height:'25%',width:'25%'}}/>
<br/>
<br/>

<form>

<h3 className="text-center font-weight-bold font-size:1.5em" class="heading1">Students Elective Selection</h3>

<div className="form-group">
  <label>Name</label>
  <input type="text" name="name" onChange={this.handleChange("name")} className="form-control" placeholder="Enter your name" />
</div>

<div className="form-group">
  <label>Roll Number</label>
  <input type="text" name="rollnumber" onChange={this.handleChange("rollnumber")} className="form-control" placeholder="Enter your roll number" />
</div>

<div className="form-group">
  <label>Section</label>
  <input type="text" name="section" onChange={this.handleChange("section")} className="form-control" placeholder="Enter your section" />
</div>



<div className="form-group">
  <label>Choice</label>
  <DragDropContext onDragEnd={this.onDragEnd}>
    <Droppable droppableId="droppable">
    {(provided, snapshot) => (
    <div
    {...provided.droppableProps}
    ref={provided.innerRef}
    >
    {this.state.items.map((item,index) => (
      <Draggable key={item.id} draggableId={item.content} index={index}>
      {(provided, snapshot) => (
      <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={getItemStyle(
          snapshot.isDragging,
          provided.draggableProps.style
        )}
      ><p class="bg-white-100">{item.content}</p>
      
      </div>
    )}
    </Draggable>
  ))}
  {provided.placeholder}
  </div>
  )}
  </Droppable>
  </DragDropContext>
</div>



<button type="submit" onClick={this.clickBtn} className="btn btn-info btn-lg btn-block">Submit</button>



</form>
</div>
</div>

    );
  
  }

}


