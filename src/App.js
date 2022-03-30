import './App.css';

import {Component} from "react";

import Header from './header'
import AppBody from './AppBody'

// let openRequest = indexedDB.open("test", 1);
// let db = openRequest.result;
// openRequest.onupgradeneeded = function () {
//
// };
//
// openRequest.error = function () {
//     console.log('error')
// };
//
// openRequest.onsuccess = function () {
//
//
//     db.onversionchange = function () {
//         db.close();
//         alert("База данных устарела, пожалуста, перезагрузите страницу.")
//     };
// }
//
// openRequest.onblocked = function() {
//
// }
// db.createObjectStore("base", ["autoIncrement"]);
// let transaction = db.transaction('reviewsArr');
// // let reviewsArr = transaction.objectStore('reviewsArr');

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
