var express = require('express');
const {getFirestore} = require("firebase-admin/firestore");
var router = express.Router();

const db = getFirestore();

var arr = []
async function getter() {
  const snapshot = await db.collection('users').get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());

    arr.push(doc.data())

  });

}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('./hello', {name: arr})
  // res.send('respond with a resource');
});




getter()
module.exports = router;
