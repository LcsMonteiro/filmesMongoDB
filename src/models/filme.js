const mongoose = require("mongoose")

const filmeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true

    },
    description:{
        type: String,
        required: true

    },
    type:{
        type: String,
        required: true

    },
    available_on:{
        type: String,
        required: true

    },
    created_at:{
        type: Date,
        required: true,
        default: new Date

    }
})

module.exports = mongoose.model("filme", filmeSchema)










/* title
  - String
  - required 
* description
  - String
  - required
* type
  - String
  - required
* available_on
  - String
  - required
* created_at
  - Date
  - required
  - default */