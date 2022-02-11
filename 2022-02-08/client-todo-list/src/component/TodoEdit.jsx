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

  todoItemCheckBoxChange = (e) => {
    this.state.todoItem.isComplete = e.target.checked;
    this.setState({});
    console.log(e.target.checked);
  };

  okbtnClick = async () => {
    //console.log(this.state.todoItem)
    var result = await Axios.put(
      "http://localhost:8000/todo/item",
      this.state.todoItem
    );
    window.location = "/Todo/Index";
    console.log(result);
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
                <label className="control-label" htmlFor="Name">
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
              <div className="form-group form-check">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="IsComplete"
                    name="IsComplete"
                    onChange={this.todoItemCheckBoxChange}
                    checked={this.state.todoItem.isComplete}
                    value="true"
                  />{" "}
                  是否已完工
                </label>
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
