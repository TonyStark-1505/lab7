var mongoose = require('mongoose');
var StudentChema = mongoose.Schema({
    name : {
    type: String,
    required: [true, 'Name can not be empty']
    },
    dob : Date,
    gpa : {
    type: Number,
    min : [0, 'GPA can not be nagative'],
    max: 10
    },
    gender : {
        type :String ,
        enum: ['Male', 'Female']
    },
    image: String
});
var StudentModel = mongoose.model('gch1105', StudentChema, 'gch1105');
module.exports = StudentModel;