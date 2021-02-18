var TestSellers = require('../models/sellersModel');
var bodyParser = require('body-parser');
const {
    json
} = require('body-parser');


module.exports = function (app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));


    // app.get('/api/addseller', function (req, res) {

    //     var setSellers = [{
           
    //         sellerName: 'Arafa',
    //         sellerId: '123abc',
    //         category: 'sports',
    //         address: {
    //             postalCode: 123456,
    //             street: '123st',
    //             state: 'moharram beh state xD',
    //             city: 'Egypt',
    //             country: 'Alexandria',
    //             geoMap: {
    //                 latitude: 123,
    //                 longitude: 456,
    //             }
    //         },
    //         logo: 'http//www.aykalam.com',
    //         shortDesc: 'short description',
    //         websiteURL: 'www.aykalam.com',
    //         email: 'aarafa757@gmail.com',
    //         password: 'password',
    //     }];

    //     TestSellers.create(setSellers, function (err, results) {

    //         res.send(results);
    //     });
    // });


    // get all
     app.get('/api/sellers', function (req, res) {

        TestSellers.find({}, function (err, sellers) {
            if (err) throw err;

            res.send(sellers)
        });
    });

    //   find by name 
    app.get('/api/sellers/:sellername', function (req, res) {

        TestSellers.find({
            sellerName: req.params.sellername
        }, function (err, sellers) {
            if (err) throw err;

            res.send(sellers)
        });
    });

    // find by id
    app.get('/api/seller/:id', function (req, res) {
        TestSellers.findById({
            _id: req.params.id
        }, function (err, seller) {
            if (err) throw err;
            res.send(seller)
        })
    })

    // find and update & add new (if-else)
    app.post('/api/seller', function (req,res) {
        if (req.body._id) {
            TestSellers.findByIdAndUpdate(req.body._id, {

                sellerName: req.body.sellerName,
                sellerId: req.body.sellerId,
                category: req.body.category,
                address: req.body.address,
                logo: req.body.logo,
                shortDesc: req.body.shortDesc,
                websiteURL: req.body.websiteURL,
                email: req.body.email,
                password: req.body.password,

                
            }, function (err, seller) {
                    if (err) throw err; 
                    console.log(seller);
                    res.send('updated');
            })
        }

        else {
            var newSeller = TestSellers({
               sellerName: req.body.sellerName,
                   sellerId: req.body.sellerId,
                   category: req.body.category,
                   address: req.body.address,
                   logo: req.body.logo,
                   shortDesc: req.body.shortDesc,
                   websiteURL: req.body.websiteURL,
                   email: req.body.email,
                   password: req.body.password,
            });

            newSeller.save(function (err) {
                if (err) throw err;

                res.send('Added');
            })
        }
    })

    // find by id and delete
    app.delete('/api/seller', function (req,res) {
        
        TestSellers.findByIdAndRemove(req.body._id, function (err) {
            if (err) throw err; 
            res.send('deleted');
        })
    })




}