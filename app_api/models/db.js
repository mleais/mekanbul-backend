var mongoose = require("mongoose");

// Varsayılan yerel bağlantı
var dbURI = "mongodb://localhost/mekanbul";

// EĞER VERCEL'DEYSEK (Production), CLOUD ADRESİNİ KULLAN
// Bu kısım olmadan projeniz Vercel'de çalışmaz!
if (process.env.NODE_ENV === "production") {
    dbURI = process.env.MONGODB_URI;
}

mongoose.connect(dbURI);

// Bağlantı mesajları
mongoose.connection.on("connected", function() {
    console.log("Mongoose " + dbURI + " adresine baglandi.");
});
mongoose.connection.on("error", function(err) {
    console.log("Mongoose baglanti hatasi: " + err);
});
mongoose.connection.on("disconnected", function() {
    console.log("Mongoose baglantisi kesildi.");
});

// Uygulama kapandığında
process.on("SIGINT", function() {
    mongoose.connection.close(function() {
        console.log("Mongoose baglantisi kapatildi.");
        process.exit(0);
    });
});

require("./venue");