import React , {Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

export default class eventSingle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Title: '',
            Location: '',
            Description: '',
            Date: '',
            Time: '',
            Organizer: ''
       
        }
      }

    componentDidMount(){
        axios.get('http://localhost:4000/events/singleEvent/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
              Title: response.data.Title, 
              Location: response.data.Location,
              Description: response.data.Description ,
              Date: response.data.Date ,
              Time: response.data.Time ,
              Organizer: response.data.Organizer 
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
         <h6 className="text-muted">{this.state.Date}</h6>  
         <h1>   {this.state.Title}</h1>
         <p>Organized by:  <span className="text-primary">{this.state.Organizer}</span>
 </p>

 
       <p>Location:<span className="text-primary">{this.state.Location}</span></p>

        <p> Time:<span className="text-primary">{this.state.Time}</span></p>
 

        <hr/>
   <h6><strong>Description</strong></h6>
   <p className="p-2 m-2"> {this.state.Description}
</p>

    
         </div>
         </div>  




</div>
 )
    }
}