const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeviceSchema = new Schema(
  {
    userId:{
        type: mongoose.Schema.Types.ObjectId,
      },
    deviceId: {
      type: String,
      required: true,
    },
    devceName: {
        type: String,
    },
    status: {
      type : Number,
      default : 0
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);


const Device = mongoose.model("device", DeviceSchema);

module.exports = Device;
