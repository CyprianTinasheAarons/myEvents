import React , {Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'


export default class editEvent extends Component {
    constructor(props) {
        super(props);
        this.updateStateName = this.updateStateName.bind(this)
        this.updateStateEmail = this.updateStateEmail.bind(this)
   
        //Submit input
        this.onSubmit = this.onSubmit.bind(this)

        //Clear input
        this.clearInput = this.clearInput.bind(this)
    
        this.state = {
            name: '',
            email: ''
        }
      }

    componentDidMount(){
        axios.get('http://localhost:4000/users/editUser/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
              name: response.data.name, 
              email: response.data.email
            })
        })
        .catch(function (error) {
            console.log(error);
        })

    }

    updateStateName(e) {
        this.setState({
            name: e.target.value
        }
        )
    }

    updateStateEmail(e) {
        this.setState({
            email: e.target.value
        }
        )
    }

   



    onSubmit(e) {
        e.preventDefault()
        
        const obj = {
            name: this.state.name,
            email: this.state.email
        }

        axios.post('http://localhost:4000/users/updateUser/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data))
        
        this.props.history.push('/admin')
      }

      clearInput() {
        this.setState({ name: '', email: '' })
        ReactDOM.findDOMNode(this.refs.myInput).focus()
    }


    render(){
        return (
            <div className="container-fluid bg-white">
            <div className="row">


                <div className="col-md-8 p-1 my-1">
                    <div className="card">
                        <center> <p className="text-muted p-1 m-1">Update User</p> </center>
                        <hr />
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="row">
                                    <div className="col-md-6">

                                    </div>
                                    <div className="col-md-6">
                                  

                             
                                        <div className="form-group">
                                            <label for="eventTitle">User Name</label>
                                            <input type="text" className="form-control"  value={this.state.name}
                                                onChange={this.updateStateName} ref="myInput" />

                                        </div>
                                        <div className="form-group">
                                            <label for="eventTitle">User Email</label>
                                            <input type="text" className="form-control" value={this.state.email}
                                                onChange={this.updateStateEmail} ref="myInput" />

                                        </div>
                                        <input type="submit" value="Update User" className="btn btn-primary p-1 m-1" />

                                        <button onClick={this.clearInput} className="btn btn-danger p-1 m-1">Clear</button>
                                    </div>

                                </div>

                            </form>

                        </div>
                    </div>

                </div>
                <div className="col-md-4 p-1 my-1" id="preview">
                    <div className="card" >
                        <center><p className="text-muted p-1 m-1">  Update Preview</p></center>
 
                        <div className="card-body p-1 m-1">
                            <h4 className="card-title">
                                {this.state.name}
                            </h4>
                            <h6 className="card-title ">
                                {this.state.email}

                            </h6>

                  </div>
                    </div>

                </div>
            </div>

        </div>
 )
    }
}