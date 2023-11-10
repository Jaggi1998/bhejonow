const express = require("express");
const router = express.Router();
const app = express();
const { check } = require('express-validator');
app.use('/api',router);
const DEVICE = require ('../controller/devices');

router.post('/add-device',[
    check('deviceId', 'Please enter a valid deviceId').trim().notEmpty().isString()
], DEVICE.addDevice);

router.get('/get-device/:deviceId', DEVICE.getDevice)
router.get('/update-device/:deviceId/:status', DEVICE.updateDevice)
router.get('/delete-device/:deviceId', DEVICE.deleteDevice)

module.exports = router;