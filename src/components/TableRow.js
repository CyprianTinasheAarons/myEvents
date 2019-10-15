import React , {Component} from  'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class TableRow extends Component{
    constructor(props){
        super(props)
        this.delete = this.delete.bind(this)

    }
    delete(){
        axios.get('http://localhost:4000/events/deleteEvent/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
render(){
    return(
        <tr>
<td>
            {this.props.obj.Title}
          </td>
          <td>
            {this.props.obj.Location}
          </td>
          <td>
            {this.props.obj.Description}
          </td>
          <td>
            {this.props.obj.Organizer}
          </td>
          
          <td>
            <Link  to={"/editEvent/" +this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <Link to={"/index"} onClick={this.delete} className="btn btn-danger">Delete</Link>
          </td>
        </tr>

    )

}
}