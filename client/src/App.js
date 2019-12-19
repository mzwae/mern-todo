import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import TodoList from './components/TodoList';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';


import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducer from './reducers/itemReducer'
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  // const store = createStore(reducer);
  render() {
    return (
	    <Provider sotre={store}>
		      <div className="App">
		        <AppNavbar/>

            <Container>
              <ItemModal/>
              <TodoList/>
            </Container>

		      </div>
	    </Provider>
    );
  }
}

export default App;
