const express = require('express');
const router = express.Router();

const Customer = require('../models/customer')

router.get('/customers',(req,res,next)=>{
    Customer.find(function(err,customers){
        res.json(customers);
    })
});


router.post('/customer',(req,res,next)=>{
    let newCustomer = new Customer({
        customer_name: req.body.customer_name,
        customer_id: req.body.customer_id,
        customer_geographic_location: req.body.customer_geographic_location,
        customer_type: req.body.customer_type
    });
    newCustomer.save((err,customer)=>{
        if(err){
            res.json({msg:'Failed to add Customer'});
        }
        else{
            res.json({msg:'Customer details added successfully'});
        }
    });
});

router.put('/customer/:id', (req, res) => {
    let newCustomer = {
        customer_name: req.body.customer_name,
        customer_id: req.body.customer_id,
        customer_geographic_location: req.body.customer_geographic_location,
        customer_type: req.body.customer_type
    };
    Customer.findByIdAndUpdate(req.params.id,newCustomer, (err, result) => {
        if (!err) { res.send(result); }
        else { console.log('Error in Customer Update :'); }
    });
});

router.delete('/customer/:id',(req,res,next)=>{
    Customer.deleteOne({_id: req.params.id},function(err,result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
});

module.exports = router;