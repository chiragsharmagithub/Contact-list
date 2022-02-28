const express = require('express');
const contacts = require('../models/contacts');
const router = express.Router();

// Brining in schema
const Contact = require('../models/contacts');

// retrieving contacts
router.get('/contacts', (req, res, next)=> {
    Contact.find(function(err, contacts) {
        res.json(contacts);
    })
});

// add contact
router.post('/contact', (req, res, next) => {
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_number: req.body.phone_number
    });

    newContact.save((err, contact) => {
        if(err) {
            res.json({msg: 'Failed to add conatct'});
        }
        else {
            res.json({msg: 'Contact added successfully'});
        }
    });
});

// delete contact
router.delete('/contact/:id', (req, res, next) => {
    Contact.remove({_id: req.params.id}, function(err, result) {
        if(err) {
            res.json(err)
        }
        else {
            res.json(result);
        }
    })
});


// update contact


// Always export your routes
module.exports = router;