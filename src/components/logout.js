import React , {Component} from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class Logout extends Component{


    onLogoutClick = e =>{
        e.preventDefault()
        this.props.logoutUser()
        this.props.history.push("/Login")
    }
    render(){
        const { user } = this.props.auth
        return(

          

            <div className="container-fluid bg-white "  >
                
                <div className="row"  style={{backgroundImage:"url(img/login.jpg)" ,height:"100%" ,width:"auto" ,backgroundSize:"contain"}}    >
                              <div className="col-md-3 mx-auto m-2 p-1">
                                  <div className="card m-1 p-1" >
                                      <div className="card-body">
                                              <center><h5>Logout</h5></center>

      <center>
      <button
         
         onClick={this.onLogoutClick}
         className="btn btn-large bg-light border  text-center"
       >
         Logout
       </button>
      </center>


               
                                      </div>
                                  </div>

          
          
                                  
          
                              </div>
                          </div>
        
 
            </div>
        )
    }
}

Logout.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Logout);