import React , {Component} from 'react'
import {Link} from  'react-router-dom'


class cooking extends Component{

    

    render(){
     

        return(
            <div className="container-fluid bg-white">

<div className="row">
    <div  className="col ">
        <center>
      <p> 
      
                   
                    <Link className="text-dark m-1 btn " to={'/createCook'} style={{backgroundColor: "orange"}}>
<i className="fa fa-plus"></i>
    </Link>
<Link className="text-dark p-1 m-1 btn  border border-dark" to={'/Explore'}>Explore</Link>
<h5 className="text-dark p-1">
    <strong>Saved Recipes</strong>
       </h5> 

                    </p>
                    </center>
        <hr/>
        <section class="card-1">
  <div class="card--content border p-2 ">
   <center>

<img className="card-img-top" src="img/food1.svg"/ >
  <h6>Munandi Recipe</h6>
   </center>
  </div>

  <div class="card--content border p-2 ">
   <center>

<img className="card-img-top" src="img/food1.svg"/ >
  <h6>Munandi Recipe</h6>

  <button className=" btn-circle text-white" style={{backgroundColor: "red"}}>
  -
</button>
   </center>
  </div>

  <div class="card--content border p-2 ">
   <center>

<img className="card-img-top" src="img/food1.svg"/ >
  <h6>Munandi Recipe</h6>
   </center>
  </div>

  <div class="card--content border p-2 ">
   <center>

<img className="card-img-top" src="img/food1.svg"/ >
  <h6>Munandi Recipe</h6>
   </center>
  </div>

  <div class="card--content border p-2 ">
   <center>

<img className="card-img-top" src="img/food1.svg"/ >
  <h6>Munandi Recipe</h6>
   </center>
  </div>

  <div class="card--content border p-2 ">
   <center>

<img className="card-img-top" src="img/food1.svg"/ >
  <h6>Munandi Recipe</h6>
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
    <img  className=" col-12 col-sm-6 col-md-4 " src="img/food1.svg" />
      
 <div className="col-12 col-sm-6 col-md-8 ">

 <h5 >
         Find People To Share Recipes with
       </h5>
       <p>
       Try it .It only takes a  minute to add a recipe.
       </p>
     
       <Link className="btn text-dark text-center" to={'createEvent'} style={{backgroundColor:"orange"}}>
         <h6><strong>Add a Meal!</strong></h6>
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