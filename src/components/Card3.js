import React , {Component} from  'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class Card extends Component{
  
render(){
    return(
  

  <div class="card--content" >
    
  <div className="card" >


<img className="card-img-top" src="img/login.jpg"/ >

<div className="card-body" style={{margin: "0px" }}>
<div class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </div>
  <Link to={'/eventsingle/' +this.props.obj._id}> 
<p className="name text-dark" style={{margin: "0px" , padding: "0px"}}>{this.props.obj.Title}</p>
    <p  className="event text-dark" style={{margin: "0px" , padding: "0px"}}>
        {this.props.obj.Recipe}</p>
        
   <p className="organizer text-dark">
        {this.props.obj.Chef}
  </p>
  </Link>
<button className=" btn-circle text-white"style={{backgroundColor: "red"}} >
  +
</button>

</div>

</div>

 </div>

    )

}
}