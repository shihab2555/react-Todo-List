import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'



class App extends Component {

  state = {
    items:[],
    id:uuidv4(),
    item:'',
    editItem:false
  };
// Handle the typing method of item
  handleChange = (e) =>{
    this.setState({
      item: e.target.value
    });
  };

  //Handle the submit button for new item
  handleSubmit = (e) =>{
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: '',
      id: uuidv4(),
      editItem: false
    }, ()=> console.log(this.state))
  };

// Handle the clear list button for all items
  clearList = () =>{
    this.setState ({
      items: []
    });
  };

 // Handle the delete button for each item
  handleDelete = (id) =>{
    const filterdItems = this.state.items.filter(item =>
      item.id!==id);
      
      this.setState({
        items: filterdItems
      });
  };

  // Handle the edit button for each item
  handleEdit = (id) =>{
    const filterdItems = this.state.items.filter(item =>
      item.id!=id);
      const selectedItem = this.state.items.find(item=>
        item.id === id);
      this.setState({
        items: filterdItems,
        item: selectedItem.title,
        id:id,
        editItem: true
      });
  };

  render() {
    console.log(this.state)
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalise text-center">Todo Input</h3>
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


