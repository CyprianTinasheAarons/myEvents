import React , {Component} from  'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class Card extends Component{
   



render(){
    return(
  

  <div class="card--content">
  <div className="card" >


<img className="card-img-top" src="img/login.jpg"/ >

<div className="card-body" style={{margin: "0px" }}>
<p style={{margin: "0px" , padding: "0px"}}>{this.props.obj.Title}</p>
    <p style={{margin: "0px" , padding: "0px"}}>
        {this.props.obj.Location}</p>
        
   <p >
        {this.props.obj.Organizer}
  </p>



</div>

</div>
 </div>

    )

}
}