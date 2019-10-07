import React , {Component} from 'react'
import ReactDOM from 'react-dom'

class createPitch extends Component{
    constructor(props){
        super(props)

        this.state ={
            Title: '',
         
            Description: '',
            Organizer: '' ,
            images: []
        }

        this.updateStateTitle = this.updateStateTitle.bind(this)
   
        this.updateStateDescription = this.updateStateDescription.bind(this) 
        this.updateStateOrganizer = this.updateStateOrganizer.bind(this)

        //Clear input
        this.clearInput = this.clearInput.bind(this)
   
    }

    //Image upload
    selectFiles(e){
        let images = []
        for (var i=0; i< e.target.files.length;i++){
            images[i] = e.target.files.item(i)
        }
        images = images.filter(image => image.name.match(/\.(jpg|jpeg|gif|png)$/))
        this.setState({ images})

    }

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


    updateStateOrganizer(e){
        this.setState({
             Organizer: e.target.value}
            )
    }

    clearInput(){
                    this.setState({Title: ''  , Description:'',Organizer:''})
                    ReactDOM.findDOMNode(this.refs.myInput).focus()
            }


    render(){
        return(
            <div className="container-fluid bg-white">
                <div className="row">
       

                    <div className="col-md-8 p-1 my-1">
                    <div className="card">
                        <center> <p className="text-muted p-1 m-1">Create Pitch</p> </center>
                       <hr/>
                        <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col-md-6">

                                <div className="form-group">
<label for="eventTitle">Pitch Image</label>
<input type="file" className="form-control"  
onChange={ this.selectFiles} ref = "myInput" multiple/>

</div>

                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
<label for="eventTitle">Pitch Title</label>
<input type="text" className="form-control" placeholder="Enter Pitch Title" value={this.state.Title}
onChange={ this.updateStateTitle} ref = "myInput"/>

</div>


<div className="form-group">
<label for="eventTitle">Pitch Description</label>
<input type="text" className="form-control" placeholder="Enter Pitch Description" value={this.state.Description}
onChange={ this.updateStateDescription} ref = "myInput"/>

</div>
<div className="form-group">
<label for="eventTitle">Pitch Owner</label>
<input type="text" className="form-control" placeholder="Enter Pitch Owner " value={this.state.Organizer}
onChange={ this.updateStateOrganizer} ref = "myInput"/>

</div>
<button type="submit" className="btn btn-primary p-1 m-1">Publish</button>

<button onClick={this.clearInput}  className="btn btn-danger p-1 m-1">Clear</button>
                                </div>

                            </div>

</form>

                        </div>
                    </div>

           </div>
           <div className="col-md-4 p-1 my-1" id="preview">
                    <div className="card" >
                        <center><p className="text-muted p-1 m-1"> Pitch Preview</p></center>
                        <hr/>
<img className="card-img-top " src="https://dummyimage.com/600x400/563d7c/fff"
/>
<hr/>
<div className="card-body p-1 m-1">
<h4 className="card-title">
    {this.state.Title}
</h4>


<p className="card-text">
{this.state.Description}
</p>
<p className="card-title" >Owned by: {this.state.Organizer} </p>
</div>
</div>

                    </div>
                </div>

            </div>
        )
        }
}

export default createPitch