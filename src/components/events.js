import React , {Component} from 'react'
import {Link} from 'react-router-dom'

class events extends Component{
    render(){
        return(
            <div className="container-fluid bg-white">
                <center>
                <Link className=" text-dark" to={'/createEvent'}>+ Add Event</Link>
                </center>
  


<div className="row">

<div className="col-md-6 mx-auto">
    
<center>
<Link className="text-dark p-1 m-1 btn  border border-danger" to={'/eventsExplore'}>Explore</Link>

<Link className="text-dark p-1 m-1 btn border border-danger" to={'/eventsNotification'}>Notifications</Link>

</center>



    </div>

</div>

<div className="row">
    <div  className="col bg-primary ">
        ATTENDING
        <hr/>
     <div className="card m-1 p-1 ">
         <div className="card-body">
         <h1>DevFest Zimbabwe 2019</h1>
       <h3> GDG Harare</h3> <a href="#">. 57 Attendees</a>
         </div>

     </div>

    </div>
</div>
<div className="bg-light">
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
<div className="p-1 m-1">
<div className="card">

    <div className="card-body">
       <div className="card-img">
       <img  className="responsive-img" src="img/architecture-buildings-dubrovnik-2040627.jpg" style={{width:"100%",height:"100%"}}/>
       </div>
       <h5>
         Find People To Share Event With
       </h5>
       <p>
       Try it .It only takes a  minute to add a event.
       </p>
        <Link className="btn btn-primary text-white" to={'createEvent'}>
            Create a Event
        </Link>
    </div>

</div>
    

</div>

            </div>
        )
    }
}

export default events