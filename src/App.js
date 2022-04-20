import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import firebase from './firebaseConfig'

import ScrollToTop from './ScrollToTop'
import AboutUs from "./pages/AboutUs"
import Home from './pages/Home'
import Jobs from "./pages/Jobs"
import Careers from "./pages/Careers"
import Contact from "./pages/Contact"
import JobDetails from "./pages/JobDetails"

import {user, loggedIn, isVerified} from './recoil/atoms'
import {useRecoilState} from 'recoil'
import { VerifiedUser } from "@material-ui/icons";
import SmartAchivers from "./pages/SmartAchivers";
import Pgpli from "./pages/Pgpli";

function App() {

  const auth = firebase.auth()
  const [userData, setUserData] = useRecoilState(user);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loggedIn)
  const [verified, setVerified] = useRecoilState(isVerified)

  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if(u) {
        setIsLoggedIn(true)
        setUserData(u)
        console.log(`USER LOGGED IN`)
        if(u.emailVerified) {
          setVerified(true)
        }
        else {
          setVerified(false)
        }
      }
      else {
        setIsLoggedIn(false)
        setUserData([])
        console.log('NO USER')
      }
    })
  }, [])

  console.log(userData)

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Route path = "/" exact component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/jobs" exact component={Jobs} />
        <Route path="/jobs/:id" component={JobDetails} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        <Route path="/smart-achivers" component={SmartAchivers} />
        <Route path="/PGPLI" component={Pgpli} />
      </div>
    </Router>
  );
}

export default(App);
