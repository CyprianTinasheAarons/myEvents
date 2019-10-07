import React , {Component} from 'react'

class eventsNotification extends Component{
    render(){
        return(
            <div className="container-fluid bg-white">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <center>
                            <h5 className="p-1 m-1">Notifications</h5>
<hr/>
                        </center>

                        <div className="card p-1 m-1">
                            <div className="card-body">
                               Your Event is Starting Today at 5pm
                            </div>
                        </div>
                        <div className="card p-1 m-1">
                            <div className="card-body">
                               Your Event is Starting Today at 5pm
                            </div>
                        </div>
                        <div className="card p-1 m-1">
                            <div className="card-body">
                               Your Event is Starting Today at 5pm
                            </div>
                        </div>
                        <div className="card p-1 m-1">
                            <div className="card-body">
                               Your Event is Starting Today at 5pm
                            </div>
                        </div>

                    </div>
                </div>




            </div>
        )
    }
}

export default eventsNotification