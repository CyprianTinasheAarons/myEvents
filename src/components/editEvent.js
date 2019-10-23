import React , {Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'


export default class editEvent extends Component {
    constructor(props) {
        super(props);
        this.updateStateTitle = this.updateStateTitle.bind(this)
        this.updateStateLocation = this.updateStateLocation.bind(this)
        this.updateStateDescription = this.updateStateDescription.bind(this)
        this.updateStateOrganizer = this.updateStateOrganizer.bind(this)

        //Submit input
        this.onSubmit = this.onSubmit.bind(this)

        //Clear input
        this.clearInput = this.clearInput.bind(this)
    
        this.state = {
            Title: '',
            Location: '',
            Description: '',
            Organizer: ''
       
        }
      }

    componentDidMount(){
        axios.get('http://localhost:4000/events/editEvent/'+this.props.match.params.id)
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

    updateStateTitle(e) {
        this.setState({
            Title: e.target.value
        }
        )
    }

    updateStateLocation(e) {
        this.setState({
            Location: e.target.value
        }
        )
    }

    updateStateDescription(e) {
        this.setState({
            Description: e.target.value
        }
        )
    }


    updateStateOrganizer(e) {
        this.setState({
            Organizer: e.target.value
        }
        )
    }



    onSubmit(e) {
        e.preventDefault()
        
        const obj = {
            Title: this.state.Title,
            Location: this.state.Location,
            Description: this.state.Description,
            Organizer: this.state.Organizer
        }

        axios.post('http://localhost:4000/events/updateEvent/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data))
        
        this.props.history.push('/index')
      }

      clearInput() {
        this.setState({ Title: '', Location: '', Description: '', Organizer: '' })
        ReactDOM.findDOMNode(this.refs.myInput).focus()
    }


    render(){
        return (
            <div className="container-fluid bg-white">
            <div className="row">


                <div className="col-md-8 p-1 my-1">
                    <div className="card">
                        <center> <p className="text-muted p-1 m-1">Update Event</p> </center>
                        <hr />
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="row">
                                    <div className="col-md-6">

                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="eventTitle">Event Title</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                
                                                value={this.state.Title}
                                                onChange={this.updateStateTitle}
                                                ref="myInput" />

                                        </div>

                                        <div className="form-group">
                                            <label for="eventTitle">Location</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                            
                                                value={this.state.Location}
                                                onChange={this.updateStateLocation}
                                                ref="myInput" />

                                        </div>
                                        <div className="form-group">
                                            <label for="eventTitle">Event Description</label>
                                            <input type="text" className="form-control"  value={this.state.Description}
                                                onChange={this.updateStateDescription} ref="myInput" />

                                        </div>
                                        <div className="form-group">
                                            <label for="eventTitle">Event Organizer</label>
                                            <input type="text" className="form-control" value={this.state.Organizer}
                                                onChange={this.updateStateOrganizer} ref="myInput" />

                                        </div>
                                        <input type="submit" value="Update Event" className="btn btn-primary p-1 m-1" />

                                        <button onClick={this.clearInput} className="btn btn-danger p-1 m-1">Clear</button>
                                    </div>

                                </div>

                            </form>

                        </div>
                    </div>

                </div>
                <div className="col-md-4 p-1 my-1" id="preview">
                    <div className="card" >
                        <center><p className="text-muted p-1 m-1"> Event Preview</p></center>
                        <hr />
                        <img className="card-img-top " src="https://dummyimage.com/600x400/563d7c/fff"
                        />
                        <hr />
                        <div className="card-body p-1 m-1">
                            <h4 className="card-title">
                                {this.state.Title}
                            </h4>
                            <h6 className="card-title ">
                                {this.state.Location}

                            </h6>

                            <p className="card-text">
                                {this.state.Description}
                            </p>
                            <p className="card-title" >Organized by: {this.state.Organizer} </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
 )
    }
}