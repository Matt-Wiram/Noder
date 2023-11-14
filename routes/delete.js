var express = require('express');
const {getFirestore} = require("firebase-admin/firestore");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render("delete");
});

const db = getFirestore();

router.post('/', function (req, res) {
    let body = req.body
    let username = JSON.stringify(body.username)
    deleter(username)
})

async function deleter(user) {
    const res = await db.collection('users').doc(user).delete();

}

// deleter()


module.exports = router