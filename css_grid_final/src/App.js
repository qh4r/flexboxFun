
import React, {Component} from 'react';

import './App.sass';
import stylesModule from './Module.css';

function compute(a : number ,b : number) {
  return a * b;
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="grid green">
          <div className="box">
            {compute(2,"5")}
          </div>
          <div className="box">

          </div>
          <div className="box">

          </div>
          <div className="box text-red" style={{order: -1}}>
            moved
          </div>
          <div className="box wide">

          </div>
          <div className="box">

          </div>
          <div className="box span-2 wide high">
            spanned 2/2
          </div>
        </div>
        <div className="grid blue">
          {/*order gdy ustalimy na sztywno kolumny w ktorych wystepuje obiekt nie decyduje o kolejnosci, a
           decyduje o tym kktory element bedzie wyżej (z-index?)*/}
          <div className="box blue-1 wide high pink" style={{order: 5}}>

          </div>
          <div className="box blue-2 wide high" style={{order: 6}}>

          </div>
          <div className="box wide high orange" style={{order: 6}}>

          </div>
        </div>
        <div className="grid red">
          <div name="header" className="box wide high">
            head
          </div>
          <div name="main" className="box wide high">
            main
          </div>
          <div name="side-l" className="box wide high">
            left
          </div>
          <div name="side-r" className="box wide high">
            right
          </div>
          <div name="footer" className="box wide">
            foot
          </div>
        </div>
        {/*span jesli jest w ostatniej kolumnie a wyszedl by w kolejny rzad przenoszony jest caly do nowego rzedu*/}
        <div className="grid purple">
          <div className="box wide orange">

          </div>
          <div className="box wide span-2">

          </div>
          <div className="box wide span-2 pink">

          </div>
          <div className="box wide orange">

          </div>
          <div className="box wide span-2">

          </div>
        </div>
      </div>
    )
  }
}

export default App;
