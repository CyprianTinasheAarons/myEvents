import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import ScrollMenu from 'react-horizontal-scrolling-menu'

class pitch extends Component{

    render(){

      

        return(
            <div className="container-fluid bg-white">
                <center>
                <Link className="text-dark btn btn-warning m-1" to={'/createPitch'}>
                    <i className="fa fa-plus"></i>

                </Link>
                </center>

                <div className="row">

<div className="col-md-6 mx-auto">
    
<center>
<Link className="text-dark p-1 m-1 btn  border border-warning" to={'/Explore'}>Explore</Link>

</center>


    </div>

</div>




<div className="row">
    <div  className="col ">
       <h5 className="text-dark p-1">
       Saved Pitches</h5> 
        <hr/>
        <section class="card-1">
        <div class="card--content border p-2 ">
   <center>

<img className="card-img-top" src="img/pitch1.svg"/ >
  <h6>Crazy Ideas</h6>
   </center>
  </div>

  <div class="card--content border p-2 ">
   <center>

<img className="card-img-top" src="img/pitch1.svg"/ >
  <h6>Crazy Ideas</h6>

  <button className=" btn-circle text-white" style={{backgroundColor: "red"}}>
  -
</button>
   </center>
  </div>

  <div class="card--content border p-2 ">
   <center>

<img className="card-img-top" src="img/pitch1.svg"/ >
  <h6>Crazy Ideas</h6>
   </center>
  </div>

  <div class="card--content border p-2 ">
   <center>

<img className="card-img-top" src="img/pitch1.svg"/ >
  <h6>Crazy Ideas</h6>
   </center>
  </div>

  <div class="card--content border p-2 ">
   <center>

<img className="card-img-top" src="img/pitch1.svg"/ >
  <h6>Crazy Ideas</h6>
   </center>
  </div>

  <div class="card--content border p-2 ">
   <center>

<img className="card-img-top" src="img/pitch1.svg"/ >
  <h6>Crazy Ideas</h6>
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
    <img  className=" col-12 col-sm-6 col-md-4  " src="img/pitch1.svg" />
      
 <div className="col-12 col-sm-6 col-md-8 ">

 <h5 >
         Find People To Share business ideas with
       </h5>
       <p>
       Try it .It only takes a  minute to add a pitch.
       </p>
     
       <Link className="btn btn-warning text-dark text-center" to={'createEvent'}>
            Add a Pitch!
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

export default pitch