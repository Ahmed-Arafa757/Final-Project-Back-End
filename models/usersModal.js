var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var usersSchema = new Schema({

    _id: String,
    userName: {
        type:String,
        required:true,
        max:40,
        min:6
    },
    email: {type:String,required:true,max:40,min:10},
    name: { first: String, last: String },
    age: Number,
    phone: String,
    img: String,
    dateOfRegister: String,
    address: [{
        postalCode: Number,
        street: String,
        state: String,
        city: String,
        country: String,
        geoMap: {
            latitude: Number,
            longitude: Number,
        }
    }],
    password:{
        type:String,
        required:true,
        max:40,
        min:10
    }

    
    
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;