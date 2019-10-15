import React , {Component} from 'react'
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { loginUser } from "../actions/authActions"
import classnames from "classnames"




class EmailLogin extends Component{
    constructor() {
        super();
        this.state = {
          email: "",
          password: "",
          errors: {}
        };
      }
    
    


    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
         
          this.props.history.push("/Logout")
       
          
        }
      }

 
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/")
        
        }
    
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }

  
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
    onSubmit = e => {
        e.preventDefault();
    const userData = {
          email: this.state.email,
          password: this.state.password
        };

        this.props.loginUser(userData);
   
      };

    render(){
        const {errors} = this.state

        return(
            <div className="container-fluid bg-white" style={{backgroundImage:"url(img/login.jpg)" ,height:"100%" ,width:"auto" ,backgroundSize:"contain"}}   >
  
        
  <div className="row">
                    <div className="col-md-3 mx-auto  m-2  p-1">
                        <div className="card m-1 p-1">
                            <div className="card-body">
                                    <center><h5>Login</h5></center>
                                    <form noValidate onSubmit={this.onSubmit}>

                             

                                        <div className="form-group">
                                            <input
                                           
                                              type="email" 
                                              name="email"
                                             placeholder="Email"
                                             onChange = {this.onChange}
                                             value ={this.state.email}
                                             id="email"
                                             error = {errors.email}
                                             className={classnames("form-control", {
                                                invalid: errors.email || errors.emailnotfound
                                              })}
                                           
                                             />

            <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
                                             </div>
            <div className="form-group">
                <input
             
                 type="password" 
                 name="password"
                  placeholder="Password"
                  onChange = {this.onChange}
                  value ={this.state.password}
                  id="password"
                  error = {errors.password}
                  className={classnames("form-control", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                  />
            <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
                </div>
            <div className="form-group"><button className="btn  btn-block text-white  btn-danger" type="submit"><strong>Log In</strong></button>
            </div>
            <a className="forgot" href="#">Forgot your email or password?</a></form>

                                

                            </div>
                        </div>


                        

                    </div>
                </div>

           

                
            </div>
        )
    }
}


EmailLogin.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { loginUser }
  )(EmailLogin);