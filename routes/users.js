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
router.get('/', function(req, res, next) {
  res.render('users', {name: arr})

});
getter()
/* GET users listing. */






module.exports = router;
