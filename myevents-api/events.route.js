const express = require('express')
const eventRoutes =  express.Router()

let Event  =  require('./events.model')

eventRoutes.route('/addEvent').post( function(req, res){
    let event = new Event(req.body)
    event.save()
        .then( event =>{
            res.status(200).json({
                'event': 'event added successfully'
            })
        }).catch(err =>{
                res.status(400).send("unable to save to database")
        })
})

// Defined get data(index or listing) route
eventRoutes.route('/').get(function (req, res) {
    Event.find(function(err, events){
    if(err){
      console.log(err);
    }
    else {
      res.json(events);
    }
  });
});

// Defined edit route
eventRoutes.route('/editEvent/:id').get(function (req, res) {
  let id = req.params.id;
  Event.findById(id, function (err, event){
      res.json(event);
  });
});

//  Defined update route
eventRoutes.route('/updateEvent/:id').post(function (req, res) {
    Event.findById(req.params.id, function(err, event) {
    if (!event)
      res.status(404).send("data is not found");
    else {
        event.person_name = req.body.Title;
        event.business_name = req.body.Location;
        event.business_gst_number = req.body.Description;
        event.business_name = req.body.Organizer;
     

        event.save().then(event => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
eventRoutes.route('/deleteEvent/:id').get(function (req, res) {
    Event.findByIdAndRemove({_id: req.params.id}, function(err, event){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});


module.exports = eventRoutes