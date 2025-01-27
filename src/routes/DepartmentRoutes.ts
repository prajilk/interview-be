import express from 'express';
import { verifyToken } from '../middleware/verifyToken';
import { getDepartment } from '../controllers/Department/getDepartment';
import { createDepartment } from '../controllers/Department/createDepartment';
import { upload } from '../lib/multer';
import { deleteDepartment } from '../controllers/Department/deleteDepartment';
import { updateDepartment } from '../controllers/Department/updateDepartment';

const router = express.Router();

router.get('/', verifyToken, getDepartment);
router.post('/', upload.single("file"), createDepartment);
router.delete('/:id', verifyToken, deleteDepartment);
router.put('/:id', upload.single("file"), updateDepartment);

export default router;