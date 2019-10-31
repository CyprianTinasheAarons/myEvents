const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Event =  new Schema (
    {
        
        Title: {
            type: String
            ,
            required: true
        },
        Location: {
            type: String
            ,
            required: true
        },
        Description: {
            type: String
            ,
            required: true
        },
        Date: {
            type: String
            ,
            required: true
        },
        Time: {
            type: String
            ,
            required: true
        },
        Organizer: {
            type: String
            ,
            required: true
            
        } 
      

    } ,
    {
        collection:'events'
    }
)

module.exports = mongoose.model('Event ', Event )

