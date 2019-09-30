import React , {Component} from 'react'


class Home extends Component{
    render(){
        return(
            <div className="bg-white container-fluid  ">
<section className="main p-1">

<div className="row">
         <div className="col-md-5   ">

<div className="video-container ">
<video  className="video-overlay" autoplay muted loop style={{width:"100%",height:"auto"}}>
    <source src="img/Pexels Videos 1741279.mp4" type="video/mp4"/>

    Your browser does not support the video tag.
    </video> 
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
<div className="col-md-4 my-3 p-1">
    <p>
        My Events is platform that allows you create events . The real  world is calling .join a local meetup today.
   
        grayscale()
Make the element have a gray color.
You pass one value from 0 to 1, or from 0% to 100%, where 1 and 100% mean completely
gray, and 0 or 0% mean the image is not touched, and the original colors remain.
Example:
    </p>

</div>
<div className="col-md-2 m-1 p-1">

<ul className="list-unstyled">
    <li>
    <a href="#">
    <i>Facebook</i>
</a>

    </li>
    <li>
    <a href="#">
    <i className="icon-remove">Instagram</i>
</a>
        
        </li>

        <li>
        <a href="#">
    <i>Twitter</i>
</a>
        
        </li>
</ul>



</div>



         </div>

</section>

<section className="middle">
<div className="row">
<div className="col-md-5 m-1 p-1 bg-warning">
    Pitch Place 

</div> 
<div className="col-md-5 m-1 p-1 bg-warning
">
  Home Cooking
</div>

</div>


</section>

            </div>
        )
    }
}

export default Home