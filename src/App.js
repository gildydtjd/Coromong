import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Footer from './footer/Footer';
import Body from './body/Body';
import Header from './header/Header';
import Notice from './body/Notice';
import News from './body/News';
import Hospital from './body/Hospital';
import Mask from './body/Mask';
import Infection from './body/Infection';


function App() {
  return (
    <div className="App">
      <Header/>
                <Route exact path="/" component={Body}/>
                <Route path="/Home" component={Body}/>
                <Route path="/Notice" component={Notice}/>
                <Route path="/Infection" component={Infection}/>
                <Route path="/News" component={News}/>
                <Route path="/Hospital" component={Hospital}/>
                <Route path="/Mask" component={Mask}/>
      <Footer/>
    </div>
  );
}

export default App;
