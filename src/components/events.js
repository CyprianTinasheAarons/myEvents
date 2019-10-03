import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import Calendar from 'react-calendar'
import ScrollMenu from 'react-horizontal-scrolling-menu'

// list of items
const list = [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
    { name: 'item4' },
    { name: 'item5' },
    { name: 'item6' },
    { name: 'item7' },
    { name: 'item8' },
    { name: 'item9' }
  ];
  
  // One item component
  // selected prop will be passed
  const MenuItem = ({ text, selected }) => {
    return (
      <div
        className="menu-item col-md-3 col-12"
      >
               
        <div className="card m-1 p-1 border border-0">
         <div className="card-body">
         <h5>DevFest Zimbabwe 2019</h5>
       <h6 className="text-muted">  {text}</h6>
        <a href="#">57 Attendees</a>
         </div>

     </div>
       
       
      </div>
    );
  };
  
  // All items component
  // Important! add unique key
  export const Menu = (list) => list.map(el => {
    const { name } = el;
  
    return (
      <MenuItem
        text={name}
        key={name}
      />
    );
  });
  
  
  const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
  };
  

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });


class events extends Component{
    state = {
        date: new Date(),
        selected: 0
    }


    onSelect = key => {
        this.setState({selected: key})
    }

    onChange =  date => this.setState({date})

    render(){

        const {selected} = this.state

        const menu = Menu(list,selected)

        return(
            <div className="container-fluid bg-white">
                <center>
                <Link className=" text-dark" to={'/createEvent'}>+ Add Event</Link>
                </center>
  


<div className="row">

<div className="col-md-6 mx-auto">
    
<center>
<Link className="text-dark p-1 m-1 btn  border border-danger" to={'/eventsExplore'}>Explore</Link>

<Link className="text-dark p-1 m-1 btn border border-danger" to={'/eventsNotification'}>Notifications</Link>

</center>



    </div>

</div>

<div className="row">
    <div  className="col ">
       <h5 className="text-dark p-1">
       Attending</h5> 
        <hr/>

    <ScrollMenu    className="row"
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
 

        </div>
    </div>





<div className="bg-light">
<div className="row">
    <div className="col-md-8 col-12">
    <div className="p-1 m-1">
    <p className="text-dark">
        Saturday, 10 July 
    </p>
<div className="card m-1 p-1 ">
         <div className="card-body">
             <p className="text-muted">
                 12:00 PM
             </p>
         <h1>DevFest Zimbabwe 2019</h1>
       <h3> GDG Harare</h3> <a href="#">20 going</a>
         </div>

     </div>
</div>
    </div>

    <div className="col-md-3 p-1 m-1">

  
        <Calendar className="d-none d-sm-block"
            onChange = {this.onChange}
            value = {this.state.date}
             
        />
     
    
 
     
    </div>

</div>

<div className="row">
    <div className="col-md-8 col-12">

<div className="p-1 m-1">
    <p className="text-dark">
        Sunday, 25 July 
    </p>
<div className="card m-1 p-1  ">
         <div className="card-body">
             <p className="text-muted">
                 13:30 PM
             </p>
         <h1>Winter Formal Zimbabwe 2019</h1>
       <h3> G Harare</h3> <a href="#">30 going</a>
         </div>

     </div>
</div>
</div>

<div className="col-md-3 m-1 p-1 d-none d-sm-block">

<div className="card">

<div className="card-body">


    <ul  className="list-unstyled list-group">
        <li className="list-group-item">My Published Events</li>
        <li className="list-group-item">My Upcoming Events</li>
         <li className="list-group-item"> My Recommended Events</li> 
  
    </ul>

 
 </div>

 
 </div>

 
</div>
</div>

</div>
<div className="row">
    <div className="col-12 col-md-9">
    <div className="p-1 m-1">
<div className="card border border-light">

    <div className="card-body row">
    <img  className=" col-12 col-sm-6 col-md-4 p-1 m-1 " src="img/login.jpg" />
      
 <div className="col-12 col-sm-6 col-md-4 p-1 m-1">

 <h5 >
         Find People To Share Event With
       </h5>
       <p>
       Try it .It only takes a  minute to add a event.
       </p>
     
       <Link className="btn btn-danger text-white text-center" to={'createEvent'}>
            Create an Event
        </Link>
 </div>
       
    
    </div>

</div>
    

</div>
    </div>
</div>

            </div>
        )
    }
}

export default events