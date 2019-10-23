import React, { Component} from 'react'
import Notifications , {notify} from 'react-notify-toast'
import ReactDOM from 'react-dom'
import axios from 'axios'
import DefaultImg from '../assets/default-img.jpg'

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
        
        //Submit input
        this.onSubmit = this.onSubmit.bind(this)

        //Clear input
        this.clearInput = this.clearInput.bind(this)

        this.state = {
            Title: '',
            Location: '',
            Description: '',
            Organizer: '',
            multerImage: DefaultImg,
            firebaseImage: DefaultImg,
            baseImage: DefaultImg
        }

    }

    setDefaultImage(uploadType) {
        if (uploadType === "multer") {
          this.setState({
            multerImage: DefaultImg
          });
        } else if (uploadType === "firebase") {
          this.setState({
            firebaseImage: DefaultImg
          });
        } else {
          this.setState({
            baseImage: DefaultImg
          });
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

    onSubmit(e ) {
        e.preventDefault()
       

        const obj = {
            Title: this.state.Title,
            Location: this.state.Location,
            Description: this.state.Description,
            Organizer: this.state.Organizer ,
        

        }
        axios.post('http://localhost:4000/events/addEvent', obj)
            .then(
                () => {
                    this.setDefaultImage("multer")
                    alert("Event successfully uploaded.");
                }
            )

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

    uploadImage(e, method) {
        let imageObj = {};
    
        if (method === "multer") {
    
          let imageFormObj = new FormData();
    
          imageFormObj.append("imageName", "multer-image-" + Date.now());
          imageFormObj.append("imageData", e.target.files[0]);
    
          // stores a readable instance of 
          // the image being uploaded using multer
          this.setState({
            multerImage: URL.createObjectURL(e.target.files[0])
          });
    
          axios.post('http://localhost:4000/events/imageupload', imageFormObj)
            .then((data) => {
              if (data.data.success) {
                alert("Image has been successfully uploaded.");
                this.setDefaultImage("multer");
              }
            })
            .catch((err) => {
              alert("Error while uploading image using multer");
              this.setDefaultImage("multer");
            });
        }}
    

    render() {

       
        return (
            <div className="container-fluid bg-white">
                <div className="row">


                    <div className="col-md-8 p-1 my-1">
                        <div className="card">
                            <center> <p className="text-muted p-1 m-1">Create Event</p> </center>
                            <hr />
                            <div className="card-body">
                                <Notifications/>
                               
                               
                                    <div className="row">
                                        <div className="col-md-6 col-12 col-sm-12">

                                        <input type="file"  onChange={(e) => this.uploadImage(e, "multer")} />
                                        <img  className="p-1 m-1" src={this.state.multerImage} alt="upload-image" style={{width:"100%",height:"auto",maxWidth:"300px"}} />


                                        </div>
                                        
                                        <div className="col-md-6">
                                        <form onSubmit={this.onSubmit} >
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
                                            </form>
                                        
                                        </div>

                                        

                                    </div>

                             

                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 p-1 my-1" id="preview">
                        <div className="card" >
                            <center><p className="text-muted p-1 m-1"> Event Details Preview</p></center>
                           
                            <div className="card-body p-1 m-1">
                                <h4 className="card-title">
                                Title:&nbsp;
                                    {this.state.Title}
                                </h4>
                                <h6 className="card-title ">
                                Location:&nbsp;
                                    {this.state.Location}

                                </h6>

                                <p className="card-text">
                                 Description:&nbsp;
                                    {this.state.Description}
                                </p>
                                <p className="card-title" >Organized by: &nbsp; {this.state.Organizer} </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default createEvents