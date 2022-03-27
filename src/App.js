import './App.css';

import {Component} from "react";

import Header from './header'
import AppBody from './AppBody'


class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <AppBody />


        </div>
    )
  }
}

export default App;
