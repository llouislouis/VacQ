const mongoose = require('mongoose');

const HospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'please add a name'],
        unique: true,
        trim: true,
        maxlength:[50,'Name cannot be more than 50 characters'] 
    },
    address:{
        type: String,
        required: [true, 'Please add an adress']
    },
    district:{
        type: String,
        required: [true,'Please add a district']
    },
    province:{
        type: String,
        required: [true,'please add a province']
    },
    postalcode:{
        type: String,
        required: [true,'please add a postalcode'],
        maxlength:[5,'Postal Code cannot be more than 5 digits']    
    },
    tel:{
        type: String,
        required: [true,'please add a region']
    }
});

module.exports=mongoose.model('Hospital',HospitalSchema);