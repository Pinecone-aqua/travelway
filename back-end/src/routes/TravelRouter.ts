import express from 'express';
import travelController from '../controllers/Travel';

const router = express.Router();

router.post('/create', travelController.createTravel);
router.get('/get/:travelid', travelController.readTravel);
router.get('/get', travelController.readAllTravel);
router.get('/getid', travelController.readTravelAllIDs);
router.patch('/update/:travelid', travelController.updateTravel);
router.delete('/delete/:travelid', travelController.deleteTravel);

export = router;
