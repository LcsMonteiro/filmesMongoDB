const mongoose = require("mongoose")

const filmeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
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
    availableOn:{
        type: String,
        required: true

    },
    createdAt:{
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model("filme", filmeSchema)
