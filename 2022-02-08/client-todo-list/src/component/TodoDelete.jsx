import React, { Component } from "react";
import Axios from "axios";

class TodoDelete extends Component {

  state = {
        id:this.props.match.params.id,
        todoItem: 
          { todoTableId: 1, title: "Job C", isComplete: true },  
      };

  async componentDidMount() {
    var result = await Axios.get(`http://localhost:8000/todo/item/${this.props.match.params.id}`);
    this.state.todoItem = result.data;
    console.log(result);
    this.setState({});
  }

  okbtnClick = async() =>{
      var result = await Axios.delete(`http://localhost:8000/todo/delete/${this.props.match.params.id}`,this.state.todoItem)
      window.location = "/Todo/Index";
      console.log(result);
  }

  render() {
    return (
      <div className="container">
        <h1>待辦事項清單 - 刪除</h1>

        <hr />
        <div>
          <dl className="row">
            <dt className="col-sm-2">項目名稱</dt>
            <dd className="col-sm-10" >
                {this.state.todoItem.title}
            </dd>
            <dt className="col-sm-2">是否已完工</dt>
            <dd className="col-sm-10">
              <input
                className="check-box"
                disabled="disabled"
                type="checkbox"
                checked={this.state.todoItem.isComplete}
              />
            </dd>
          </dl>

          <hr />
          <h3>確定要刪除這筆資料嗎?</h3>

          <form action="/Todo/Delete" method="post">
            <input type="hidden"  name="TodoItemId" value="1" />
            <input
              type="button" onClick={this.okbtnClick}
              value="確定"
              className="btn btn-outline-danger"
            />{" "}
            |
            <a href="/Todo/Index" className="btn btn-outline-info">
              取消
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoDelete;
