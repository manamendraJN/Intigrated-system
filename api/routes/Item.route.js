import express from "express";
import { AddItems, GetItems, DeleteItems, UpdateItems } from '../controllers/Item.controller.js';
import { addLostItem } from '../controllers/lostItem.controller.js';

const router = express.Router();

router.get('/variance', addLostItem);

//getting messages from API route
router.post('/', AddItems);
router.post('/getitem', GetItems);
router.delete('/item_delete', DeleteItems);
router.post('/Item_update', UpdateItems);

export default router;
