import express from 'express';
import { upload } from '../lib/multer';
import { createDepartmentHead } from '../controllers/DepartmentHead/createDepartmentHead';
import { verifyToken } from '../middleware/verifyToken';
import { getDepartmentHead } from '../controllers/DepartmentHead/getDepartmentHead';
import { deleteDepartmentHead } from '../controllers/DepartmentHead/deleteDepartmentHead';
import { updateDepartmentHead } from '../controllers/DepartmentHead/updateDepartmentHead';

const router = express.Router();

router.post('/', upload.single("file"), createDepartmentHead);
router.get('/', verifyToken, getDepartmentHead);
router.delete('/:id', verifyToken, deleteDepartmentHead);
router.put('/:id', upload.single("file"), updateDepartmentHead);

export default router;