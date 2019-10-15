import React , {Component } from 'react'
import axios from 'axios'
import TableRow from './TableRow'

export default class Index extends Component {
    constructor(props){
        super(props)
        this.state = {event: []}

    }
    componentDidMount(){
        axios.get('http://localhost:4000/events')
            .then(response =>{
                this.setState({event: response.data})
            })
            .catch(function(error){
                console.log(error)
            })

    }
    tabRow(){
        return this.state.event.map(function(object, i){
            return <TableRow obj={object} key={i} />
        })
    }

    render(){
        return (
            <div className="bg-white">
                <h3 align="center">Events List</h3>
                <table className="table table-striped" style={{ marginTop: 20}}>
                    <thead>
                        <th>Title</th>
                        <th>Location</th>
                        <th>
                            Description
                        </th>
                        <th>
                           Organizer
                        </th>
                        <th colSpan="2">
                            Action
                        </th>
                    </thead>
            
                <tbody>
                    {this.tabRow() }
                </tbody>

                </table>
            </div>
        )
    }
}