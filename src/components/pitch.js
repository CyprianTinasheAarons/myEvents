import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import ScrollMenu from 'react-horizontal-scrolling-menu'

// list of items
const list = [
    { name: 'pitch1' },
    { name: 'pitch2' },
    { name: 'pitch3' },
    { name: 'pitch4' },
    { name: 'pitch5' },
    { name: 'pitch6' },
    { name: 'pitch7' },
    { name: 'pitch8' },
    { name: 'pitch9' }
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
         <h5>Zim Pitchplace 2019</h5>
       <h6 className="text-muted">  {text}</h6>
 
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


class pitch extends Component{
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
                <Link className="text-dark" to={'/createPitch'}>+ Add Pitch</Link>
                </center>


<div className="row">

<div className="col-md-6 mx-auto">
    
<center>
<Link className="text-dark p-1 m-1 btn  border border-danger" to={'/Explore'}>Explore</Link>

<Link className="text-dark p-1 m-1 btn border border-danger" to={'/Notification'}>Notifications</Link>

</center>


    </div>
</div>

<div className="row">
    <div  className="col ">
       <h5 className="text-dark p-1">
       Saved Pitches</h5> 
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
    <div className="col-md-3 ">
          <div className="card" >


<img className="card-img-top" src="img/login.jpg"/ >

<div className="card-body">
<p className="card-text">Paul Ruker
</p>
<p> "Flying Car" </p><p>Posted 10 Oct 2019</p>
</div>

</div>

      
</div>
<div className="col-md-3">
<div className="card" >
<img className="card-img-top" src="img/login.jpg"/>
<div className="card-body">
<p className="card-text">Paul Ruker
</p>
<p> "Flying Car" </p><p>Posted 10 Oct 2019</p>
</div>

</div>

      
</div>

<div className="col-md-3">
<div className="card" >


<img className="card-img-top" src="img/login.jpg"/ >

<div className="card-body">
<p className="card-text">Paul Ruker
</p>
<p> "Flying Car" </p><p>Posted 10 Oct 2019</p>
</div>

</div>

      
</div>
<div className="col-md-3">
<div className="card" >


<img className="card-img-top" src="img/login.jpg"/ >

<div className="card-body">
<p className="card-text">Paul Ruker
</p>
<p> "Flying Car" </p><p>Posted 10 Oct 2019</p>
</div>

</div>

      
</div>

    </div>


        
        </div>
    
    
<hr/>

<div className="row">
    <div className="col-12 col-md-9 mx-auto">
    <div className="p-1 m-1">
<div className="card border border-white">

    <div className="card-body row">
    <img  className=" col-12 col-sm-6 col-md-4 p-1 m-1 " src="img/pitch1.svg" />
      
 <div className="col-12 col-sm-6 col-md-4 p-1 m-1">

 <h5 >
         Find People To Share business ideas with
       </h5>
       <p>
       Try it .It only takes a  minute to add a pitch.
       </p>
     
       <Link className="btn btn-danger text-white text-center" to={'createEvent'}>
            Add a Pitch!
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

export default pitch