import React , {Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'


export default class editEvent extends Component {
    constructor(props) {
        super(props);
        this.updateStateTitle = this.updateStateTitle.bind(this)
        this.updateStateDescription = this.updateStateDescription.bind(this)
        this.updateStateOwner = this.updateStateOwner.bind(this)

        //Submit input
        this.onSubmit = this.onSubmit.bind(this)

        //Clear input
        this.clearInput = this.clearInput.bind(this)
    
        this.state = {
            Title: '',
            Description: '',
            Owner: ''
       
        }
      }

    componentDidMount(){
        axios.get('http://localhost:4000/pitches/editPitch/'+this.props.match.params.id)
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

    updateStateTitle(e) {
        this.setState({
            Title: e.target.value
        }
        )
    }


    updateStateDescription(e) {
        this.setState({
            Description: e.target.value
        }
        )
    }


    updateStateOwner(e) {
        this.setState({
            Owner: e.target.value
        }
        )
    }



    onSubmit(e) {
        e.preventDefault()
        
        const obj = {
            Title: this.state.Title,
            Description: this.state.Description,
            Owner: this.state.Owner
        }

        axios.post('http://localhost:4000/pitches/updatePitch/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data))
        
        this.props.history.push('/admin')
      }

      clearInput() {
        this.setState({ Title: '', Description: '', Owner: '' })
        ReactDOM.findDOMNode(this.refs.myInput).focus()
    }


    render(){
        return (
            <div className="container-fluid bg-white">
            <div className="row">


                <div className="col-md-8 p-1 my-1">
                    <div className="card">
                        <center> <p className="text-muted p-1 m-1">Update Pitch</p> </center>
                        <hr />
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="row">
                                    <div className="col-md-6">

                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="eventTitle">Pitch Title</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                
                                                value={this.state.Title}
                                                onChange={this.updateStateTitle}
                                                ref="myInput" />

                                        </div>

                               
                                        <div className="form-group">
                                            <label for="eventTitle">Pitch Description</label>
                                            <input type="text" className="form-control"  value={this.state.Description}
                                                onChange={this.updateStateDescription} ref="myInput" />

                                        </div>
                                        <div className="form-group">
                                            <label for="eventTitle">Pitch Owner</label>
                                            <input type="text" className="form-control" value={this.state.Owner}
                                                onChange={this.updateStateOwner} ref="myInput" />

                                        </div>
                                        <input type="submit" value="Update Pitch" className="btn btn-primary p-1 m-1" />

                                        <button onClick={this.clearInput} className="btn btn-danger p-1 m-1">Clear</button>
                                    </div>

                                </div>

                            </form>

                        </div>
                    </div>

                </div>
                <div className="col-md-4 p-1 my-1" id="preview">
                    <div className="card" >
                        <center><p className="text-muted p-1 m-1"> Pitch Preview</p></center>
                    
                        <div className="card-body p-1 m-1">
                            <h4 className="card-title">
                                {this.state.Title}
                            </h4>
                        

                            <p className="card-text">
                                {this.state.Description}
                            </p>
                            <p className="card-title" >Owned by: {this.state.Owner} </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
 )
    }
}