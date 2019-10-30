import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import Notifications , {notify} from 'react-notify-toast'
import axios from 'axios'
import TableRow from '../TableRow'
import TableRowUser from '../tableRowUser'
import TableRowMeal from '../tableRowMeal'
import TableRowPitch from '../tableRowPitch'
import {Link} from 'react-router-dom'

export default class Admin extends Component {

    constructor(props){
        super(props)
      }
  
      state = {
          showEvents: false,
          showPitches: false,
          showRecipes: false,
          showUsers: false
        }
      
      showModalEvents = e => {
          this.setState({
            showEvents: !this.state.showEvents
          })
        }

        showModalPitches = e => {
            this.setState({
              showPitches: !this.state.showPitches
            })
          }

          showModalRecipes = e => {
            this.setState({
              showRecipes: !this.state.showRecipes
            })
          }

          showModalUsers = e => {
            this.setState({
              showUsers: !this.state.showUsers
            })
          }
  

    render() {
        return (
            <div className="container-fluid bg-light" >
       
                <div className="">
                    <h5 className=" text-center">Dashboard</h5>
                </div>
                
          <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Events</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">215,000</div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                  <button onClick={e => {
                  this.showModalEvents(e) 
              }} className=" m-1 btn btn-light ">
                  Show Table
              </button>
                </div>
              </div>

            </div>


            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Pitches</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">215,000</div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                  <button onClick={e => {
                  this.showModalPitches(e) 
              }} className=" m-1 btn btn-light ">
                  Show Table
              </button>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Recipes</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">215,000</div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                  <button onClick={e => {
                  this.showModalRecipes(e) 
              }} className=" m-1 btn btn-light ">
                  Show Table
              </button>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-secondary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-secondary text-uppercase mb-1">Users</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">215,000</div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                  <button onClick={e => {
                  this.showModalUsers(e) 
              }} className=" m-1 btn btn-light ">
                  Show Table
              </button>
                </div>
              </div>
            </div>


            </div>
            <EventsTable
              onClose={this.showModalEvents}
               show={this.state.showEvents}>
                   </EventsTable>
                   <PitchesTable
              onClose={this.showModalPitches}
               show={this.state.showPitches}>
                   </PitchesTable>

                   <RecipesTable
              onClose={this.showModalRecipes}
               show={this.state.showRecipes}>
                   </RecipesTable>

                   <UsersTable
              onClose={this.showModalUsers}
               show={this.state.showUsers}>
                   </UsersTable>
 
                </div>
        ) }}

 class EventsTable extends React.Component {
              constructor(props){
                  super(props)
                  this.state = {
                      event: []                    
                  }
              }

              componentDidMount(){
                  axios.get('http://localhost:4000/events')
                      .then(response =>{
                          this.setState({event: response.data})
                      })
                      .catch(function(error){
                          console.log(error)
                      })

              }
              tabRow(){
                  return this.state.event.map(function(object, i){
                      return <TableRow obj={object} key={i} />
                  })
              }



            onClose = e => {
                    this.props.onClose && this.props.onClose(e)
                  }
            
              render() {
                  if (!this.props.show){
                      return null
                  }
                return (
                <div>
                <div>{this.props.children}</div>
                <div>


                <div className="container-fluid">

        
<div className="card shadow mb-4">
  <center>
                    <button
                    onClick = {
                        e => {
                            this.onClose(e)
                        }
                    }
                    >
                        Close
                    </button></center>
  <div className="card-header py-3">
    <h6 className="m-0 font-weight-bold text-primary">Events Table</h6>
  </div>
  <div className="card-body">
    <div className="table-responsive">
      <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Description</th>
            <th>Organizer</th>
            <th>Action</th>
           
          </tr>
        </thead>
   
        <tbody>
         {this.tabRow() }
        </tbody>
      </table>
    </div>
  </div>
</div>

</div>
                </div>
                </div>)
            }
            }


class PitchesTable extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        pitch: []                    
    }
}

componentDidMount(){
    axios.get('http://localhost:4000/pitches')
        .then(response =>{
            this.setState({pitch: response.data})
        })
        .catch(function(error){
            console.log(error)
        })

}
tabRow(){
    return this.state.pitch.map(function(object, i){
        return <TableRowPitch obj={object} key={i} />
    })
}



onClose = e => {
      this.props.onClose && this.props.onClose(e)
    }


    
        render() {
            if (!this.props.show){
                return null
            }
        return (
        <div>
        <div>{this.props.children}</div>
        <div>
      
            <div className="container-fluid">

        
<div className="card shadow mb-4">
  <center>      <button
            onClick = {
                e => {
                    this.onClose(e)
                }
            }
            >
                Close
            </button></center>
  <div className="card-header py-3">
    <h6 className="m-0 font-weight-bold text-primary">Pitches Table</h6>
  </div>
  <div className="card-body">
    <div className="table-responsive">
      <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Owner</th>
            <th>Action</th>
           
          </tr>
        </thead>
   
        <tbody>
         {this.tabRow() }
        </tbody>
      </table>
    </div>
  </div>
</div>

</div>
        </div>
        </div>)
    }
    }

    class RecipesTable extends React.Component {

      constructor(props){
          super(props)
          this.state = {
              meal: []                    
          }
      }
      
      componentDidMount(){
          axios.get('http://localhost:4000/meals')
              .then(response =>{
                  this.setState({meal: response.data})
              })
              .catch(function(error){
                  console.log(error)
              })
      
      }
      tabRow(){
          return this.state.meal.map(function(object, i){
              return <TableRowMeal obj={object} key={i} />
          })
      }

        onClose = e => {
                this.props.onClose && this.props.onClose(e)
              }
        
          render() {
              if (!this.props.show){
                  return null
              }
            return (
            <div>
            <div>{this.props.children}</div>
            <div>
            <div className="container-fluid">

        
<div className="card shadow mb-4">
  <center>      <button
                onClick = {
                    e => {
                        this.onClose(e)
                    }
                }
                >
                    Close
                </button></center>
  <div className="card-header py-3">
    <h6 className="m-0 font-weight-bold text-primary">Recipes Table</h6>
  </div>
  <div className="card-body">
    <div className="table-responsive">
      <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Chef</th>
            <th>Action</th>
           
          </tr>
        </thead>
   
        <tbody>
         {this.tabRow() }
        </tbody>
      </table>
    </div>
  </div>
</div>

</div>
          
            </div>
            </div>)
        }
        }


        class UsersTable extends React.Component {


            constructor(props){
              super(props)
              this.state = {
                  user: []                    
              }
          }
          
          componentDidMount(){
              axios.get('http://localhost:4000/users')
                  .then(response =>{
                      this.setState({user: response.data})
                  })
                  .catch(function(error){
                      console.log(error)
                  })
          
          }
          tabRow(){
              return this.state.user.map(function(object, i){
                  return <TableRowUser obj={object} key={i} />
              })
          }

            onClose = e => {
                    this.props.onClose && this.props.onClose(e)
                  }
            
              render() {
                  if (!this.props.show){
                      return null
                  }
                return (
                <div>
                <div>{this.props.children}</div>
                <div>
                <div className="container-fluid">    
<div className="card shadow mb-4">

  <div className="card-header py-3">
<center>        <button
                    onClick = {
                        e => {
                            this.onClose(e)
                        }
                    }
                    >
                        Close
                    </button></center>
    <h6 className="m-0 font-weight-bold text-primary">Users Table</h6>
  </div>
  <div className="card-body">
    <div className="table-responsive">
      <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
   
        <tbody>
         {this.tabRow() }
        </tbody>
      </table>
    </div>
  </div>
</div>

</div>
              
            
                </div>
                </div>)
            }
            }