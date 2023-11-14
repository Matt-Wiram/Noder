var express = require('express');
var router = express.Router();
const {getFirestore} = require("firebase-admin/firestore");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: 'Matt' });
});



const db = getFirestore();

const docRef = db.collection('users').doc('mwiram');



module.exports = router;

