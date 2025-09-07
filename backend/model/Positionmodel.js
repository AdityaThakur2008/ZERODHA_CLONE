const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/positionsSchema");

const PositionModel = new model("Position", PositionsSchema);

module.exports = { PositionModel };
