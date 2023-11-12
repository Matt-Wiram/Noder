var express = require('express');
const {getFirestore} = require("firebase-admin/firestore");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('this is deleter');
});

const db = getFirestore();


async function deleter() {
    const res = await db.collection('users').doc('alovelace').delete();

}

// deleter()


module.exports = router