import express from 'express';
import { verifyToken } from '../middleware/verifyToken';
import { upload } from '../lib/multer';
import { createEmployee } from '../controllers/Employee/createEmployee';
import { getEmployee } from '../controllers/Employee/getEmployee';
import { deleteEmployee } from '../controllers/Employee/deleteEmployee';
import { updateEmployee } from '../controllers/Employee/updateEmployee';

const router = express.Router();

router.get('/', verifyToken, getEmployee);
router.post('/', upload.single("file"), createEmployee);
router.delete('/:id', verifyToken, deleteEmployee);
router.put('/:id', upload.single("file"), updateEmployee);

export default router;