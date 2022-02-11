import React, { Component } from 'react';
import Axios from 'axios';

class TodoCreate extends Component {
    state = { 
        todoItem: 
          { todoTableId: 1, title: "", isComplete: false },
     } 

    todoItemTitleChange = (e) =>{
        
        this.state.todoItem.title = e.target.value;
        this.setState({});
        console.log(this.state.todoItem.title)
        //console.log(e.target.value);
      }

      todoItemCheckBoxChange = (e) => {
        this.state.todoItem.isComplete = e.target.checked;
        this.setState({});
        console.log(e.target.checked)
      }

    okbtnClick = async() => {
        console.log(this.state.todoItem);
        var result = await Axios.post("http://localhost:8000/todo/create",this.state.todoItem)
        window.location = "/Todo/Index";
        console.log(result);
    }
    render() { 
        return (
            <div className="container">

    <h1>待辦事項清單 - 新增</h1>
    <hr />
    <div className="row">
        <div className="col-md-4">
            <form action="/Todo/Create" method="post">
                
                <div className="form-group">
                    <label className="control-label" htmlFor="Name">項目名稱</label>
                    <input className="form-control" type="text" id="Name" 
                        name="Name" value={this.state.todoItem.title}  onChange={this.todoItemTitleChange}/>
                </div>
                <div className="form-group form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" id="IsComplete" 
                            name="IsComplete" checked={this.state.todoItem.isComplete} onChange={this.todoItemCheckBoxChange}/> 是否已完工
                    </label>
                </div>
                <div className="form-group">
                    <input type="button" onClick={this.okbtnClick} value="確定" className="btn btn-outline-primary" /> | 
                    <a href="/Todo/Index" className="btn btn-outline-info">取消</a>
                </div>
            </form>
        </div>
    </div>


</div>
        );
    }
}
 
export default TodoCreate
