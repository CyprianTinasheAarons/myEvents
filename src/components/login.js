import React , {Component} from 'react'

class Login extends Component{
    render(){
        return(
            <div className="container-fluid bg-white" style={{backgroundImage:""}} >
                <div className="row">
                              <div className="col-md-3 mx-auto m-1 p-1">
                                  <div className="card">
                                      <div className="card-body">
                                              <center><h5>Choose Login Option</h5></center>

                                              <form method="post">
                                        <div>
                                            <img src="" />
                                        
                                        </div>

                       
                                        <div className="form-group"><button className="btn  btn-block text-dark  btn-danger" type="submit"><strong>Login with Email </strong></button>
            </div>
                <div className="form-group"><button className="btn  btn-block text-dark  btn-danger" type="submit"><strong>Connect with Social</strong></button>
            </div>
            <div className="form-group"><button className="btn  btn-block text-dark  btn-danger" type="submit"><strong>Connect with Goggle</strong></button>
            </div><a  href="#">Need a account?Signup</a></form>

          
                                      </div>
                                  </div>

          
          
                                  
          
                              </div>
                          </div>
        
        
  <div className="row">
                    <div className="col-md-3 mx-auto  m-1 p-1">
                        <div className="card">
                            <div className="card-body">
                                    <center><h5>Login</h5></center>
                                    <form method="post">
                                        <div>
                                            <img src="" />
                                        
                                        </div>

                                        <div className="form-group"><input className="form-control " type="email" name="email" placeholder="Email"/></div>
            <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password"/></div>
            <div className="form-group"><button className="btn  btn-block text-dark  btn-danger" type="submit"><strong>Log In</strong></button>
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

export default Login