var express = require('express');
var router = express.Router();
// Controller dosyalarımızı burada tanımlıyoruz
var ctrlVenues = require('../controllers/VenueController');
var ctrlComments = require('../controllers/CommentController');

// MEKANLAR (VENUES) ROTALARI
router
  .route('/venues')
  .get(ctrlVenues.listVenues)  // Mekanları listele
  .post(ctrlVenues.addVenue);  // Yeni mekan ekle

router
  .route('/venues/:venueid')
  .get(ctrlVenues.getVenue)    // Belirli bir mekanı getir
  .put(ctrlVenues.updateVenue) // Mekanı güncelle
  .delete(ctrlVenues.deleteVenue); // Mekanı sil

// YORUMLAR (COMMENTS) ROTALARI
router
  .route('/venues/:venueid/comments')
  .post(ctrlComments.addComment); // Yorum ekle

router
  .route('/venues/:venueid/comments/:commentid')
  .get(ctrlComments.getComment)    // Yorum getir
  .put(ctrlComments.updateComment) // Yorum güncelle
  .delete(ctrlComments.deleteComment); // Yorum sil

module.exports = router;