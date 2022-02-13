import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import TodoIndex from "./component/TodoIndex";
//import TodoEdit from "./component/TodoEdit";
import TodoEdit from './component/TodoEdit_select';
//import TodoEdit from './component/TodoEdit_radio';
import TodoCreate from "./component/TodoCreate";
import TodoDelete from "./component/TodoDelete";

class App extends Component{
  state ={ }
  render() {
    return (
       <BrowserRouter>
          <Switch>
            <Route path="/" component= {TodoIndex} exact/>
            <Route path="/Todo/Index" component= {TodoIndex} />
            <Route path="/Todo/Edit/:id" component= {TodoEdit}/>
            <Route path="/Todo/Create" component= {TodoCreate}/>
            <Route path="/Todo/Delete/:id" component= {TodoDelete}/>
          </Switch>
       </BrowserRouter>
     
    );
  }
}

export default App;