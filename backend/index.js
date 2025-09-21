require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("express").Router();

const { OrdersModel } = require("./model/OrdersModel");
const { Login, Signup, Logout } = require("./controllers/AutheController");
const {
  allholdings,
  allPositions,
  AllOrders,
} = require("./controllers/AllHoldings");

const { verifyToken } = require("./middleware/verifyToken");

const PORT = process.env.PORT || 3002;
const DB_URL = process.env.MONGO_URL;

const allowedOrigins = [
  process.env.FRONTEND || "https://zerodha-clone-frontend-vb0o.onrender.com",
  process.env.DASHBOARD || "https://zerodha-clone-dashboard.onrender.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB_URL);
  console.log("db Connected");
}

// /signup
router.post("/signup", Signup);

// login
router.post("/login", Login);

//logout
router.post("/logout", Logout);

// routes
app.use("/", router);

router.get("/allHoldings", verifyToken, allholdings);

router.get("/allPosition", verifyToken, allPositions);

router.get("/oders", verifyToken, AllOrders);

app.post("/addorder", verifyToken, async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    UserID: req.user.id,
  });

  newOrder.save();
  res.send("order Saved");
});

app.listen(PORT, () => {
  console.log("app Started", PORT);
});
