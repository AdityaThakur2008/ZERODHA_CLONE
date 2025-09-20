const { PositionModel } = require("../model/Positionmodel");
const { HoldingsModel } = require("../model/HoldingsModel");
const { OrdersModel } = require("../model/OrdersModel");

module.exports.allholdings = async (req, res) => {
  let allHoldings = await HoldingsModel.find();
  res.json(allHoldings);
};

module.exports.allPositions = async (req, res) => {
  let allPositions = await PositionModel.find();
  res.json(allPositions);
};

module.exports.AllOrders = async (req, res) => {
  const id = req.user.id;

  let AllOrders = await OrdersModel.find({ UserID: id });
  res.json(AllOrders);
};
