import React , {Component} from 'react'
import {Navbar, Nav ,NavDropdown ,Form ,FormControl , Button  } from 'react-bootstrap' 
import axios from 'axios'
import  Card from './Card'
import  Card2 from './Card2'
import  Card3 from './Card3'
import Search from '../components/search' 




export default class eventsExplore extends Component{

    constructor (props) {
      super(props)
      this.state ={
        event: [] ,
        meal: [] ,
        pitch: []
      }
    }


    componentDidMount(){
   
      axios.get('http://localhost:4000/events')
          .then(response =>{
              this.setState({event: response.data})
          })
          .catch(function(error){
              console.log(error)
          })

      
          axios.get('http://localhost:4000/meals')
          .then(response =>{
              this.setState({meal: response.data})
          })
          .catch(function(error){
              console.log(error)
          })


          axios.get('http://localhost:4000/pitches')
          .then(response =>{
              this.setState({pitch: response.data})
          })
          .catch(function(error){
              console.log(error)
          })

    }

    cardEvent (){
        return this.state.event.map(function(object, i){
            return <Card obj={object} key={i} />
        })
    }

    cardMeal (){
      return this.state.meal.map(function(object, i){
          return <Card3 obj={object} key={i} />
      })
    }

    cardPitch (){
        return this.state.pitch.map(function(object, i){
            return <Card2 obj={object} key={i} />
        })
    }

    handleChange(e) {
              return this.setState({ searchString: e.target.value})
    }

    render(){
      
        return(

            <div className="container-fluid bg-white">
                <div align="center " className="p-1 ">
                    <h1 className="p-1 m-1 text-center">Events , Pitches and Recipes to excite your curiosity</h1>
                    <h5 className="p-1 m-1 text-center">Explore to find the right one for you.</h5>
                </div>

                <hr/>
                
            
                        <h5 align="left">
                          Events 
                        </h5>
                    
                        <section class="card-1 ">
                        
                       
                          {this.cardEvent()}
                          

</section>


                  
            

  <div>
                        <h5 align="left">
                            Pitches
                        </h5>
                     
                        <section class="card-1">

                          {this.cardPitch()}
 
</section>


                    </div>
  <div>
                        <h5 align="left">
                            Meals
                        </h5>
                     
                        <section class="card-1">

                          {this.cardMeal()}
 
</section>


                    </div>


                    <div>
                        <h5 align="left">
                            Categories
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
}
