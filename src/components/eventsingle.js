import React , {Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'


export default class eventSingle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Title: '',
            Location: '',
            Description: '',
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
                  <div className="card" >

<div className="card-body" style={{margin: "0px" }}>
<p className="name text-dark" style={{margin: "0px" , padding: "0px"}}>{this.state.Title}</p>
    <p  className="event text-dark" style={{margin: "0px" , padding: "0px"}}>
        {this.state.Location}</p>
        
   <p className="organizer text-dark">
        {this.state.Organizer}
  </p>



</div>

</div>
</div>
 )
    }
}