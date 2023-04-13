import express from 'express';
import tagController from '../controllers/Tags';

const router = express.Router();

router.post('/create',  tagController.createTag);
router.get('/get/:tagId', tagController.readTag);
router.get('/get/', tagController.readAllTags);
router.patch('/update/:tagId', tagController.updateTag);
router.delete('/delete/:tagId', tagController.deleteTag);

export = router;
