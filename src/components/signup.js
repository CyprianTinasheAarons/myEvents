import React , {Component} from 'react'
import { Link} from 'react-router-dom'


class SignUp extends Component{
    render(){
        return(
            <div className="container-fluid bg-white" style={{backgroundImage:"url(img/adventure-flares-formation-70361.jpg)" ,height:"100%" ,width:"auto"}}  >

<div className="row" >
                              <div className="col-md-3 mx-auto m-2 p-1">
                                  <div className="card p-1 m-1">
                                      <div className="card-body">
                                              <center><h5>Choose SignUp Option</h5></center>

                                              <form method="post">
                                        <div>
                                            <img src="" />
                                        
                                        </div>

                       
                                        <div className="form-group"><Link to={'/email'}className="btn  btn-block text-dark  btn-danger" type="submit"><strong>Sigup with Email </strong></Link>
            </div>
                <div className="form-group"><button className="btn  btn-block text-dark  btn-danger" type="submit"><strong>Connect with Social</strong></button>
            </div>
            <div className="form-group"><button className="btn  btn-block text-dark  btn-danger" type="submit"><strong>Connect with Goggle</strong></button>
            </div><Link to={'/Login'}>Already have a account?Login</Link></form>

          
                                      </div>
                                  </div>

          
          
                                  
          
                              </div>
                          </div>
        
          
          
                          
                      </div>
        )
    }
}

export default SignUp