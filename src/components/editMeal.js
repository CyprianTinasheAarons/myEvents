import React , {Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'


export default class editEvent extends Component {
    constructor(props) {
        super(props);
        this.updateStateTitle = this.updateStateTitle.bind(this)
        this.updateStateDescription = this.updateStateDescription.bind(this)
        this.updateStateChef = this.updateStateChef.bind(this)

        //Submit input
        this.onSubmit = this.onSubmit.bind(this)

        //Clear input
        this.clearInput = this.clearInput.bind(this)
    
        this.state = {
            Title: '',
            Description: '',
            Chef: ''
       
        }
      }

    componentDidMount(){
        axios.get('http://localhost:4000/meals/editMeal/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
              Title: response.data.Title, 
              Description: response.data.Description ,
              Chef: response.data.Chef 
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


    updateStateChef(e) {
        this.setState({
            Chef: e.target.value
        }
        )
    }



    onSubmit(e) {
        e.preventDefault()
        
        const obj = {
            Title: this.state.Title,
            Description: this.state.Description,
            Chef: this.state.Chef
        }

        axios.post('http://localhost:4000/meals/updateMeal/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data))
        
        this.props.history.push('/admin')
      }

      clearInput() {
        this.setState({ Title: '',  Description: '',Chef: '' })
        ReactDOM.findDOMNode(this.refs.myInput).focus()
    }


    render(){
        return (
            <div className="container-fluid bg-white">
            <div className="row">


                <div className="col-md-8 p-1 my-1">
                    <div className="card">
                        <center> <p className="text-muted p-1 m-1">Update Meal</p> </center>
                        <hr />
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="row">
                                    <div className="col-md-6">

                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="Title"> Title</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                
                                                value={this.state.Title}
                                                onChange={this.updateStateTitle}
                                                ref="myInput" />

                                        </div>

                                        <div className="form-group">
                                            <label for="Title"> Description</label>
                                            <input type="text" className="form-control"  value={this.state.Description}
                                                onChange={this.updateStateDescription} ref="myInput" />

                                        </div>
                                        <div className="form-group">
                                            <label for="Title"> Chef</label>
                                            <input type="text" className="form-control" value={this.state.Chef}
                                                onChange={this.updateStateChef} ref="myInput" />

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
                     
                        <div className="card-body p-1 m-1">
                            <h4 className="card-title">
                                {this.state.Title}
                            </h4>
                         

                            <p className="card-text">
                                {this.state.Description}
                            </p>
                            <p className="card-title" >Organized by: {this.state.Chef} </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
 )
    }
}