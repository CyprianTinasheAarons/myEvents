import React , {Component} from 'react'

class EmailLogin extends Component{
    render(){
        return(
            <div className="container-fluid bg-white" style={{backgroundImage:"url(img/login.jpg)" ,height:"100%" ,width:"auto" , backgroundSize:"cover"}} >
  
        
  <div className="row">
                    <div className="col-md-3 mx-auto  m-2  p-1">
                        <div className="card m-1 p-1">
                            <div className="card-body">
                                    <center><h5>Login</h5></center>
                                    <form method="post">
                                        <div>
                                            <img src="" />
                                        
                                        </div>

                                        <div className="form-group"><input className="form-control " type="email" name="email" placeholder="Email"/></div>
            <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password"/></div>
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

export default EmailLogin