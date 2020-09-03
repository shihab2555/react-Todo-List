import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'



class App extends Component {

  state = {
    item:[{id:1, title:'Wake Up'},
    {id:2, title:'Make Breakfast'}],
    id:uuidv4(),
    item:'',
    editItem:false
  };

  handleChange = (e) =>{console.log("handleChange")};
  handleSubmit = (e) =>{console.log("handleSubmit")};
  clearList = () =>{console.log("ClearList")};

  handleDelete = (id) =>{console.log(`handleDelete $(id)`)};
  handleEdit = (id) =>{console.log(`handleEdit $(id)`)};

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput 
            item={this.state.item} 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
            ></TodoInput>

            <TodoList
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            
            ></TodoList>
          </div>
        </div>
    </div>
    )
  }
}



export default App;


