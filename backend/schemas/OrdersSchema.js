const { Schema } = require("mongoose");
const { UserModel } = require("./UserSchema");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  UserID: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = { OrdersSchema };
