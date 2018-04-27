const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//get a list of ninjas from the db.
router.get('/ninjas', function(req, res, next){
    Ninja.aggregate().near({
        near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
        maxDistance: 1000*parseFloat(req.query.dis),
        spherical: true,
        distanceField: 'dist.calculated'
      }).then(function (ninjas) {
        res.send(ninjas)
      }).catch(next);
});

//add a new ninja to the db
router.post('/ninjas', function(req, res, next){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
    
});

//update a ninja in the db
router.put('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body, { new: true }).then(function(ninja){
        res.send(ninja);
    });
});

router.delete('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
    });
});

module.exports = router;