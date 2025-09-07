const { model } = require("mongoose");

const { HoldingsSchema } = require("../schemas/holdingsSchema");

const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = { HoldingsModel };
