import React , {Component} from 'react'
import {Link} from  'react-router-dom'


class cooking extends Component{

    

    render(){
     

        return(
            <div className="container-fluid bg-white">

                <center>
<Link className="text-dark m-1 p-1" to={'/createCook'}>+ Add Meal</Link></center>


<div className="row">

<div className="col-md-6 mx-auto">
    
<center>
<Link className="text-dark p-1 m-1 btn  border border-danger" to={'/cookingExplore'}>Explore</Link>

<Link className="text-dark p-1 m-1 btn border border-danger" to={'/Notification'}>Notifications</Link>

</center>


    </div>

</div>

<div className="row">
    <div  className="col ">
       <h5 className="text-dark p-1">
       Saved Recipes</h5> 
        <hr/>
        <section class="card-1">
  <div class="card--content">
     Zimbabwe 2019
Recipe1
  
  </div>
  <div class="card--content">
   Zimbabwe 2019
Recipe1
  
  </div>
  <div class="card--content">
   Zimbabwe 2019
Recipe1
  
  </div>
  <div class="card--content">
  Zimbabwe 2019
Recipe1
  
  </div>
  <div class="card--content">  Zimbabwe 2019
Recipe1
  </div>
  <div class="card--content">
  Zimbabwe 2019
Recipe1
  
  </div>
  <div class="card--content">
  Zimbabwe 2019
Recipe1
  
  </div>
  <div class="card--content">
  Zimbabwe 2019
Recipe1
  
  </div>
  <div class="card--content">
  Zimbabwe 2019
Recipe1
  
  </div>
  <div class="card--content">
  Zimbabwe 2019
   Pitch1
  
  </div>
</section>



 

        </div>
    </div>

    <div className="bg-light">

    <div className="row">
    <div className="col-12 col-md-6">
    <div className="p-1 m-1">
<div className="card border">

    <div className="card-body row">
    <img  className=" col-12 col-sm-6 col-md-4 p-1 m-1 " src="img/food1.svg" />
      
 <div className="col-12 col-sm-6 col-md-4 p-1 m-1">

 <h5 >Meal Title
       </h5>

 <p >Meal Summary
       </p>
       <p className=" ">
       By <span>Cyprian</span>
       </p>
     
       <Link className="btn btn-danger text-white text-center" to={'createEvent'}>
            View Meal
        </Link>
 </div>
 <div className="col-12 col-sm-6 col-md-3 p-1 m-1">
   <ul className="list-unstyled">
     <li> 10-07-19</li>
     <li>Review stars</li>
     <li>189 Likes</li>


   </ul>

   
   </div>
    
    </div>

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
    <img  className=" col-12 col-sm-6 col-md-4 p-1 m-1 " src="img/food1.svg" />
      
 <div className="col-12 col-sm-6 col-md-4 p-1 m-1">

 <h5 >
         Find People To Share Recipes with
       </h5>
       <p>
       Try it .It only takes a  minute to add a recipe.
       </p>
     
       <Link className="btn btn-danger text-white text-center" to={'createEvent'}>
            Add a Meal!
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

export default cooking