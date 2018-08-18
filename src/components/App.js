import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Search from '../containers/Search'
import ArtistView from '../containers/ArtistView'

const App =  ()=> (
  <div className="row">
    <div className="col-12">
      <h1>
        BandsInTown API
      </h1>
    </div>
    <div className="col-12">
      <Search/>
    </div>
    <div className="col-12">
      <ArtistView/>
    </div>
  </div>
);

export default App;
