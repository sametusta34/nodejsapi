
import express from 'express';
const router = express.Router();
import  homeController from '../controllers/home.mjs';

//home controller için router tanımlaması

router.use("/", homeController.home);
router.use("/about", homeController.about);
router.use("/contact", homeController.contact);

export default router;