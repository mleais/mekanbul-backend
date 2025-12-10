var mongoose = require("mongoose");
var dbURI = "mongodb://localhost/mekanbul";

// VERCEL İÇİN GEREKLİ AYAR
if (process.env.NODE_ENV === "production") {
    dbURI = process.env.MONGODB_URI;
}

mongoose.connect(dbURI);

// Bağlantı mesajları...
mongoose.connection.on("connected", function() {
    console.log("Mongoose " + dbURI + " adresine baglandi.");
});
// ... diğer kodlar aynı kalabilir ...
require("./venue");