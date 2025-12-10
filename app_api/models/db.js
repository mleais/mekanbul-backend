var mongoose = require("mongoose");
var dbURI = "mongodb://localhost/mekanbul";

// VERCEL AYARI (ÖNEMLİ)
if (process.env.NODE_ENV === "production") {
    dbURI = process.env.MONGODB_URI;
}

mongoose.connect(dbURI);

mongoose.connection.on("connected", function() {
    console.log("Mongoose bağlandı: " + dbURI);
});
mongoose.connection.on("error", function(err) {
    console.log("Mongoose bağlantı hatası: " + err);
});
mongoose.connection.on("disconnected", function() {
    console.log("Mongoose bağlantısı kesildi.");
});

// Uygulama kapandığında
process.on("SIGINT", function() {
    mongoose.connection.close(function() {
        console.log("Bağlantı kapatıldı.");
        process.exit(0);
    });
});

require("./venue");