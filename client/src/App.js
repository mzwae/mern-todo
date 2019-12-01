import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import TodoList from './components/TodoList';
import ItemModal from './components/ItemModal';


import { Provider } from 'react-redux';
import store './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
	    <Provider sotre={store}>
		      <div className="App">
		        <AppNavbar/>
            <ItemModal/>
		        <TodoList/>
		      </div>
	    </Provider>
    );
  }
}

export default App;
