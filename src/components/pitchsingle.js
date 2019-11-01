import React , {Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

export default class pitchSingle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Title: '',
            Description: '',
            Owner: ''
       
        }
      }

    componentDidMount(){
        axios.get('http://localhost:4000/pitches/singlePitch/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
              Title: response.data.Title, 
              Description: response.data.Description ,
              Owner: response.data.Owner 
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
         <p>Owned by:  <span className="text-primary">{this.state.Owner}</span>
 </p>

 
   
 

        <hr/>
   <h6><strong>Pitch Description</strong></h6>
   <p className="p-2 m-2"> {this.state.Description}
</p>

    
         </div>
         </div>  




</div>
 )
    }
}