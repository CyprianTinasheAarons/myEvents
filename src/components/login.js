import React , {Component} from 'react'
import {Link} from 'react-router-dom'

class Login extends Component{
    render(){
        return(
            <div className="container-fluid bg-white "  >
                
                <div className="row"  style={{backgroundImage:"url(img/adventure-flares-formation-70361.jpg)" ,height:"100%" ,width:"auto" ,padding: "100px 0px 100px 0px"}}    >
                              <div className="col-md-3 mx-auto m-2 p-1">
                                  <div className="card m-1 p-1" >
                                      <div className="card-body">
                                              <center><h5>Choose Login Option</h5></center>

                                              <form method="post">
                                        <div>
                                            <img src="" />
                                        
                                        </div>

                       
                                        <div className="form-group">
                                            <Link to={'/EmailLogin'} className="btn  btn-block text-dark  btn-danger" type="submit"><strong>Login with Email </strong></Link>
            </div>
                <div className="form-group"><button className="btn  btn-block text-dark  btn-danger" type="submit"><strong>Connect with Social</strong></button>
            </div>
            <div className="form-group"><button className="btn  btn-block text-dark  btn-danger" type="submit"><strong>Connect with Goggle</strong></button>
            </div><Link to={'/Signup'}>Need a account?Signup</Link></form>

          
                                      </div>
                                  </div>

          
          
                                  
          
                              </div>
                          </div>
        
 
            </div>
        )
    }
}

export default Login