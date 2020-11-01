import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Route,BrowserRouter as Router } from 'react-router-dom';
import loginComponent from './login/login';
import signupComponent from './signup/signup';
import dashboardComponent from './dashboard/dashboard';
import firebase from 'firebase/app';


require("firebase/firestore");
firebase.initializeApp({
  apiKey: "AIzaSyCCnxItOzY_fBxW1VDiRFd3r5XdBLlRKfM",
  authDomain: "chatapp-7bddb.firebaseapp.com",
  databaseURL: "https://chatapp-7bddb.firebaseio.com",
  projectId: "chatapp-7bddb",
  storageBucket: "chatapp-7bddb.appspot.com",
  messagingSenderId: "1008472640668",
  appId: "1:1008472640668:web:9a0c5e32a4548778d23159",
  measurementId: "G-9GHRRTJ41X"
})
const routing=(
  <Router>
    <div id="routing-container">
      <Route path='/login' component={loginComponent}>

      </Route>
      <Route path="/signup" component={signupComponent}></Route>
      <Route path="/dashboard" component={dashboardComponent}></Route>
    </div>
  </Router>
)

ReactDOM.render(

    routing
 ,
  document.getElementById('root')
);



