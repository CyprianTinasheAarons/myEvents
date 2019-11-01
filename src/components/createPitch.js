import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import Notifications , {notify} from 'react-notify-toast'
import axios from 'axios'
import DefaultImg from '../assets/default-img.jpg'

const toastColor = { 
    background: '#505050', 
    text: '#fff' 
  }
  
class createPitch extends Component{
    constructor(props){
        super(props)
        this.updateStateTitle = this.updateStateTitle.bind(this)
        this.updateStateDescription = this.updateStateDescription.bind(this) 
        this.updateStateOwner = this.updateStateOwner.bind(this)

        //Clear input
        this.clearInput = this.clearInput.bind(this)

        //Submit input
        this.onSubmit = this.onSubmit.bind(this)

        this.state ={
            Title: '',
            Description: '',
            Owner: '' ,
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

    updateStateTitle(e){
        this.setState({
             Title: e.target.value}
            )
    }

    updateStateDescription(e){
        this.setState({
             Description: e.target.value}
            )
    }

    updateStateOwner(e){
        this.setState({
             Owner: e.target.value}
            )
    }

    onSubmit(e) {
        e.preventDefault()
        const obj = {
            Title: this.state.Title,
            Description: this.state.Description,
            Owner: this.state.Owner
        }
        axios.post('http://localhost:4000/pitches/addPitch', obj)
            .then(
                () => {
                    this.setDefaultImage("multer")
                }
            )

        this.setState({
            Title: '',
            Description: '',
            Owner: '' 
         
        })
    }

    clearInput(){
                    this.setState({Title: ''  , Description:'',Owner:''})
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
    
            axios.post('http://localhost:4000/pitches/imageupload', imageFormObj)
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
            

    render(){
        return(
            <div className="container-fluid bg-white">
                <div className="row">
       

                    <div className="col-md-8 p-1 my-1">
                    <div className="card">
                        <center> <p className="text-muted p-1 m-1">Create Pitch</p> </center>
                       <hr/>
                        <div className="card-body">
                      
                            <div className="row">
                                <div className="col-md-6">

                                <input type="file"  onChange={(e) => this.uploadImage(e, "multer")} />
                                        <img  className="p-1 m-1" src={this.state.multerImage} alt="upload-image" style={{width:"100%",height:"auto",maxWidth:"300px"}} />


                                </div>
                                <div className="col-md-6">
                                    <form onSubmit={this.onSubmit}>
                                <div className="form-group">
<label for="eventTitle">Pitch Title</label>
<input type="text" 
className="form-control"
 placeholder="Enter Pitch Title" 
 value={this.state.Title}
onChange={ this.updateStateTitle} 
ref = "myInput"/>

</div>


<div className="form-group">
<label for="eventTitle">Pitch Description</label>
<textarea type="text" className="form-control" placeholder="Enter Pitch Description" value={this.state.Description}
onChange={ this.updateStateDescription} ref = "myInput"/>

</div>
<div className="form-group">
<label for="eventTitle">Pitch Owner</label>
<input type="text" className="form-control" placeholder="Enter Pitch Owner " value={this.state.Owner}
onChange={ this.updateStateOwner} ref = "myInput"/>

</div>
<button type="submit" className="btn btn-primary p-1 m-1">Publish</button>

<button onClick={this.clearInput}  className="btn btn-danger p-1 m-1">Clear</button>
</form>
                                </div>

                            </div>

                        </div>
                    </div>

           </div>
           <div className="col-md-4 p-1 my-1" id="preview">
                    <div className="card" >
                        <center><p className="text-muted p-1 m-1"> Pitch Preview</p></center>

<div className="card-body p-1 m-1">
<h4 className="card-title">
    {this.state.Title}
</h4>


<p className="card-text">
{this.state.Description}
</p>
<p className="card-title" >Owned by: {this.state.Owner} </p>
</div>
</div>

                    </div>
                </div>

            </div>
        )
        }
}

export default createPitch