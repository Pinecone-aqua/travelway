import express from 'express';
import travelController from '../controllers/Travel';

const router = express.Router();

router.post('/create', travelController.createTravel);
router.get('/get/:travelId', travelController.readTravel);
router.get('/get/', travelController.readAllTravel);
router.patch('/update/:travelId', travelController.updateTravel);
router.delete('/delete/:travelId', travelController.deleteTravel);

export = router;
