const {Schema, model} = require('mongoose')

const ReviewSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    detailsReview:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    customerImg:{
        type:String,
    }
})

const Reviews = model('Reviews', ReviewSchema)
module.exports = Reviews;