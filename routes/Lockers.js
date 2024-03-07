const express = require("express");
const router = express.Router();

const { 
    getAllOrders, 
    getAllOrdersDetails 
} = require("../controllers/Lockers");

router.route("/").get(getAllOrders);
router.route("/reservation").get(getAllOrdersDetails);


module.exports = router;