var express = require('express');
var router = express.Router();

// Controller'ları çağırıyoruz
// DİKKAT: Dosya ismin klasörde "venueController.js" (küçük v) ise burayı da küçük yap!
var ctrlVenues = require('../controllers/VenueController'); 
var ctrlComments = require('../controllers/CommentController');

// MEKAN ROTALARI
router
  .route('/venues')
  .get(ctrlVenues.listVenues)
  .post(ctrlVenues.addVenue);

router
  .route('/venues/:venueid')
  .get(ctrlVenues.getVenue)
  .put(ctrlVenues.updateVenue)
  .delete(ctrlVenues.deleteVenue);

// YORUM ROTALARI
router
  .route('/venues/:venueid/comments')
  .post(ctrlComments.addComment);

router
  .route('/venues/:venueid/comments/:commentid')
  .get(ctrlComments.getComment)
  .put(ctrlComments.updateComment)
  .delete(ctrlComments.deleteComment);

module.exports = router;