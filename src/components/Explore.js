import React , {Component} from 'react'
import {Navbar, Nav ,NavDropdown ,Form ,FormControl , Button  } from 'react-bootstrap' 
import axios from 'axios'
import SearchInput, {createFilter} from 'react-search-input'
import { Link } from 'react-router-dom'

const KEYS_TO_FILTERS = ['Title', 'Location' ,'Organizer' , 'Owner' , 'Chef' ]

const searchCss = {
  fontFamily: "inherit",
  fontSize: "15px",
  color: "inherit",
  backgroundColor:"#f4f2f2",
  border: "none",
  padding:".7rem 2rem",
  borderRadius:"100px",
  width: "100%",
  marginRight: "10px"
}

export default class eventsExplore extends Component{

    constructor (props) {
      super(props)
      this.state ={
        events: [] ,
        meals: [] ,
        pitches: [] ,
  
        searchTerm: ''
      }
      this.searchUpdated = this.searchUpdated.bind(this)
    }


    componentDidMount(){
   
          axios.get('http://localhost:4000/events')
              .then(response =>{
                  this.setState({events: response.data})
              })
              .catch(function(error){
                  console.log(error)
              })

          axios.get('http://localhost:4000/images')
          .then(response =>{
              this.setState({images: response.data})
          })
          .catch(function(error){
              console.log(error)
          })


      
          axios.get('http://localhost:4000/meals')
          .then(response =>{
              this.setState({meals: response.data})
          })
          .catch(function(error){
              console.log(error)
          })


          axios.get('http://localhost:4000/pitches')
          .then(response =>{
              this.setState({pitches: response.data})
          })
          .catch(function(error){
              console.log(error)
          })

    }


 

    handleChange(e) {
              return this.setState({ searchString: e.target.value})
    }

    render(){
      const filteredEvents = this.state.events.filter(createFilter(this.state.searchTerm ,KEYS_TO_FILTERS))
 
      const filteredPitches = this.state.pitches.filter(createFilter(this.state.searchTerm ,KEYS_TO_FILTERS))

      const filteredMeals = this.state.meals.filter(createFilter(this.state.searchTerm ,KEYS_TO_FILTERS))

        return(

            <div className="container-fluid bg-white">
                <div align="center " className="p-1 ">
                    <h1 className="p-1 m-1 text-center">Events , Pitches and Recipes to excite your curiosity</h1>
              <small>      <h5 className="p-1 m-1 text-center">Explore to find the right one for you.</h5></small>

                    <div className="row">
                      <div className="col-md-4 mx-auto ">
                   

      <SearchInput type="text"  placeholder="Search" className="search-input  search" onChange={this.searchUpdated}  style={searchCss}/>
         
                      </div>
                    </div>
                </div>

                <hr/>
                
            
                        <h5 align="left">
                        <strong>  Events </strong>
                        </h5>
                    
                        <section class="card-1 ">
                        {filteredEvents.map( events => {
          return (
           
  <div class="card--content" key={events._id} >
    
  <div className="card " >
<div className="text-image">
<img className="card-img-top" src="img/login.jpg" / >
<div class="rate ">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
    <p className="text-white ">200</p>

  </div>
<button className="text-white btn btn-danger " >
  <i class="fa fa-plus " aria-hidden="true"></i>

</button>
</div>


<div className="card-body text-center" style={{margin: "0px" }}>


  <Link to={'/eventsingle/' +events._id}> 
<small><p className="name text-dark" style={{margin: "0px" , padding: "0px"}}><strong>{events.Title}</strong></p>
<p  className="event text-dark" style={{margin: "0px" , padding: "0px"}}><i class="fa fa-map-marker mr-2"></i>

{events.Location}</p>

<p className="organizer text-muted">
<i class="fa fa-user mr-2" aria-hidden="true"></i>
{events.Organizer}
</p>
</small>
</Link>

</div>

</div>

 </div>

                
          
                          
          )
        })}
                        
                
</section>


                  
            

  <div>
                        <h5 align="left">
                            <strong>Pitches</strong>
                        </h5>
                     
                        <section class="card-1">
{filteredPitches.map( pitches => {
  return (
    <div class="card--content" key={pitches._id} >
    
  <div className="card " >
<div className="text-image">
<img className="card-img-top" src="img/login.jpg" / >
<div class="rate ">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
    <p className="text-white ">200</p>

  </div>
<button className="text-white btn  btn-warning">
  <i class="fa fa-plus " aria-hidden="true"></i>

</button>
</div>


<div className="card-body text-center" style={{margin: "0px" }}>


<Link to={'/pitchsingle/' +pitches._id}> 

<small>
<p className="name text-dark" style={{margin: "0px" , padding: "0px"}}><strong>{pitches.Title}</strong></p>


<p className="organizer text-muted">
<i class="fa fa-user mr-2" aria-hidden="true"></i>
{pitches.Owner}
</p>
</small>
</Link>


</div>

</div>

 </div>

                
   
           
  )
})}
             
 
</section>


                    </div>
  <div>
                        <h5 align="left">
                            <strong>Meals</strong>
                        </h5>
                     
                        <section class="card-1">

                        {filteredMeals.map(meals => {
  return (


    <div class="card--content" key={meals._id} >
    
    <div className="card " >
  <div className="text-image">
  <img className="card-img-top" src="img/login.jpg" / >
  <div class="rate ">
      <input type="radio" id="star5" name="rate" value="5" />
      <label for="star5" title="text">5 stars</label>
      <input type="radio" id="star4" name="rate" value="4" />
      <label for="star4" title="text">4 stars</label>
      <input type="radio" id="star3" name="rate" value="3" />
      <label for="star3" title="text">3 stars</label>
      <input type="radio" id="star2" name="rate" value="2" />
      <label for="star2" title="text">2 stars</label>
      <input type="radio" id="star1" name="rate" value="1" />
      <label for="star1" title="text">1 star</label>
      <p className="text-white ">200</p>
  
    </div>
  <button className="text-white btn  btn-dark">
    <i class="fa fa-plus " aria-hidden="true"></i>
  
  </button>
  </div>
  
  
  <div className="card-body text-center" style={{margin: "0px" }}>
  
  
  <Link to={'/pitchsingle/' +meals._id}> 
  
  <small>
  <p className="name text-dark" style={{margin: "0px" , padding: "0px"}}><strong>{meals.Title}</strong></p>
  
  
  <p className="organizer text-muted">
  <i class="fa fa-user mr-2" aria-hidden="true"></i>
  {meals.Chef}
  </p>
  </small>
  </Link>
  
  
  </div>
  
  </div>
  
   </div>
  
               
  )
})}
             
 
 
</section>


                    </div>


                    <div>
                        <h5 align="left">
                          <strong>  Categories</strong>
                        </h5>
                     
                        <section class="card-1">
  <div class="card--content">
     <div className="card " >


<img className="card-img-top" src="img/login.jpg"/ >




</div>
<p className="p-1 "> Outdoors & Adventure </p>
  </div>

  <div class="card--content">
     <div className="card " >


<img className="card-img-top" src="img/login.jpg"/ >




</div>
<p className="p-1 "> Entertainment </p>
  </div>

  <div class="card--content">
     <div className="card " >


<img className="card-img-top" src="img/login.jpg"/ >




</div>
<p className="p-1 "> Corporate </p>
  </div>
  <div class="card--content">
     <div className="card " >


<img className="card-img-top" src="img/login.jpg"/ >




</div>
<p className="p-1 "> Humanitarian </p>
  </div>
  <div class="card--content">
     <div className="card " >


<img className="card-img-top" src="img/login.jpg"/ >




</div>
<p className="p-1 "> Outdoors & Adventure </p>
  </div>
  <div class="card--content">
     <div className="card " >


<img className="card-img-top" src="img/login.jpg"/ >




</div>
<p className="p-1 "> Outdoors & Adventure </p>
  </div>
  <div class="card--content">
     <div className="card " >


<img className="card-img-top" src="img/login.jpg"/ >




</div>
<p className="p-1 "> Outdoors & Adventure </p>
  </div>
  <div class="card--content">
     <div className="card " >


<img className="card-img-top" src="img/login.jpg"/ >




</div>
<p className="p-1 "> Outdoors & Adventure </p>
  </div>
 
</section>


                    </div>
            


Explores Events  , Pitches and HomeCooking.
Allow person to filter , super search , view categories.
Like and review.

            </div>
        
        )
    }

    searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}
