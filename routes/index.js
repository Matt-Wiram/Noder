// var express = require('express');
// var router = express.Router();
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express', name: 'Matt' });
// });
//
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
//
// const serviceAccount = require('./serviceAccount.json');
//
// initializeApp({
//   credential: cert(serviceAccount)
// });
//
// const db = getFirestore();
//
// const docRef = db.collection('users').doc('mwiram');
//
// async function start() {
//   await docRef.set({
//     first: 'Matt',
//     last: 'Wiram',
//     born: 1991
//   });
//
// }
// // start()
//
// module.exports = router;
//
