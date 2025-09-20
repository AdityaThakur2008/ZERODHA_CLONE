const { model } = require("mongoose");
const bcrypt = require("bcryptjs");

const { UserSchema } = require("../schemas/UserSchema");

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

const UserModel = new model("User", UserSchema);

module.exports = { UserModel };

