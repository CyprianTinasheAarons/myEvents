import React , {Component} from 'react'
import { Link} from 'react-router-dom'
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";


class Email extends Component{
    constructor(){
        super()
        this.state = {
            name : "",
            email : "",   
            password : "",  
            password2 : "",  
            errors : {},
        }
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to Home
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/Logout");
        }
      }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }

    onChange = e => {
        this.setState({[e.target.id]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()

        const newUser ={
            name : this.state.name,
            email : this.state.email, 
            password : this.state.password ,
            password2 : this.state.password2

        }

        this.props.registerUser(newUser, this.props.history)
    }

    render(){
        const  { errors} = this.state

        return(
            <div className="container-fluid bg-white" style={{backgroundImage:"url(img/login.jpg)" ,height:"100%" ,width:"auto" ,backgroundSize:"contain"}}  >


        
            <div className="row">
                              <div className="col-md-3 mx-auto m-2 p-1">
                                  <div className="card p-1 m-1">
                                      <div className="card-body">
                                              <center><h5>Create Account</h5></center>

                                              <form noValidate onSubmit={this.onSubmit}>
                                       
                                        <div className="form-group">
                <input 
                  className="form-control"
                  type="text"
                  name="name" 
                  placeholder="Username"
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"/>

                  <span className="red-text">{errors.name}</span>
                
               
                </div>
                                        <div className="form-group">
                                            <input
                                             className="form-control "
                                              type="email" 
                                              name="email"
                                              placeholder="Email or Phone Number"
                                              onChange={this.onChange}
                                              value={this.state.email}
                                              error={errors.email}
                                              id="email"/>
                                              <span className="red-text">{errors.email}</span>
                                            </div>
            <div className="form-group">
                <input
                 className="form-control" 
                 type="password" 
                 name="password"
                  placeholder="Password"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  />
               <span className="red-text">{errors.password}</span>
                </div>
                <div className="form-group">

                <input
                 className="form-control"
                 type="password" 
                 name="password"
                  placeholder="Repeat Password"
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  />
                             <span className="red-text">{errors.password2}</span>
                </div>
            <div className="form-group"><button className="btn  btn-block text-white  btn-danger" type="submit"><strong>SignUp</strong></button>
            </div><Link to={'/login'}>Already have a account?Login</Link></form>

          
                                      </div>
                                  </div>

                              </div>
                          </div>

                      </div>
        )
    }
}


Email.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Email))