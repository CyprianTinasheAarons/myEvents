/* eslint-disable jsx-a11y/anchor-is-valid */
import React , {Component} from 'react'
import Signup from './signup'
import { Link} from 'react-router-dom'


class Home extends Component{
    render(){
        return(
            <div className="bg-white container-fluid  ">


<div className="row p-1">
         <div className="col-md-6  col-12  ">

<div className="video-container ">
<img className="img-fluid" src="img/carnival-celebration-crowd-1782146.jpg" />

    <div className="video-text">
        <h5 style={{fontWeight:"bold" ,fontSize:"2rem"}}>
           MyEvents a place is for you.
        </h5>

        <Link to={'/Signup'} className="text-white  btn btn-danger " style={{fontWeight:"700"}}>
            Join MyEvents
        </Link>
    </div>
</div>



</div>
<div className="col-md-4 my-auto ">
    <p>
    Connect with people interested in a event that you are hosting. 
    MyEvents is the place to be if you want to enjoy life with the world.
    </p>

</div>
<div className="col-md-2 my-auto">
    <h5 className="text-center">
        Follow Us:
    </h5>

<ul className="list-unstyled row text-center">
    <li className="col-4 col-md-4">
    <a href="#" className="text-dark" style={{ fontSize:"35px"}}>
    <i className="icon ion-social-facebook-outline "></i>
</a>

    </li>
    <li className="col-4 col-md-4">
    <a href="#" className="text-dark" style={{ fontSize:"35px"}}>
    <i className="icon ion-social-instagram-outline"></i>
 
</a>
        
        </li>

        <li className="col-4 col-md-4" >
        <a href="#" className="text-dark" style={{ fontSize:"35px"}}>
        <i className="icon ion-social-twitter-outline"></i>
</a>
        
        </li>
</ul>



</div>



         </div>



<section className="middle">

<div className="row">
<div className="col-md-6 p-1   bg-light ml-auto">
    <div className="card">
    <h5 className="text-center m-1">
                          PitchPlace
                          </h5> 
        <div className="card-body  video-container">
                      
        <img className="img-fluid " src="img/pitch1.svg"/>

        <div className="video-text">
      

        <Link to={'/Signup'} className="text-white  btn btn-warning btn-block" style={{fontWeight:"700"}}>
            Join PitchPlace
        </Link>
    </div>
                 
        </div>
    </div>
   

</div> 
<div className="col-md-6 p-1  bg-light mr-auto">
<div className="card">
<h5 className="text-center m-1">
                          HomeCooking
                          </h5>
        <div className="card-body  video-container">
      
                 
                   <img className="img-fluid " src="img/food1.svg"/>

                   <div className="video-text">
       
        <Link to={'/Signup'} className="text-white  btn btn-dark btn-block" style={{fontWeight:"700"}}>
            Join HomeCooking
        </Link>
    </div>
                 
        </div>
    </div>
</div>

</div>




</section>

            </div>
        )
    }
}

export default Home