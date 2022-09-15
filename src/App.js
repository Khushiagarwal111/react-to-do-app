import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
  margin-left:5px;
`;

const Button=styled.button`
  ${'' /* background-color: green; */}
  font-size: 18px;
  border-radius: 3px;
  color: white;
  min-width: 100px;
  border: none;
  padding: 6.2px 2px;
  margin-left:5px;
  background-color: ${props => props.bg === "Red" ? "Red" : "Green"};
`;
const H1= styled.h1`
color: blue;
padding: 0px;
font:30px;

`;
const Input = styled.input`
color:grey;
padding:10px 50px;
border: 1px solid blue;
background-color:aliceblue;

`;

const InputUpdate = styled.input`
color:grey;
font-size:15px;
padding:5px 10px;
margin:5px 5px;
outline:transparent;
width:10%;
border-bottom: 2px solid blue;
background-color:aliceblue;

`;


const Container=styled.div`

  margin:20px 20px 0px 40px;
  background-image:linear-gradient(to right,skyblue, pink, beige,pink, skyblue);
  padding:20px 20px;
  ${'' /* padding-bottom:30px; */}
`;

const Div = styled.div`
color:purple;
${'' /* border:2px solid violet; */}
padding:2px 2px;

`;

class App extends React.Component {


   constructor(){
    super();
    this.state = { 
    taskName:"",
    toDoList:[]
   }
   }

   getTaskName=(e)=>{
    this.setState({
      taskName:e.target.value
    },()=>console.log(this.state))
   }
   addItemToList=()=>{
    //day2 // making a new array here 
    let toDoListCopy=[...this.state.toDoList]
    toDoListCopy.push(this.state.taskName)
    this.setState({
    taskName:'',
    toDoList:toDoListCopy
})
   };
deleteItem=(index)=>{
  let todoListsCopy2=[...this.state.toDoList]
  todoListsCopy2.splice(index,1)
  this.setState({

    toDoList: todoListsCopy2
  })

}
//array.splice(index, harmany, item1, ...., itemX)
updateItem = (e, index) =>{
    let todoListsCopy3=[...this.state.toDoList]
    todoListsCopy3.splice(index,1, e.target.value)
    this.setState({
      toDoList: todoListsCopy3
    })
}

// updateItem
  render() { 
    console.log("render called");
    return (

   
    <Container>
       <H1>To-Do List</H1>
    <Input 
    
      type="text"
      onChange={this.getTaskName}
      value={this.state.taskName}
      placeholder="Enter task....." 

      /> 
      <Button bg="Red" onClick={this.addItemToList}>Add to list</Button>
      {/* <p>show state:{JSON.stringify(this.state)}</p> */}

      {this.state.toDoList.map((task, index) =>
      <Div> 
        <span>{index+1}. {task}  </span>
        <InputUpdate 
          placeholder="type here to update item"
          onChange={(e)=>this.updateItem(e,index)}

          />
        <Button bg="green" onClick={()=>this.deleteItem(index)}>Delete Item</Button>
      </Div>
      )
      
      }
 
    </Container>
    );
  }
}
 
export default App;