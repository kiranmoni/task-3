import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav(){
    return(
    <div className="card-view">
        <div className="card-v">
        <div className="card">
         <Link to='/M21'><li>M21</li></Link>
         </div>
         <div className="card">
         <Link to='/M30'><li>M30</li></Link>
       </div>
       <div className="card">
       <Link to='/M31'><li>M31</li></Link>
       </div>
       <h4>Samsung</h4>
       </div>
       <div className="card-v">
      <div className="card">
      <Link to='/Note8'><li>Note8</li></Link>
      </div>
      <div className="card">
      <Link to='/Note9'><li>Note9</li></Link>
      </div>
      <div className="card">
      <Link to='/Note9Pro'><li>Note9Pro</li></Link>
      </div>
      <h4>MI</h4>
      </div>
      <div className="card-v">
      <div className="card">
      <Link to='/Iphone6s'><li>Iphone6s</li></Link>
      </div>
      <div className="card">
      <Link to='/Iphone7'><li>Iphone7</li></Link>
      </div>
      <div className="card">
      <Link to={{pathname:'/Iphone8'}}><li>Iphone8</li></Link>
      </div>
      <h4>Apple</h4>
      </div>


    </div>
    )
    
}
export default Nav;