import express from 'express';
import tagController from '../controllers/Tags';
import { Schemas, ValidateSchema } from '../middleware/ValidateSchema';

const router = express.Router();

router.post('/create', ValidateSchema(Schemas.tags.create), tagController.createTag);
router.get('/get/:tagId', tagController.readTag);
router.get('/get/', tagController.readAllTags);
router.patch('/update/:tagId', ValidateSchema(Schemas.tags.update), tagController.updateTag);
router.delete('/delete/:tagId', tagController.deleteTag);

export = router;
