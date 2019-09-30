import React , {Component} from 'react'
import {Link} from 'react-router-dom'

class pitch extends Component{
    render(){
        return(
            <div className="container-fluid bg-white">
                <center>
                <Link className="text-dark" to={'/createPitch'}>+ Add Pitch</Link>
                </center>


<div className="row">

<div className="col-md-6 mx-auto">
    
<center>
<Link className="text-dark p-1 m-1 btn  border border-danger" to={'/pitchExplore'}>Explore</Link>

<Link className="text-dark p-1 m-1 btn border border-danger" to={'/pitchNotification'}>Notifications</Link>

</center>


    </div>






    


</div>



            </div>
        )
    }
}

export default pitch