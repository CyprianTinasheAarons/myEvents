import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import Calendar from 'react-calendar'



  
class events extends Component{
    state = {
        date: new Date(),
        selected: 0
    }


    onSelect = key => {
        this.setState({selected: key})
    }

    onChange =  date => this.setState({date})

    render(){

        return(
            <div className="container-fluid bg-white">
                <center>
                <Link className=" text-dark" to={'/createEvent'}>+ Add Event</Link>
                </center>
                <Link to={'/index'}>index</Link>
                <Link className=" p-1 m-1 black-color" to={'/admin'} >Admin</Link>
  


<div className="row">

<div className="col-md-6 mx-auto">
    
<center>
<Link className="text-dark p-1 m-1 btn  border border-danger" to={'/Explore'}>Explore</Link>

<Link className="text-dark p-1 m-1 btn border border-danger" to={'/Notification'}>Notifications</Link>

</center>



    </div>

</div>

<div className="row">
    <div  className="col ">
       <h5 className="text-dark p-1">
       Attending</h5> 
        <hr/>

        <section class="card-1">
  <div class="card--content">
    DevFest Zimbabwe 2019
    Item1
    57 Attendees
  </div>
  <div class="card--content">
  DevFest Zimbabwe 2019
    Item1
    57 Attendees
  </div>
  <div class="card--content">
  DevFest Zimbabwe 2019
    Item1
    57 Attendees
  </div>
  <div class="card--content">
  DevFest Zimbabwe 2019
    Item1
    57 Attendees
  </div>
  <div class="card--content">  DevFest Zimbabwe 2019
    Item1
    57 Attendees</div>
  <div class="card--content">
  DevFest Zimbabwe 2019
    Item1
    57 Attendees
  </div>
  <div class="card--content">
  DevFest Zimbabwe 2019
    Item1
    57 Attendees
  </div>
  <div class="card--content">
  DevFest Zimbabwe 2019
    Item1
    57 Attendees
  </div>
  <div class="card--content">
  DevFest Zimbabwe 2019
    Item1
    57 Attendees
  </div>
  <div class="card--content">
  DevFest Zimbabwe 2019
    Item1
    57 Attendees
  </div>
</section>


        </div>
    </div>





<div className="bg-light">
<div className="row">
    <div className="col-md-8 col-12">
    <div className="p-1 m-1">
    <p className="text-dark">
        Saturday, 10 July 
    </p>
<div className="card m-1 p-1 ">
         <div className="card-body">
             <p className="text-muted">
                 12:00 PM
             </p>
         <h1>DevFest Zimbabwe 2019</h1>
       <h3> GDG Harare</h3> <a href="#">20 going</a>
         </div>

     </div>
</div>
    </div>

    <div className="col-md-3 p-1 m-1">

  
        <Calendar className="d-none d-sm-block"
            onChange = {this.onChange}
            value = {this.state.date}
             
        />
     
    
 
     
    </div>

</div>

<div className="row">
    <div className="col-md-8 col-12">

<div className="p-1 m-1">
    <p className="text-dark">
        Sunday, 25 July 
    </p>
<div className="card m-1 p-1  ">
         <div className="card-body">
             <p className="text-muted">
                 13:30 PM
             </p>
         <h1>Winter Formal Zimbabwe 2019</h1>
       <h3> G Harare</h3> <a href="#">30 going</a>
         </div>

     </div>
</div>
</div>

<div className="col-md-3 m-1 p-1 d-none d-sm-block">

<div className="card">

<div className="card-body">


    <ul  className="list-unstyled list-group">
        <li className="list-group-item">My Published Events</li>
        <li className="list-group-item">My Upcoming Events</li>
         <li className="list-group-item"> My Recommended Events</li> 
  
    </ul>

 
 </div>

 
 </div>

 
</div>
</div>

</div>

<hr/>
<div className="row">
    <div className="col-12 col-md-9 mx-auto">
    <div className="p-1 m-1">
<div className="card border border-white">

    <div className="card-body row">
    <img  className=" col-12 col-sm-6 col-md-4 p-1 m-1 " src="img/login.jpg" />
      
 <div className="col-12 col-sm-6 col-md-4 p-1 m-1">

 <h5 >
         Find People To Share Event With
       </h5>
       <p>
       Try it .It only takes a  minute to add a event.
       </p>
     
       <Link className="btn btn-danger text-white text-center" to={'createEvent'}>
            Add a Event!
        </Link>
 </div>
       
    
    </div>

</div>
    

</div>
    </div>
</div>

            </div>
        )
    }
}

export default events