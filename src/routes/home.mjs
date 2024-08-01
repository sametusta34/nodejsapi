
import express from 'express';
const router = express.Router();
import  homeController from '../controllers/home.mjs';

//home controller için router tanımlaması

router.get('/', homeController.home);
router.get('/about', homeController.about);
router.get('/contact', homeController.contact);

export default router;