const Device = require('../models/device');
const { validationResult } = require('express-validator');


exports.addDevice = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).send({status:false, message:errors.array()[0].msg})
        let {deviceId, userId, status} = req.body
        let checkDevice = await Device.findOne({deviceId})
        if (checkDevice) return res.status(400).send({status:false, message:"device already exist"})
        
        await Device.create({deviceId, userId, status})

        return res.status(200).send({status:true, message:"Device added"})

    } catch (err) {
        return res.status(400).send({status: false, message:err.message})
    }
}

exports.getDevice = async (req, res) => {
    try {
  
      let {deviceId} = req.params;
  
      if (!deviceId) return res.status(400).send({status: false, message:"Device ID is required"})

     let getDevice = await Device.findOne({deviceId: deviceId})
  
      return res.status(200).send({status: true, device:getDevice})
    } catch (err) {
      return res.status(400).send({status: false, message:err.message})
    }
  }

exports.updateDevice = async (req, res) => {
    try {
  
      let {deviceId, status} = req.params;

      if (!deviceId) return res.status(400).send({status: false, message:"Device ID is required"})
      if (!status) return res.status(400).send({status: false, message:"Status is required"})
  
     let getDevice = await Device.findOneAndUpdate({deviceId: deviceId}, {$set:{status:status}}, {new: true})
  
      return res.status(200).send({status: true, device:getDevice})
    } catch (err) {
      return res.status(400).send({status: false, message:err.message})
    }
  }


exports.deleteDevice = async (req, res) => {
    try {
  
      let {deviceId} = req.params;

      if (!deviceId) return res.status(400).send({status: false, message:"Device ID is required"})

      await Device.findOneAndDelete({deviceId: deviceId})
  
      return res.status(200).send({status: true, messsage:"Device deleted successfully"})
    } catch (err) {
      return res.status(400).send({status: false, message:err.message})
    }
  }