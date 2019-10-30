import React ,{Component} from 'react'
import {Navbar, Nav} from 'react-bootstrap' 
import { Switch, Route,Link  ,Redirect} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import { connect } from "react-redux"

import './App.css'
import Home from './components/home'
import Login from './components/login' 
import Logout from './components/logout' 
import EmailLogin from './components/email_login'
import Signup from './components/signup'
import Email from './components/email'
import About from './components/about'
import Events from './components/events'
import Explore from './components/Explore' 
import Search from './components/search' 
import Notification from './components/Notification' 
import Cooking from './components/cooking'
import Pitch from './components/pitch'
import editEvent from './components/editEvent'
import editPitch from './components/editPitch'
import editMeal from './components/editMeal'
import editUser from './components/editUser'

import createCook from './components/createCook' 
import createEvent from './components/createEvent' 
import createPitch from './components/createPitch' 

import eventSingle from './components/eventsingle' 

import admin from './components/admin/admin'

class App extends Component{

  render(){
  
   
    return(
      <Provider store={store}>
      <div className="p-1" style={{backgroundColor:"red"}} id="page-top"   >
        <div class="event-list">
        <Navbar bg="white" expand="lg" className="b-bottom">
  <Navbar.Brand >
   
   <img src="img/logo.jpg"  style={{height: "50px"}}/>
    </Navbar.Brand>

                   <input  type="text" className="search__input search" placeholder="Search"/>
               
         
  

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
 
          <Nav.Link   ><Link className=" p-1 m-1 red-color " to={'/'} >Home</Link></Nav.Link>
      
          <Nav.Link ><Link className=" p-1 m-1 red-color" to={'/Events'} >MyEvents</Link></Nav.Link>
          <Nav.Link  ><Link className=" p-1 m-1 text-dark" to={'/Cooking'} > HomeCooking</Link></Nav.Link> 
          <Nav.Link ><Link  className=" p-1 m-1 text-warning" to={'/Pitch'} >PitchPlace</Link></Nav.Link>
          <Nav.Link  ><Link className=" p-1 m-1 black-color" to={'/About'} >About</Link></Nav.Link>

       { this.props.auth.isAuthenticated  ?
             <Nav.Link ><Link   className=" p-1 m-1 black-color" to={'/Logout'} >Logout</Link></Nav.Link>
          :
          <Nav.Link ><Link   className=" p-1 m-1 black-color" to={'/Login'} >Login</Link></Nav.Link>
  
         }
           
          <Nav.Link  ><Link  className=" p-1 m-1 black-color" to={'/Signup'} >Signup</Link></Nav.Link>

    
    </Nav>
    
  </Navbar.Collapse>
</Navbar> 
<div>

</div>


        <Switch>
          <Route exact path='/' component ={Home}/>
          <Route exact path='/Login' component ={Login}/>
          <Route exact path='/Logout' component ={Logout}/>
          <Route exact path='/EmailLogin' component ={EmailLogin}/>
          <Route exact path='/Signup' component ={Signup}/>
          <Route exact path='/Email' component ={Email}/>
          <Route exact path='/About' component ={About}/>

          <Route exact path='/Events' component ={Events}/>
          <Route exact path='/Explore' component ={Explore}/>
          <Route exact path='/Search' component ={Search}/>
          <Route exact path='/Notification' component ={Notification}/>
          <Route exact path='/Cooking' component ={Cooking}/>
        
          <Route exact path='/Pitch' component ={Pitch}/>
     
          <Route exact path='/createCook' component ={createCook}/>
          <Route exact path='/createEvent' component ={createEvent}/>
          <Route exact path='/createPitch' component ={createPitch}/>

          <Route exact path='/eventSingle/:id' component ={eventSingle}/>

          <Route exact path='/editEvent/:id' component={ editEvent } />

          <Route exact path='/editMeal/:id' component={ editMeal } />

          <Route exact path='/editPitch/:id' component={ editPitch } />

          <Route exact path='/editUser/:id' component={ editUser } />
         
          <Route exact path='/admin' component={ admin } />
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

  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>



      </div>
      </div>
</Provider>
    )
  }
}
const mapStateToProps = state => ({
  auth: state.auth,

})

export default connect(mapStateToProps)(App)
