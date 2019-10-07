import React , {Component} from 'react'
import { Link} from 'react-router-dom'


class Email extends Component{
    render(){
        return(
            <div className="container-fluid bg-white" style={{backgroundImage:"url(img/login.jpg)" ,height:"100%" ,width:"auto" ,backgroundSize:"contain"}}  >


        
            <div className="row">
                              <div className="col-md-3 mx-auto m-2 p-1">
                                  <div className="card p-1 m-1">
                                      <div className="card-body">
                                              <center><h5>Create Account</h5></center>

                                              <form method="post">
                                        <div>
                                            <img src="" />
                                        
                                        </div>

                                        <div className="form-group"><input className="form-control " type="email" name="email" placeholder="Email or Phone Number"/></div>
            <div className="form-group">
                <input className="form-control" type="password" name="password" placeholder="Password"/>
               
                </div>
                <div className="form-group">
                <input className="form-control" type="password" name="password" placeholder="Confirm Password"/>
                </div>
            <div className="form-group"><button className="btn  btn-block text-white  btn-danger" type="submit"><strong>Next</strong></button>
            </div><Link to={'/login'}>Already have a account?Login</Link></form>

          
                                      </div>
                                  </div>

                              </div>
                          </div>

                      </div>
        )
    }
}

export default Email