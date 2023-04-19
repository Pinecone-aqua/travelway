import express from 'express';
import destTravelController from '../controllers/DestTravel';

const router = express.Router();

router.post('/create', destTravelController.createTravel);
router.get('/get/:travelid', destTravelController.readTravel);
router.get('/get', destTravelController.readAllTravel);
router.get('/getid', destTravelController.readTravelAllIDs);
router.patch('/update/:travelid', destTravelController.updateTravel);
router.delete('/delete/:travelid', destTravelController.deleteTravel);

export = router;
