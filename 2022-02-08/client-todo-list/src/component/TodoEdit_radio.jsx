import React, { Component } from "react";
import Axios from "axios";

class TodoEdit extends Component {
  state = {
    todoItem: { todoTableId: 1, title: "Job C", isComplete: true },
  };

  async componentDidMount() {
    //var url = "http://localhost:8000/todo/item/"+ this.props.match.params.id;
    var url = `http://localhost:8000/todo/item/${this.props.match.params.id}`;
    var result = await Axios.get(url);
    this.state.todoItem = result.data;
    console.log(result);
    this.setState({});
  }

  todoItemTitleChange = (e) => {
    this.state.todoItem.title = e.target.value;
    this.setState({});
    console.log(e.target.value);
  };

  RadioChangeToTrue = (e) => {
    this.state.todoItem.isComplete = true;
    this.setState({});
    console.log(e.target.value);
  };

  RadioChangeToFalse = (e) => {
    this.state.todoItem.isComplete = false;
    this.setState({});
    console.log(e.target.value);
  };

  okbtnClick = async () => {
 
    console.log(this.state.todoItem);
     var result = await Axios.put(
       "http://localhost:8000/todo/item",
       this.state.todoItem
     );
     window.location = "/Todo/Index";
    // console.log(result);
  };

  render() {
    return (
      <div className="container">
        <h1>待辦事項清單 - 修改</h1>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <form action="/Todo/Edit" method="post">
              <input
                type="hidden"
                id="TodoItemId"
                name="TodoItemId"
                value="1"
              />
              <div className="form-group">
                <label className="control-label" htmlhtmlFor="Name">
                  項目名稱
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="Name"
                  name="Name"
                  value={this.state.todoItem.title}
                  onChange={this.todoItemTitleChange}
                />
              </div>

              <div className="form-group row">
                <label className="col-4 col-form-label" htmlhtmlFor="isComplete">
                  是否已完工
                </label>
                <div className="col-8">
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      name="groupA"
                      id="radio_0"
                      type="radio"
                      className="custom-control-input"
                      value="yes"
                      checked= {this.state.todoItem.isComplete  ? "checked ": ""}
                      onChange={this.RadioChangeToTrue}
                    />
                    <label htmlFor="radio_0" className="custom-control-label">
                      已完成
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      name="groupA"
                      id="radio_1"
                      type="radio"
                      className="custom-control-input"
                      value="no"
                      checked= {this.state.todoItem.isComplete  ? "": "checked"}
                      onChange={this.RadioChangeToFalse}
                    />
                    <label htmlFor="radio_1" className="custom-control-label">
                      未完成
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <input
                  type="button"
                  onClick={this.okbtnClick}
                  value="確定"
                  className="btn btn-outline-primary"
                />{" "}
                |
                <a href="/Todo/Index" className="btn btn-outline-info">
                  取消
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default TodoEdit;
