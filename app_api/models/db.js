var mongoose = require("mongoose");

// Varsayılan yerel bağlantı adresi
var dbURI = "mongodb://localhost/mekanbul";

// Eğer uygulama Vercel'de (production) çalışıyorsa Cloud adresini kullan
// PDF Sayfa 24'teki gereksinim budur.
if (process.env.NODE_ENV === "production") {
    dbURI = process.env.MONGODB_URI;
}

mongoose.connect(dbURI);

// Bağlantı olaylarını dinle
mongoose.connection.on("connected", function() {
    console.log("Mongoose " + dbURI + " adresine baglandi.");
});

mongoose.connection.on("error", function(err) {
    console.log("Mongoose baglanti hatasi: " + err);
});

mongoose.connection.on("disconnected", function() {
    console.log("Mongoose baglantisi kesildi.");
});

// Uygulama kapandığında bağlantıyı kapat
process.on("SIGINT", function() {
    mongoose.connection.close(function() {
        console.log("Mongoose baglantisi uygulama sonlandigi icin kapatildi.");
        process.exit(0);
    });
});

// Modeli yükle
require("./venue");