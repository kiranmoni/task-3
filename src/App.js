import React from 'react';
import './App.css';
import Nav from './Nav';
import M21 from './M21';
import M30 from './M30';
import M31 from './M31';
import Note8 from './Note8';
import Note9 from './Note9';
import Note9Pro from './Note9Pro';
import Iphone6s from './Iphone6s';
import Iphone7 from './Iphone7';
import Iphone8 from './Iphone8';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/M21" component={M21}/>
          <Route path="/M30" component={M30}/>
          <Route path="/M31" component={M31}/>
          <Route path="/Note8" component={Note8}/>
          <Route path="/Note9" component={Note9}/>
          <Route path="/Note9Pro" component={Note9Pro}/>
          <Route path="/Iphone6s" component={Iphone6s}/>
          <Route path="/Iphone7" component={Iphone7}/>
          <Route path="/Iphone8" component={Iphone8}/>

        </Switch>
      </div>
   </Router>
  );
}

export default App;
