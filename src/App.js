import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import AddTodo from './components/todo/AddTodo';
import Todos from './components/todo/Todos';

import About from './components/pages/About';

import uuid from 'uuid';

import './App.css';



class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Morning prayer',
        completed: false
      },
      {
        id: 2,
        title: 'Intensive aerobic excercise',
        completed: false
      },
      {
        id: 3,
        title: 'Start daily work',
        completed: false
      },
    ]
  }

  markComplete = (id) => {     
    let todosCompile = this.state.todos.map(todo => {
      if(todo.id===id) todo.completed = !todo.completed; 
      return todo;
    });
    this.setState({todos: todosCompile});
  }

  delTodo = (id, t) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }
    
  addTodo = (e) => { 
    const newTodo = {
      id: uuid.v4(),
      title: e,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render(){     
    return (     
        <Router>
          <div className="App">
            <div className="container">
              <Header />
              
              <Route exact path="/" render={ props => (
                    <React.Fragment>
                      <AddTodo addTodo={this.addTodo} />
                      <Todos 
                        todos={this.state.todos} 
                        markComplete={this.markComplete} 
                        delTodo={this.delTodo}
                      />       
                    </React.Fragment> 
                )}
              />            

              <Route path="/about" component={About}></Route>
            </div>
          </div>    
        </Router>   
    );
  }
  
}

export default App;
