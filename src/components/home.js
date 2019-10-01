/* eslint-disable jsx-a11y/anchor-is-valid */
import React , {Component} from 'react'


class Home extends Component{
    render(){
        return(
            <div className="bg-white container-fluid  ">


<div className="row p-1">
         <div className="col-md-6   ">

<div className="video-container ">
<img className="img-fluid rounded" src="img/carnival-celebration-crowd-1782146.jpg" />

    <div className="video-text">
        <h5 style={{fontWeight:"bold" ,fontSize:"2rem"}}>
           MyEvents platform is for you.
        </h5>

        <a href="#" className="text-white  btn btn-danger btn-block" style={{fontWeight:"700"}}>
            Join MyEvents
        </a>
    </div>
</div>



</div>
<div className="col-md-4 my-auto ">
    <p>
        My Events is platform that allows you create events . The real  world is calling .join a local meetup today.
   
        grayscale()
Make the element have a gray color.
You pass one value from 0 to 1, or from 0% to 100%, where 1 and 100% mean completely
gray, and 0 or 0% mean the image is not touched, and the original colors remain.
Example:
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
        <div className="card-body">
                    <h1>
                    Pitch Place 
                    </h1>
        </div>
    </div>
   

</div> 
<div className="col-md-6 p-1  bg-light mr-auto">
<div className="card">
        <div className="card-body">
                    <h1>
                   Home Cooking
                    </h1>
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