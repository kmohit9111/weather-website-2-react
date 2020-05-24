import React ,{Component} from 'react';
import Main from './components/main'
import store from './store/store'
import {Provider} from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>Weather App </h1>
          <Main />
        
        </div>
      </Provider>
    );
  }
}

export default App;