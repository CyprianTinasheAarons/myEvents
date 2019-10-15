import React, { Component} from 'react'
import Notifications , {notify} from 'react-notify-toast'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Spinner from './imagesUpload/spinner'
import Images from './imagesUpload/images'
import Button from './imagesUpload/buttons'
import {API_URL} from './config'


const toastColor = { 
    background: '#505050', 
    text: '#fff' 
  }
  

class createEvents extends Component {

    constructor(props) {
        super(props)
        this.updateStateTitle = this.updateStateTitle.bind(this)
        this.updateStateLocation = this.updateStateLocation.bind(this)
        this.updateStateDescription = this.updateStateDescription.bind(this)
        this.updateStateOrganizer = this.updateStateOrganizer.bind(this)
        this.state = {
            uploadedFile: null,
            uploadedFileCloudinaryUrl: ''
          }

        //Submit input
        this.onSubmit = this.onSubmit.bind(this)

        //Clear input
        this.clearInput = this.clearInput.bind(this)

        this.state = {
            Title: '',
            Location: '',
            Description: '',
            Organizer: '',
            loading: true,
            uploading: false,
            images: []

        }

    }

  
    toast = notify.createShowQueue()

    updateStateTitle(e) {
        this.setState({
            Title: e.target.value
        }
        )
    }



    updateStateLocation(e) {
        this.setState({
            Location: e.target.value
        }
        )
    }


    updateStateDescription(e) {
        this.setState({
            Description: e.target.value
        }
        )
    }


    updateStateOrganizer(e) {
        this.setState({
            Organizer: e.target.value
        }
        )
    }

    onSubmit(e) {
        e.preventDefault()
        const obj = {
            Title: this.state.Title,
            Location: this.state.Location,
            Description: this.state.Description,
            Organizer: this.state.Organizer
        }
        axios.post('http://localhost:4000/events/addEvent', obj)
            .then(res => console.log(res.data))

        this.setState({
            Title: '',
            Location: '',
            Description: '',
            Organizer: ''
        })
    }

    clearInput() {
        this.setState({ Title: '', Location: '', Description: '', Organizer: '' })
        ReactDOM.findDOMNode(this.refs.myInput).focus()
    }


    onChange = e => {
        const errs = [] 
        const files = Array.from(e.target.files)
    
        if (files.length > 3) {
          const msg = 'Only 3 images can be uploaded at a time'
          return this.toast(msg, 'custom', 2000, toastColor)  
        }
    
        const formData = new FormData()
        const types = ['image/png', 'image/jpeg', 'image/gif']
    
        files.forEach((file, i) => {
    
          if (types.every(type => file.type !== type)) {
            errs.push(`'${file.type}' is not a supported format`)
          }
    
          if (file.size > 150000) {
            errs.push(`'${file.name}' is too large, please pick a smaller file`)
          }
    
          formData.append(i, file)
        })
    
        if (errs.length) {
          return errs.forEach(err => this.toast(err, 'custom', 2000, toastColor))
        }
    
        this.setState({ uploading: true })
    
        fetch(`${API_URL}/image-upload`, {
          method: 'POST',
          body: formData
        })
        .then(res => {
          if (!res.ok) {
            throw res
          }
          return res.json()
        })
        .then(images => {
          this.setState({
            uploading: false, 
            images
          })
        })
        .catch(err => {
          err.json().then(e => {
            this.toast(e.message, 'custom', 2000, toastColor)
            this.setState({ uploading: false })
          })
        })
      }
    
      filter = id => {
        return this.state.images.filter(image => image.public_id !== id)
      }
    
      removeImage = id => {
        this.setState({ images: this.filter(id) })
      }
    
      onError = id => {
        this.toast('Oops, something went wrong', 'custom', 2000, toastColor)
        this.setState({ images: this.filter(id) })
      }
      
      


    render() {

        const { uploading , images } = this.state

        const content = () => {
            switch(true){
                case uploading:
                    return <Spinner />
                case  images.length > 0:
                    return <Images 
                    image = {images}
                    removeImage ={ this.removeImage}
                    onError = {this.onError}
                      />
                default:
                    return <Button onChange={this.onChange} />
            }
        }
       
        return (
            <div className="container-fluid bg-white">
                <div className="row">


                    <div className="col-md-8 p-1 my-1">
                        <div className="card">
                            <center> <p className="text-muted p-1 m-1">Create Event</p> </center>
                            <hr />
                            <div className="card-body">
                                <Notifications/>
                                <form onSubmit={this.onSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 buttons">
                                         {content()}
                                          

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="eventTitle">Event Title</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Event Title"
                                                    value={this.state.Title}
                                                    onChange={this.updateStateTitle}
                                                    ref="myInput" />

                                            </div>

                                            <div className="form-group">
                                                <label for="eventTitle">Location</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Event Location"
                                                    value={this.state.Location}
                                                    onChange={this.updateStateLocation}
                                                    ref="myInput" />

                                            </div>
                                            <div className="form-group">
                                                <label for="eventTitle">Event Description</label>
                                                <input type="text" className="form-control" placeholder="Enter Event Description" value={this.state.Description}
                                                    onChange={this.updateStateDescription} ref="myInput" />

                                            </div>
                                            <div className="form-group">
                                                <label for="eventTitle">Event Organizer</label>
                                                <input type="text" className="form-control" placeholder="Enter Event Organizer " value={this.state.Organizer}
                                                    onChange={this.updateStateOrganizer} ref="myInput" />

                                            </div>
                                            <input type="submit" className="btn btn-primary p-1 m-1" />

                                            <button onClick={this.clearInput} className="btn btn-danger p-1 m-1">Clear</button>
                                        </div>

                                    </div>

                                </form>

                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 p-1 my-1" id="preview">
                        <div className="card" >
                            <center><p className="text-muted p-1 m-1"> Event Preview</p></center>
                            <hr />
            
                            <hr />
                            <div className="card-body p-1 m-1">
                                <h4 className="card-title">
                                    {this.state.Title}
                                </h4>
                                <h6 className="card-title ">
                                    {this.state.Location}

                                </h6>

                                <p className="card-text">
                                    {this.state.Description}
                                </p>
                                <p className="card-title" >Organized by: {this.state.Organizer} </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default createEvents