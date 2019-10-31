const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Event =  new Schema (
    {
        
        Title: {
            type: String
        },
        Location: {
            type: String
        },
        Description: {
            type: String
        },
        Date: {
            type: String
        },
        Time: {
            type: String
        },
        Organizer: {
            type: String
        } 
      

    } ,
    {
        collection:'events'
    }
)

module.exports = mongoose.model('Event ', Event )

