const mongoose = require ("mongoose");
mongoose.connect('mongodb://localhost:27017/rumah')

var Schema = mongoose.Schema;

var rumahSchema = new Schema({
    jenisRumah : String,
    Harga : Number,
    LuasTanah:String,
    JumlahUnit:Number
});

var rumah = mongoose.model('databaseRumah',rumahSchema);
module.exports = rumah