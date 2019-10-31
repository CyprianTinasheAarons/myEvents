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
                <Link className=" text-white btn btn-danger m-1" to={'/createEvent'}>
                <i className="fa fa-plus"></i>
                </Link>
                </center>
  


<div className="row">

<div className="col-md-6 mx-auto">
    
<center>
<Link className="text-dark p-1 m-1 btn  border border-danger" to={'/Explore'}>Explore</Link>



</center>



    </div>

</div>

<div className="row ">
    <div  className="col ">
       <h5 className="text-dark p-1">
       Attending</h5> 
        <hr/>

        <section class="card-1">
  <div class="card--content border p-2 ">
   <center>

<img className="card-img-top" src="img/login.jpg"/ >
  <p> DevFestival Zim 2019</p>
    <p>Harare ,Zimbabwe</p>
  <p className="text-muted">57 Attendees</p>
   </center>
  </div>

  <div class="card--content border p-2 ">
   <center>

<img className="card-img-top" src="img/login.jpg"/ >
  <p> DevFestival Zim 2019</p>
    <p>Harare ,Zimbabwe</p>
  <p className="text-muted">57 Attendees</p>

  <button className=" btn-circle text-white" style={{backgroundColor: "red"}}>
  -
</button>
   </center>
  </div>

  <div class="card--content border p-2 ">
   <center>

<img className="card-img-top" src="img/login.jpg"/ >
  <p> DevFestival Zim 2019</p>
    <p>Harare ,Zimbabwe</p>
  <p className="text-muted">57 Attendees</p>
   </center>
  </div>

  <div class="card--content border p-2 ">
   <center>

<img className="card-img-top" src="img/login.jpg"/ >
  <p> DevFestival Zim 2019</p>
    <p>Harare ,Zimbabwe</p>
  <p className="text-muted">57 Attendees</p>
   </center>
  </div>

  <div class="card--content border p-2 ">
   <center>

<img className="card-img-top" src="img/login.jpg"/ >
  <p> DevFestival Zim 2019</p>
    <p>Harare ,Zimbabwe</p>
  <p className="text-muted">57 Attendees</p>
   </center>
  </div>

  <div class="card--content border p-2 ">
   <center>

<img className="card-img-top" src="img/login.jpg"/ >
  <p> DevFestival Zim 2019</p>
    <p>Harare ,Zimbabwe</p>
  <p className="text-muted">57 Attendees</p>
   </center>
  </div>


</section>


        </div>
    </div>






<hr/>
<div className="row">
    <div className="col-12 col-md-9 mx-auto">
    <div className="p-1 m-1">
<div className="card border ">

    <div className="card-body row">
    <img  className=" col-12 col-sm-6 col-md-4  " src="img/login.jpg" />
      
 <div className="col-12 col-sm-6 col-md-8 p-2 ">


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