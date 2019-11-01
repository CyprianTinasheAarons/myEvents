import React , {Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

export default class mealSingle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Title: '',
            Recipe: '',
            Chef: ''

      
       
        }
      }

    componentDidMount(){
        axios.get('http://localhost:4000/meals/singleMeal/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
              Title: response.data.Title, 
              Recipe: response.data.Recipe,
              Chef: response.data.Chef
         
            })
        })
        .catch(function (error) {
            console.log(error);
        })

    }

 


    render(){
        return (
            <div className="container-fluid bg-white">
                  <center>
                <Link className=" text-white m-1 btn btn-danger" to={'/Explore'}>
                <i className="fa fa-times"></i>
                </Link>
                </center>
     <div className="row p-1">

         <div className="col-md-6">

<img className="card-img-top " src="img/login.jpg"/ >


         </div>

         <div className="col-md-6" >
         <h1>   {this.state.Title}</h1>
         <p>Recipe by:  <span className="text-primary">{this.state.Chef}</span>
 </p>

 
 

        <hr/>
   <h6><strong> Recipe Description</strong></h6>
   <p className="p-2 m-2"> {this.state.Recipe}
</p>

    
         </div>
         </div>  




</div>
 )
    }
}