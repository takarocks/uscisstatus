//import logo from './logo.png';
import React from 'react';
import './App.css';
import {withAuthenticator} from '@aws-amplify/ui-react';

import '@aws-amplify/ui-react/styles.css';

import Cases from "./components/Cases";
import Navbar from "./components/Navbar";

function App({signOut, user}) {

  return (
    <div className="App">

      <Navbar user={user} signOut={signOut}/>
      <Cases user={user}/>

    </div>
  );
}


export default withAuthenticator(App);