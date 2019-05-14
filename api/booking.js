var express = require('express');
var router = express.Router();
var service=require('../services/bookingDBservice');
var bookingList=[
    {id:1,name:'Avathar',year:2019}
]

router.get('/', function(req, res, next) {
    var callback=function(result){
  res.send(result);
    }
  service.getBookings(callback);
});
router.get('/:id', function(req, res, next) {
    res.send(bookingList);
  });

  router.post('/', function(req, res, next) {
    var callback = function(result){
      res.send({'result':result});
    }
    var booking = req.body;
    service.addBooking(booking, callback);
  });

  router.delete('/:id', function(req, res, next) {
    var callback = function(result){
      res.send({'result':result});
    }
    var bookingId = req.params.id;
    service.deleteBooking(bookingId,callback);
  });

  router.get('/:id', function(req, res, next) {
    var callback = function(booking){
      res.send(booking);
    }
    var bookingId = req.params.id;
    var booking = service.getBookingById(bookingId,callback);
  });
  
  router.put('/:id', function(req, res, next) {
    var callback = function(result){
      res.send({'result':result});
    }
    var bookingId = req.params.id;
    var booking = req.body;
    service.updateBooking(booking,callback);
  });
  
  
  module.exports=router;
