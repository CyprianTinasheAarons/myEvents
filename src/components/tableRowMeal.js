import React , {Component} from  'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

export default class TableRow extends Component{
    constructor(props){
        super(props)
        this.state = {
          redirect: false
        }
        this.delete = this.delete.bind(this)

        this.setRedirect = this.setRedirect.bind(this)
        this.renderRedirect = this.renderRedirect.bind(this)

    }



    setRedirect = () => {
      this.setState({
          redirect : true
      })

  }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to= {'/admin'} />
        }
    }

    delete(){
        axios.get('http://localhost:4000/meals/deleteMeal/'+this.props.obj._id)
            .then(this.setRedirect)
            .catch(err => console.log(err))
    }
render(){
    return(
        <tr>
<td>
            {this.props.obj.Title}
          </td>
          <td>
            {this.props.obj.Recipe}
          </td>
          <td>
            {this.props.obj.Chef}
          </td>
     
          <td>
            <Link  to={"/editMeal/" +this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            {this.renderRedirect()}
            <button  onClick={this.delete } className="btn btn-danger">Delete</button>
          </td>
        </tr>

    )

}
}