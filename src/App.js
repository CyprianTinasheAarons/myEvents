import React ,{Component} from 'react'
import {Navbar, Nav} from 'react-bootstrap' 
import { Switch, Route,Link} from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Login from './components/login' 
import EmailLogin from './components/email_login'
import Signup from './components/signup'
import Email from './components/email'
import About from './components/about'

import Events from './components/events'
import eventsExplore from './components/eventsExplore' 
import eventsNotification from './components/eventsNotification' 
import Cooking from './components/cooking'
import cookingExplore from './components/cookingExplore' 
import cookingNotification from './components/cookingNotification'  
import Pitch from './components/pitch'
import pitchExplore from './components/pitchExplore' 
import pitchNotification from './components/pitchNotification'  


import createCook from './components/createCook' 
import createEvent from './components/createEvent' 
import createPitch from './components/createPitch' 

import singleEvent from './components/singleEvent' 


class App extends Component{
  render(){
    return(
      <div className="p-1" style={{backgroundColor:"red"}}>
        
        <Navbar bg="white" expand="lg" className="b-bottom">
  <Navbar.Brand >
   <p style={{fontSize:"15px"}}>
   MyEvents
   </p>
    </Navbar.Brand>

  <form action="#" className="search">
                    <input type="text" className="search__input" placeholder="Search"/>
                   
                </form>
  

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
 
          <Nav.Link   ><Link className=" p-1 m-1 red-color " to={'/'} >Home</Link></Nav.Link>
          <Nav.Link ><Link className=" p-1 m-1 red-color" to={'/Events'} >MyEvents</Link></Nav.Link>
          <Nav.Link  ><Link className=" p-1 m-1 red-color" to={'/Cooking'} > HomeCooking</Link></Nav.Link> 
          <Nav.Link ><Link  className=" p-1 m-1 red-color" to={'/Pitch'} >PitchPlace</Link></Nav.Link>
          <Nav.Link  ><Link className=" p-1 m-1 black-color" to={'/About'} >About</Link></Nav.Link>
          <Nav.Link ><Link   className=" p-1 m-1 black-color" to={'/Login'} >Login</Link></Nav.Link>
          <Nav.Link  ><Link  className=" p-1 m-1 black-color" to={'/Signup'} >Signup</Link></Nav.Link>

    
    </Nav>
    
  </Navbar.Collapse>
</Navbar>


        <Switch>
          <Route exact path='/' component ={Home}/>
          <Route exact path='/Login' component ={Login}/>
          <Route exact path='/EmailLogin' component ={EmailLogin}/>
          <Route exact path='/Signup' component ={Signup}/>
          <Route exact path='/Email' component ={Email}/>
          <Route exact path='/About' component ={About}/>

          <Route exact path='/Events' component ={Events}/>
          <Route exact path='/eventsExplore' component ={eventsExplore}/>
          <Route exact path='/eventsNotification' component ={eventsNotification}/>
          <Route exact path='/Cooking' component ={Cooking}/>
          <Route exact path='/cookingExplore' component ={cookingExplore} />
          <Route exact path='/cookingNotification' component ={cookingNotification}/>
          <Route exact path='/Pitch' component ={Pitch}/>
          <Route exact path='/pitchExplore' component ={pitchExplore}/>
          <Route exact path='/pitchNotification' component ={pitchNotification}/>

          <Route exact path='/createCook' component ={createCook}/>
          <Route exact path='/createEvent' component ={createEvent}/>
          <Route exact path='/createPitch' component ={createPitch}/>

          <Route exact path='/singleEvent' component ={singleEvent}/>
         
        </Switch>

        <section  className="Footer bg-white b-top" >

<div className="row">

 
<div className="col-md-10 col-10 m-2 p-1 mx-auto">

<h5 className="text-center" style={{fontSize:"15px"}}>
       MyEvents 2019.
        </h5>

<h5 className="text-center" style={{fontSize:"15px"}}>
       MyEvents is a wholly owned subsidiary of BullionBarsInternational.
        </h5>


</div>


</div>


  </section>


      </div>

    )
  }
}

export default App;
