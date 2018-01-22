const mongoose = require ("mongoose");
mongoose.connect('mongodb://localhost:27017/rumah')

var Schema = mongoose.Schema;

var customerSchema = new Schema({
    Nama:String,
    Alamat : String,
    LuasTanah:String,
    Kontak:Number,
});

var customer = mongoose.model('databaseCustomer',customerSchema);
module.exports = customer