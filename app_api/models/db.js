var mongoose = require("mongoose");
var dbURI = "mongodb://localhost/mekanbul";

// BU KISIM EKSİK OLDUĞU İÇİN ÇALIŞMIYOR:
if (process.env.NODE_ENV === "production") {
    dbURI = process.env.MONGODB_URI;
}

mongoose.connect(dbURI);

mongoose.connection.on("connected", function() {
    console.log("Mongoose " + dbURI + " adresine baglandi.");
});
mongoose.connection.on("error", function(err) {
    console.log("Mongoose baglanti hatasi: " + err);
});
mongoose.connection.on("disconnected", function() {
    console.log("Mongoose baglantisi kesildi.");
});

process.on("SIGINT", function() {
    mongoose.connection.close(function() {
        console.log("Mongoose baglantisi kapatildi.");
        process.exit(0);
    });
});

require("./venue");