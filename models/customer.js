var mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    customer_name:{
        type:String,
        required: true
    },
    customer_id:{
        type:Number,
        required: true
    },
    customer_geographic_location:{
        type: String,
        required: true
    },
    customer_type:{
        type:String,
        required: true
    }
});

const Customer = module.exports = mongoose.model('Customer',customerSchema);