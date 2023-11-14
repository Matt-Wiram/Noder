var express = require('express');
var router = express.Router();
const {getFirestore} = require("firebase-admin/firestore");

const db = getFirestore();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('creater', { title: 'Express', name: 'Matt' });
});

router.post('/',function (req,res)
{
    let body = req.body
    let first = JSON.stringify(body.first)
    let last = JSON.stringify(body.last)
    let born = JSON.stringify(body.born)
    let username = JSON.stringify(body.username)

    const docRef = db.collection('users').doc(username)
    start(first, last, born, docRef)

    return res.redirect("/")

})

;

async function start(first, last, born, docRef) {
    await docRef.set({
        first: first,
        last: last,
        born: born
    });

}

module.exports = router;