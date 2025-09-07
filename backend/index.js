require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const { PositionModel } = require("./model/Positionmodel");

const PORT = process.env.PORT || 3002;
const DB_URL = process.env.MONGO_URL;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB_URL);
  console.log("db Connected");
}
// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];
//   tempHoldings.forEach((item) => {
//     let newHoldingsModel = new PositionModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newHoldingsModel.save();
//   });
//   res.send("Done !");
// });

app.get("/", (req, res) => {
  res.send("done");
});
app.listen(PORT, () => {
  console.log("app Started");
});
